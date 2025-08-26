import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 text-lg p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
