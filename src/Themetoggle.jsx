import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import "./HeaderToggle.css";

function HeaderToggle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.className = savedMode ? "dark-mode" : "light-mode";
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.className = newMode ? "dark-mode" : "light-mode";
  };
  return(
    <div className="header-container">
      {/* Menu Button */}
      <button className="icon-btn" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Title */}
      <h2 className="header-title">BMI & Diet Checker</h2>

      {/* Theme Toggle */}
      <button className="icon-btn" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Menu Items */}
      {menuOpen && (
        <ul className="menu-list">
          <li>🏠 Home</li>
          <li>📏 BMI Calculator</li>
          <li>🥗 Diet Plan</li>
          <li>ℹ️ About</li>
        </ul>
      )}
    </div>
  );
}

export default HeaderToggle;
