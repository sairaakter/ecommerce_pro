import { useState } from "react";

const ColorPicker = ({ colorr }) => {
  const [color, setColor] = useState(colorr); // Independent color state for each instance

  const handleColorChange = (e) => {
    setColor(e.target.value); // Update state for the specific instance
  };

  return (
    <div className="custom-color-picker">
      <input
        type="color"
        className="colorInput"
        value={color}
        onChange={handleColorChange}
      />
      <div className="color-preview" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorPicker;
