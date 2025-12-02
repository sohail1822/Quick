# QuickAI

A full-stack AI-powered web application that provides multiple tools for content creation, image manipulation, and document analysis.

## Overview

QuickAI is a modern web application built with React and Express.js that leverages artificial intelligence APIs to provide various AI tools. Users can generate articles, blog titles, images, remove backgrounds from images, remove objects from photos, review resumes, and connect with a community.

## Features

### AI Tools Available:
- **Article Generation** - Generate full articles based on prompts with customizable length
- **Blog Title Generation** - Create engaging blog titles for your content
- **Image Generation** - Generate images using AI
- **Background Removal** - Remove backgrounds from images
- **Object Removal** - Remove unwanted objects from photos
- **Resume Review** - Analyze and review resume documents
- **Community** - Connect with other users

### Key Features:
- **User Authentication** - Secure authentication powered by Clerk
- **Subscription Plans** - Free and Premium plans with usage limits
- **File Uploads** - Support for image and PDF document uploads via Cloudinary
- **Responsive UI** - Mobile-friendly interface built with React and Tailwind CSS
- **Real-time Notifications** - Toast notifications for user feedback

## Tech Stack

### Frontend
- **React** 19.2.0 - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Clerk React** - Authentication
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **React Markdown** - Markdown rendering
- **Lucide React** - Icon library

### Backend
- **Express** 5.1.0 - Web framework
- **Node.js** - JavaScript runtime
- **OpenAI API** - AI model access (Gemini 2.0 Flash)
- **PostgreSQL** - Database (via Neon)
- **Cloudinary** - Image storage and manipulation
- **Clerk Express** - Authentication middleware
- **Multer** - File upload handling
- **CORS** - Cross-Origin Resource Sharing

## Project Structure

```
QuickAI/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components (Dashboard, GenerateImages, etc.)
│   │   ├── assets/        # Static assets
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # React entry point
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── server/                # Express backend application
│   ├── configs/           # Configuration files (DB, Cloudinary, Multer)
│   ├── controllers/       # Route handlers
│   ├── middlewares/       # Custom middleware (Auth)
│   ├── routes/            # API routes
│   ├── utility/           # Helper functions (PDF extraction)
│   ├── package.json
│   └── server.js          # Express server entry point
│
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database (Neon)
- Cloudinary account
- OpenAI/Gemini API key
- Clerk account for authentication

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Clerk Configuration
CLERK_SECRET_KEY=your_clerk_secret_key

# Database Configuration
DATABASE_URL=your_neon_postgresql_url

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# AI API Configuration
GEMINI_API_KEY=your_gemini_api_key
```

For the client, create a `.env.local` file:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sohail1822/Quick.git
   cd Quick
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

### Running the Application

**Terminal 1 - Start the Backend Server:**
```bash
cd server
npm run server
```
The server will run on `http://localhost:3000`

**Terminal 2 - Start the Frontend Development Server:**
```bash
cd client
npm run dev
```
The client will typically run on `http://localhost:5173`

## Available Scripts

### Client Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server Scripts
- `npm run server` - Start server with nodemon (auto-reload)
- `npm start` - Start server (production)

## API Endpoints

### AI Routes (`/api/ai`)
- `POST /generate-article` - Generate an article
- `POST /generate-blog-title` - Generate blog titles
- `POST /generate-image` - Generate images
- `POST /remove-image-background` - Remove background from image
- `POST /remove-image-object` - Remove object from image
- `POST /resume-review` - Review and analyze resume

### User Routes (`/api/user`)
- User-related endpoints for profile and subscription management

**Note:** All routes require authentication.

## Authentication

The application uses **Clerk** for secure authentication:
- Sign up and sign in functionality
- User metadata storage for tracking usage
- Free tier usage limits (10 free uses per feature)
- Premium subscription support

## Features Details

### Subscription Model
- **Free Plan**: Limited usage (10 uses per feature)
- **Premium Plan**: Unlimited usage

### AI Models Used
- **Gemini 2.0 Flash** - Text and content generation
- **Cloudinary API** - Image manipulation

## Deployment

### Frontend (Vercel recommended)
```bash
cd client
npm run build
```
Deploy the `dist` folder to Vercel or your preferred hosting.

### Backend (Render, Railway, or similar)
```bash
cd server
npm start
```
Ensure all environment variables are configured in your deployment platform.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please reach out or open an issue on the GitHub repository.

## Roadmap

- [ ] Advanced analytics dashboard
- [ ] More AI features (translation, summarization)
- [ ] Social sharing capabilities
- [ ] API documentation
- [ ] Mobile app development
- [ ] Batch processing for multiple files

---

**Built with ❤️ by Sohail**
