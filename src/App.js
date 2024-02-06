import { React, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShadowMain from "./components/ShadowMain";

function App() {
  const [Hor, setHor] = useState(10);
  const [Var, setVar] = useState(10);
  const [sliderValue, setSliderValue] = useState(0.5);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("#000");
  const [Boxbg, setBoxbg] = useState("#3668ab");
  const [Inset, setInset] = useState(false);

  const handleSliderChange = (event) => {
    const value = parseFloat(event.target.value);
    setSliderValue(value);
  };

  // Function to convert hex to RGB
  const hexToRgb = (hex) => {
    // Remove the hash sign if it exists
    hex = hex.replace(/^#/, "");

    // Convert to RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const a = sliderValue;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  // Get RGB value from selected color
  const rgbValue = hexToRgb(Color);

  return (
    <>
      <ShadowMain
        handleSliderChange={handleSliderChange}
        sliderValue={sliderValue}
        blur={setBlur}
        blurVal={Blur}
        horizontal={setHor}
        horizontalVal={Hor}
        vertical={setVar}
        verticalVal={Var}
        insetCheck={setInset}
        InsetVal={Inset}
        Color={Color}
        setColor={setColor}
        setBoxbg={setBoxbg}
        Boxbg={Boxbg}
        rgbValue={rgbValue}
      />
    </>
  );
}

export default App;
