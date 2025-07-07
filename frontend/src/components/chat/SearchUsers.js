import { Search } from "lucide-react";

export default function SearchUsers({ handleSearch }) {
  return (
    <div className="search-container relative">
      <Search className="search-icon w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      <input
        type="search"
        placeholder="Search conversations..."
        className="search-input w-full pl-12 pr-4 py-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 transition-all duration-300"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
