export default function UserLayout({ user, onlineUsersId }) {
  if (!user) return null;

  const isOnline = onlineUsersId?.includes(user.uid);

  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <img
          className="avatar w-12 h-12"
          src={user.photoURL}
          alt={user.displayName}
        />
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
            isOnline ? "status-online" : "status-offline"
          }`}
        ></div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 dark:text-white truncate">
          {user.displayName}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}
