import React from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import useLocalStorage from "./useLocalStroage.jsx";

export default function DarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-[var(--background)] text-xl transition-all"
      data-theme={theme}
    >
      <div className="">
        <p className="text-4xl font-bold text-[var(--text-primary)]">Hello World!</p>
        <button onClick={handleToggleTheme} className="">
          {theme === "light" ? (
            <FaToggleOff className="text-3xl mt-6" />
          ) : (
            <FaToggleOn className="text-3xl mt-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
