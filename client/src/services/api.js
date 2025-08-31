// client/src/services/api.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = {
  // Generic request handler
  request: async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      return { data, status: response.status };
    } catch (error) {
      throw error;
    }
  },

  // File upload request handler
  uploadRequest: async (endpoint, formData, token, method = 'POST') => {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
        // Don't set Content-Type for FormData - browser will set it with boundary
      },
      body: formData,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Upload failed');
      }
      
      return { data, status: response.status };
    } catch (error) {
      throw error;
    }
  },

  // Backward compatibility methods for existing code
  get: async (endpoint, options = {}) => {
    return api.request(endpoint, { method: 'GET', ...options });
  },

  post: async (endpoint, data, options = {}) => {
    return api.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options
    });
  },

  put: async (endpoint, data, options = {}) => {
    return api.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options
    });
  },

  delete: async (endpoint, options = {}) => {
    return api.request(endpoint, { method: 'DELETE', ...options });
  }
};

// Auth API
export const authAPI = {
  login: (credentials) => api.request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  
  register: (userData) => api.request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  getProfile: (token) => api.request('/auth/profile', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
};

// Posts API
export const postsAPI = {
  getAllPosts: (searchQuery = '', page = 1, limit = 10) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(searchQuery && { search: searchQuery }),
    });
    return api.request(`/posts?${params}`);
  },
  
  getPost: (id) => api.request(`/posts/${id}`),
  
  getUserPosts: (token) => api.request('/posts/user/me', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  
  // FIXED: createPost to handle both URL and file uploads properly
  createPost: async (postData, token, imageFile = null) => {
    if (imageFile) {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('content', postData.content);
      formData.append('image', imageFile);
      
      return api.uploadRequest('/posts', formData, token);
    } else {
      // Direct fetch call to bypass any api method issues
      const url = `${API_BASE_URL}/posts`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      return { data, status: response.status };
    }
  },
  
  // Updated updatePost to handle both URL and file uploads
  updatePost: async (id, postData, token, imageFile = null, removeImage = false) => {
    if (imageFile || removeImage) {
      // Create FormData for file upload or image removal
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('content', postData.content);
      
      if (imageFile) {
        formData.append('image', imageFile);
      }
      
      if (removeImage) {
        formData.append('removeImage', 'true');
      }
      
      if (postData.imageURL) {
        formData.append('imageURL', postData.imageURL);
      }
      
      return api.uploadRequest(`/posts/${id}`, formData, token, 'PUT');
    } else {
      // Use the api.put method which properly handles JSON
      return api.put(`/posts/${id}`, postData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    }
  },
  
  deletePost: (id, token) => api.request(`/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  
  // NEW: Standalone image upload endpoint
  uploadImage: (imageFile, token) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    return api.uploadRequest('/posts/upload-image', formData, token);
  },
};

// Export both named and default exports for backward compatibility
export { api };
export default api;
