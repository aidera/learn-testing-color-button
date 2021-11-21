import React, { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState<
    "MediumVioletRed" | "MidnightBlue"
  >("MediumVioletRed");
  const [disabled, setDisabled] = useState<boolean>(false);

  const toggleButton = () => {
    if (buttonColor === "MediumVioletRed") {
      setButtonColor("MidnightBlue");
    } else {
      setButtonColor("MediumVioletRed");
    }
  };

  return (
    <div className="App">
      <button
        onClick={toggleButton}
        disabled={disabled}
        style={{
          backgroundColor: disabled ? "gray" : buttonColor.toLowerCase(),
        }}
      >
        Change to{" "}
        {replaceCamelWithSpaces(
          buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"
        )}
      </button>

      <br />
      <br />

      <label htmlFor="enable-button-checkbox">
        <input
          type="checkbox"
          id="enable-button-checkbox"
          checked={disabled}
          aria-checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
        Disable button
      </label>
    </div>
  );
}

export default App;
