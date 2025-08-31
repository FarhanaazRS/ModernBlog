# Modern Blog 📝

A full-stack modern blog application built with React, Node.js, Express, and MongoDB. Features user authentication, post management, image uploads via Cloudinary, and a responsive design.

## 🚀 Live Demo

**[View Live Application](https://modernblog-95gz.onrender.com)**

## 📸 Screenshots

### Homepage & Post List
![Homepage]<img width="960" height="441" alt="image" src="https://github.com/user-attachments/assets/4e49e361-3198-48f3-be33-5e3bead6796a" />
<img width="960" height="443" alt="image" src="https://github.com/user-attachments/assets/0093a5c3-ae20-4845-b71c-8ba22de4ad5a" />


*Clean and responsive homepage displaying all blog posts with search functionality*

### Post Detail & Comments
![Post Detail]<img width="960" height="442" alt="image" src="https://github.com/user-attachments/assets/9c26773c-5a69-4371-9437-db5f96d034bd" />
*Individual post view with full content, author information, and interactive features*

### Dashboard & Post Creation
![Create Post] <img width="960" height="412" alt="image" src="https://github.com/user-attachments/assets/a3e8e89f-1839-41a7-8047-da5c4f710430" />


*User-friendly post creation and editing interface with image upload support*

## ✨ Features

### 🔐 Authentication & User Management
- User registration and login
- JWT-based authentication
- Protected routes and middleware
- User profile management
- Secure password handling

### 📝 Blog Post Management
- Create, read, update, and delete posts
- Rich text content support
- Image upload and management via Cloudinary
- Post categorization and tagging
- Real-time post updates

### 🔍 Search & Discovery
- Full-text search functionality
- Filter posts by author, date, or category
- Responsive post grid layout
- Pagination for better performance

### 🎨 User Experience
- Responsive design for all devices
- Loading spinners and smooth transitions
- Toast notifications for user feedback
- Clean and modern UI/UX
- Fast and optimized performance

### 🛡️ Security & Performance
- Input validation and sanitization
- Rate limiting and security headers
- Optimized database queries
- Image optimization via Cloudinary
- Error handling and logging

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building interactive interfaces
- **React Router** - Client-side routing
- **Context API** - State management
- **CSS3** - Modern styling and animations
- **Fetch API** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling

### Cloud Services
- **Cloudinary** - Image upload, storage, and optimization
- **Render** - Application hosting and deployment

### Authentication
- **JWT (JSON Web Tokens)** - Secure user authentication
- **bcryptjs** - Password hashing and security

## 📁 Project Structure

```
modern-blog/
├── client/                     # React frontend application
│   ├── public/
│   │   └── index.html         # HTML template
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Auth/          # Authentication components
│   │   │   │   ├── Login.js
│   │   │   │   └── Register.js
│   │   │   ├── Layout/        # Layout components
│   │   │   │   └── Navbar.js
│   │   │   ├── Posts/         # Post-related components
│   │   │   │   ├── CreatePost.js
│   │   │   │   ├── EditPost.js
│   │   │   │   ├── PostDetail.js
│   │   │   │   └── PostList.js
│   │   │   ├── Profile/       # User profile components
│   │   │   │   └── Profile.js
│   │   │   └── UI/            # Reusable UI components
│   │   │       ├── LoadingSpinner.js
│   │   │       ├── SearchBox.js
│   │   │       └── Toast.js
│   │   ├── context/           # React context providers
│   │   │   └── AuthContext.js
│   │   ├── hooks/             # Custom React hooks
│   │   │   └── useToast.js
│   │   ├── services/          # API service layer
│   │   │   └── api.js
│   │   ├── styles/            # CSS stylesheets
│   │   │   ├── global.css
│   │   │   └── index.css
│   │   ├── App.js             # Main application component
│   │   └── index.js           # Application entry point
│   ├── .env                   # Environment variables
│   ├── .env.example           # Environment variables template
│   └── package.json           # Dependencies and scripts
├── server/                     # Express backend application
│   ├── config/                # Configuration files
│   │   └── cloudinary.js      # Cloudinary setup
│   ├── middleware/            # Express middleware
│   │   ├── auth.js            # Authentication middleware
│   │   └── upload.js          # File upload middleware
│   ├── models/                # Mongoose data models
│   │   ├── Post.js            # Blog post model
│   │   └── User.js            # User model
│   ├── routes/                # API route handlers
│   │   ├── auth.js            # Authentication routes
│   │   └── posts.js           # Post management routes
│   ├── .env                   # Server environment variables
│   ├── .env.example           # Server environment template
│   ├── index.js               # Server entry point
│   └── package.json           # Server dependencies
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** database (local or cloud)
- **Cloudinary** account for image uploads

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/modern-blog.git
   cd modern-blog
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   **Server (.env):**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

   **Client (.env):**
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

5. **Start the development servers**

   **Backend (in server directory):**
   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

   **Frontend (in client directory):**
   ```bash
   npm start
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 🔧 Configuration

### MongoDB Setup
- Create a MongoDB database (local or MongoDB Atlas)
- Add your connection string to the server `.env` file
- The application will automatically create the necessary collections

### Cloudinary Setup
1. Create a free account at [Cloudinary](https://cloudinary.com)
2. Get your cloud name, API key, and API secret from the dashboard
3. Add these credentials to your server `.env` file

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info

### Posts
- `GET /api/posts` - Get all posts (with search and pagination)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (authenticated)
- `PUT /api/posts/:id` - Update post (authenticated, author only)
- `DELETE /api/posts/:id` - Delete post (authenticated, author only)

## 🏗️ Deployment

### Environment Variables for Production
Ensure all environment variables are properly set in your hosting platform:

**Server:**
- `MONGODB_URI`
- `JWT_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

**Client:**
- `REACT_APP_API_URL` (your deployed backend URL)

### Build for Production

**Client:**
```bash
cd client
npm run build
```

**Server:**
```bash
cd server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Cloudinary](https://cloudinary.com/) - Image management
- [Render](https://render.com/) - Hosting platform

---

⭐ **Star this repository if you found it helpful!**
