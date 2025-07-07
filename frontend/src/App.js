import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Profile from "./components/accounts/Profile";
import WithPrivateRoute from "./utils/WithPrivateRoute";
import ChatLayout from "./components/layouts/ChatLayout";
import Header from "./components/layouts/Header";
import ErrorMessage from "./components/layouts/ErrorMessage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
          <Header />
          <ErrorMessage />
          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <WithPrivateRoute>
                    <Profile />
                  </WithPrivateRoute>
                }
              />
              <Route
                path="/"
                element={
                  <WithPrivateRoute>
                    <ChatLayout />
                  </WithPrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;


