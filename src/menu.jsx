import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "./app.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.body.className = saved ? "dark-mode" : "light-mode";
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.className = newMode ? "dark-mode" : "light-mode";
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <button className="icon-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <h2 className="title">BMI & Diet Checker</h2>

        <button className="icon-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* Menu Items */}
      {menuOpen && (
        <ul className="menu-list">
          <li>🏠 Home</li>
          <li>📏 BMI Calculator</li>
          <li>🥗 Diet Plan</li>
          <li>ℹ️ About</li>
        </ul>
      )}

      {/* Main content */}
      <div className="content">
        <h3>Welcome! Use the menu above and check your BMI below.</h3>
      </div>
    </div>
  );
}

export default App;
