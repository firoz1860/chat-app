
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, LogOut, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Logout({ modal, setModal }) {
  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();
  const { logout, setError } = useAuth();

  async function handleLogout() {
    try {
      setError("");
      await logout();
      setModal(false);
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  if (!modal) return null;

  return (
    <div className="modal-overlay flex items-center justify-center p-4">
      <div className="modal-content">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Confirm Logout
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to log out? You'll need to sign in again to access your chats.
            </p>
            <div className="flex space-x-3">
              <button
                type="button"
                className="btn-primary bg-red-600 hover:bg-red-700 flex items-center"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => setModal(false)}
                ref={cancelButtonRef}
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

