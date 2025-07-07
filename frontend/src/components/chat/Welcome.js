import { MessageCircle, Users, Zap } from "lucide-react";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-float">
            <MessageCircle className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <Zap className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gradient-primary">
            Welcome to ChatApp
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Select a conversation to start messaging, or find someone new to chat with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Find Friends
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discover and connect with new people
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <MessageCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Start Chatting
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Begin conversations instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


