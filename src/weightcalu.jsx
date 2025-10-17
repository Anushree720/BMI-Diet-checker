import React, { useState } from "react";
import "./app.css";

function Person() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [plan, setPlan] = useState("");
  const [darkMode, setDarkMode] = useState(true); // start in dark mode

  const calculateBMI = () => {
    if (!age || !weight || !height) {
      alert("Please enter all fields");
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(bmiValue);

    let category = "";
    let dietPlan = "";

    if (bmiValue < 18.5) {
      category = "Underweight";
      dietPlan = "Eat more protein, milk, and nuts.";
    } else if (bmiValue >= 18.5 && bmiValue <= 25) {
      category = "Normal weight";
      dietPlan = "Maintain a balanced diet with fruits and vegetables.";
    } else {
      category = "Overweight";
      dietPlan = "Avoid junk food, eat low-fat food, and exercise regularly.";
    }

    if (age < 20) dietPlan += " Include calcium-rich foods for growth.";
    else if (age > 50) dietPlan += " Control sugar intake.";

    setPlan(`${category}. ${dietPlan}`);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Toggle button */}
      <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="neon-container">
        <h2 className="neon-title">BMI & Diet Checker </h2>

        <input
          type="number"
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
          className="neon-input"
        />
        <br />

        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="neon-input"
        />
        <br />

        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="neon-input"
        />
        <br />

        <button onClick={calculateBMI} className="neon-btn">
          Check BMI 
        </button>

        {bmi && (
          <div className="result-container">
            <div className="neon-box neon-blue">Height: {height} cm</div>
            <div className="neon-box neon-green">Weight: {weight} kg</div>
            <div className="neon-box neon-pink">BMI: {bmi}</div>
            <div className="neon-box neon-yellow">{plan}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Person;
