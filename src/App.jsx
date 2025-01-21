import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker-div">
      <h1>Color Picker</h1>
      <div
        className="div-display"
        style={{ backgroundColor: color }}
      >
        Selected Color: {color}
      </div>
      <div className="div-input">
        <p>Select a Color:</p>

        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};

export default App;
