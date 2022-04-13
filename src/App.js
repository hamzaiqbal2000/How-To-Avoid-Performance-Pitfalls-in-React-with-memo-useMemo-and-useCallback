import React, { useReducer, useState, useCallback } from "react";
import "./App.css";

import CharacterMap from "./components/CharacterMap/CharacterMap";

function App() {
  const [text, setText] = useState("");
  const [showExplanation, toggleExplanation] = useReducer(
    (state) => !state,
    false
  );
  const transformer = useCallback((item) => item.toLowerCase(), []);

  return (
    <div className="wrapper">
      <label htmlFor="text">
        <p>Add your text here:</p>
        <textarea
          name="text"
          id="text"
          cols="100"
          rows="10"
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </label>
      <div>
        <button onClick={toggleExplanation}>Show Explanation</button>
      </div>

      <CharacterMap
        showExplanation={showExplanation}
        text={text}
        transformer={transformer}
      />
    </div>
  );
}

export default App;
