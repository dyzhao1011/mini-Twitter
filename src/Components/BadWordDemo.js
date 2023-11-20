import React from "react";
import { useState } from "react";

var filter = require("leo-profanity");

export default function App() {
  const [value, setValue] = useState("");

  function handleOnChange(event) {
    const value = event.target.value;
    setValue(value);
  }

  return (
    <div className="App">
      <h1>Bad Words Demo</h1>
      <input
        type="textarea"
        value={value}
        rows="15"
        onChange={handleOnChange}
      />
      <br />
      <br />
      Filterd Content:: <br />
      {filter.clean(value)}
    </div>
  );
}
