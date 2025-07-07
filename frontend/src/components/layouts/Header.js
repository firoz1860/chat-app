import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, MessageCircle } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
// import Logout from "../auth/LogOut";
import Logout from "../accounts/Logout";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  const [modal, setModal] = useState(false);
  const { currentUser } = useAuth();

  return (
    <>
      <nav className="header-nav sticky top-0 z-40 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient-primary">
              ChatApp
            </span>
          </Link>

          <div className="flex items-center space-x-3">
            <ThemeToggler />

            {currentUser && (
              <>
                <button
                  className="theme-toggle hover-glow"
                  onClick={() => setModal(true)}
                >
                  <LogOut className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>

                <Link
                  to="/profile"
                  className="flex items-center space-x-2 hover-lift"
                >
                  <img
                    className="avatar w-8 h-8"
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                  />
                  <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {currentUser.displayName}
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      {modal && <Logout modal={modal} setModal={setModal} />}
    </>
  );
}

