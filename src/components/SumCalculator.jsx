import React, { useState } from "react";

const SumCalculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    if (number1 === "" || number2 === "") {
      setError("⚠️ Please enter both numbers.");
      setResult(null);
      return;
    }

    if (isNaN(number1) || isNaN(number2)) {
      setError("❌ Inputs must be valid numbers.");
      setResult(null);
      return;
    }

    setError("");
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  };

  return (
    <div className="sum-container">
      <div className="header-box">Sum Calculator</div>

      <div>
        <label>Number 1:</label>
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>

      <div>
        <label>Number 2:</label>
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>

      <button onClick={handleCalculate}>Calculate Sum</button>

      {error && <p className="error">{error}</p>}
      {result !== null && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default SumCalculator;
