import "./App.css";
import { useState, useEffect } from "react";
import floodfill from "./images/floodfill.png";
import pencil from "./images/pencil.png";
import { SketchPicker } from "react-color";
import { findByLabelText } from "@testing-library/react";

function App() {
  const [color, setColor] = useState("#fff");
  const [tool, setTool] = useState(null);
  const [dimensions, setDimensions] = useState({ height: 16, width: 32 });
  const { height, width } = dimensions;
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleChangeColor = (color) => {
    setColor(color.hex);
  };

  const createRow = () => {
    const row = [];
    for (let i = 1; i <= width; i++) {
      row.push(
        <div
          key={i}
          className="grey-on-hover squares"
          style={{
            width: `calc(80vw/${width})`,
            height: `calc(80vh/${height})`,
          }}
        />
      );
    }
    return row;
  };

  const createCanvas = () => {
    const canvas = [];
    for (let i = 1; i <= height; i++) {
      canvas.push(
        <div style={{ display: "flex", msFlexDirection: "row" }}>
          {createRow()}
        </div>
      );
    }
    return canvas;
  };

  return (
    <div className="App">
      <section className="heading">
        <h1>PAINT</h1>
      </section>
      <section className="main">
        <div className="tools">
          <div className="toolbar">
            <div
              className={`tool-btn-container ${
                tool === "flood-fill" && "tool-btn-clicked"
              }`}
              onClick={() => setTool("flood-fill")}
            >
              <img className="tool-btn-img" src={floodfill} />
            </div>
            <div
              className={`tool-btn-container ${
                tool === "pencil" && "tool-btn-clicked"
              }`}
              onClick={() => setTool("pencil")}
            >
              <img className="tool-btn-img" src={pencil} />
            </div>
            <div
              className="tool-btn-container"
              onClick={() => setShowColorPicker(!showColorPicker)}
            >
              <div
                style={{
                  backgroundColor: color,
                  width: "100%",
                  height: "100%",
                }}
              />
              {showColorPicker && (
                <div className="popover">
                  <div className="cover" />
                  <SketchPicker
                    color={color}
                    onChange={(color) => handleChangeColor(color)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="canvas">
          {/* <div className="squares"
          style={{width: `calc(80vw/${width})`, height: `calc(80vh/${height})`}}> */}
          {createCanvas()}
        </div>
      </section>
    </div>
  );
}

export default App;
