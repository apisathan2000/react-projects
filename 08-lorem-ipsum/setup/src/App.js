import React, { useState } from "react";
import data from "./data";
function App() {
  const [numOfParagraphs, setNumofParagraphs] = useState(0);
  const [inputValue, setInputValue] = useState("0");

  const handleInput = function (event) {
    event.preventDefault();

    const parsed = Number.parseInt(inputValue, 10);
    const safeNumber = Number.isNaN(parsed) ? 0 : parsed;
    const clamped = Math.max(0, Math.min(10, safeNumber));

    setInputValue(String(clamped));
    setNumofParagraphs(clamped);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>

      <form className="lorem-form" onSubmit={handleInput}>
        <label>Paragraphs:</label>
        <input
          type="number"
          id="numOfParagraphs"
          min="0"
          max="10"
          step={1}
          placeholder="0"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>

        <button className="btn" type="submit">
          Generate
        </button>
      </form>

      {data.slice(0, numOfParagraphs).map((item, index) => {
        return (
          <p key={index} className="result">
            {item}
          </p>
        );
      })}
    </section>
  );
}

export default App;
