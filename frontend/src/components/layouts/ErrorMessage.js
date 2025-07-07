import { X, AlertCircle } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function ErrorMessage() {
  const { error, setError } = useAuth();

  if (!error) return null;

  return (
    <div className="fixed top-20 right-4 z-50 max-w-md">
      <div className="error-message p-4 rounded-2xl shadow-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800 dark:text-red-200">
              {error}
            </p>
          </div>
          <button
            onClick={() => setError("")}
            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
