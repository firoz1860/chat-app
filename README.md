# 🚀 Chat-App by firoz1860

A modern, real-time messaging platform built with cutting-edge web technologies. Experience seamless communication with beautiful UI/UX design and lightning-fast performance.

## ✨ Features That Make It Special

### 🔐 **Secure Authentication**
- Email/password registration and login
- Firebase-powered authentication system
- Secure user session management

### 👤 **Personalized Profiles**
- Custom avatar selection with DiceBear API integration
- Editable display names and profile information
- Random avatar generation for quick setup

### 💬 **Real-Time Messaging**
- Instant message delivery with Socket.io
- Live typing indicators
- Online/offline status tracking
- Message timestamps and delivery status

### 🎨 **Beautiful Interface**
- Modern glassmorphism design
- Smooth animations and micro-interactions
- Dark/light theme toggle
- Responsive design for all devices

### 🔍 **Smart Features**
- Advanced search functionality
- Emoji picker integration
- Message history preservation
- Room-based chat organization

## 🛠️ Tech Stack

| Frontend | Backend | Database | Real-time |
|----------|---------|----------|-----------|
| React 18 | Node.js | MongoDB | Socket.io |
| Tailwind CSS | Express.js | Mongoose | WebSockets |
| Lucide Icons | Firebase Auth | - | - |

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Firebase project setup

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/firoz1860/chat-app.git
   cd chat-app
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   cd frontend
   npm install

   # Backend dependencies
   cd ../server
   npm install
   ```

3. **Firebase Configuration**
   - Visit [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Generate service account key
   - Save as `serviceAccountKey.json` in `server/config/`

4. **Environment Setup**
   
   **Frontend (.env)**
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

   **Backend (.env)**
   ```env
   PORT=3001
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

5. **Launch the application**
   ```bash
   # Start backend server
   cd server
   npm run start

   # Start frontend (new terminal)
   cd frontend
   npm start
   ```

6. **Access the app**
   - Open your browser to `http://localhost:3000`
   - Create an account and start chatting!

## 📱 Application Screenshots

### Login & Registration
![Auth Flow](https://via.placeholder.com/600x300/4facfe/ffffff?text=Authentication+Flow)

### Chat Interface
![Chat Interface](https://via.placeholder.com/600x300/667eea/ffffff?text=Chat+Interface)

### Dark Mode
![Dark Mode](https://via.placeholder.com/600x300/232526/ffffff?text=Dark+Mode+Support)

## 🎯 Key Highlights

- **⚡ Lightning Fast**: Optimized performance with React 18 features
- **🔒 Secure**: Firebase authentication with proper security rules
- **📱 Responsive**: Perfect experience on mobile, tablet, and desktop
- **🌙 Dark Mode**: Beautiful dark theme for comfortable night usage
- **🎨 Modern UI**: Glassmorphism design with smooth animations
- **🔄 Real-time**: Instant message delivery and status updates

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Firoz Ahmad** - [@firoz1860](https://github.com/firoz1860)

- 🌐 Portfolio: [Your Portfolio URL]
- 📧 Email: [Your Email]
- 💼 LinkedIn: [Your LinkedIn]

## 🙏 Acknowledgments

- Firebase for authentication services
- DiceBear for avatar generation
- Socket.io for real-time functionality
- Tailwind CSS for styling framework
- React community for amazing tools

---

