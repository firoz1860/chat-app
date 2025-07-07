import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Save } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { generateAvatars } from "../../utils/GenerateAvatar";
//  import { generateAvatar } from "../../utils/GenerateAvatar";

export default function Profile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser, updateUserProfile, setError } = useAuth();

  useEffect(() => {
    const fetchAvatars = () => {
      const generatedAvatars = generateAvatars();
      setAvatars(generatedAvatars);
    };
    fetchAvatars();
  }, []);

  useEffect(() => {
    if (currentUser?.displayName) {
      setUsername(currentUser.displayName);
    }
  }, [currentUser]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (selectedAvatar === null) {
      return setError("Please select an avatar");
    }

    if (!username.trim()) {
      return setError("Please enter a display name");
    }

    try {
      setError("");
      setLoading(true);
      const profile = {
        displayName: username.trim(),
        photoURL: avatars[selectedAvatar],
      };
      await updateUserProfile(currentUser, profile);
      navigate("/");
    } catch (e) {
      setError("Failed to update profile");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="auth-form w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gradient-primary mb-2">
            Complete Your Profile
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Choose an avatar and display name
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label text-center block mb-6">
              Choose Your Avatar
            </label>
            <div className="avatar-grid grid grid-cols-3 gap-4">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className={`avatar-selector p-2 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    index === selectedAvatar
                      ? "ring-4 ring-blue-500 ring-opacity-75 shadow-xl scale-105 bg-blue-50 dark:bg-blue-900/20"
                      : "hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                  onClick={() => setSelectedAvatar(index)}
                >
                  <img
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className="w-full h-24 object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Display Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                required
                className="modern-input pl-12 w-full focus-ring"
                placeholder="Enter your display name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Updating Profile...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Save className="w-5 h-5 mr-2" />
                Save Profile
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}


