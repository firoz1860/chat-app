import { useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggler() {
  const themeToggleBtn = useRef();
  const themeToggleLightIcon = useRef();
  const themeToggleDarkIcon = useRef();

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      if (themeToggleLightIcon.current) {
        themeToggleLightIcon.current.classList.remove("hidden");
      }
    } else {
      document.documentElement.classList.remove("dark");
      if (themeToggleDarkIcon.current) {
        themeToggleDarkIcon.current.classList.remove("hidden");
      }
    }
  }, []);

  const handleThemeToggle = () => {
    themeToggleDarkIcon.current?.classList.toggle("hidden");
    themeToggleLightIcon.current?.classList.toggle("hidden");

    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  return (
    <button
      ref={themeToggleBtn}
      type="button"
      className="theme-toggle hover-glow"
      onClick={handleThemeToggle}
    >
      <Moon
        ref={themeToggleDarkIcon}
        className="hidden w-5 h-5 text-gray-600 dark:text-gray-400"
      />
      <Sun
        ref={themeToggleLightIcon}
        className="hidden w-5 h-5 text-gray-600 dark:text-gray-400"
      />
    </button>
  );
}
