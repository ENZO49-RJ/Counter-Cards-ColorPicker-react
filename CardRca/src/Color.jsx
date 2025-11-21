import { useState } from "react";
import "./Color.css"

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(e){
    setColor(e.target.value)
  }

  return (
    <div className="color-container">
      <h1 className="title">Color Picker </h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color : {color}</p>
      </div>
      <label>Select a color : {color}</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
export default ColorPicker;