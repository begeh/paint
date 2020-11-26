import "./App.css";
import { useState, useEffect } from "react";
import floodfill from "./images/floodfill.png";
import pencil from "./images/pencil.png";
import { SketchPicker } from "react-color";
import Square from "./components/Canvas/Square";
import Tool from "./components/Toolbar/Tool";
import { findByLabelText } from "@testing-library/react";

function App() {
  const [color, setColor] = useState("#fff");
  const [tool, setTool] = useState(null);
  const [dimensions, setDimensions] = useState({ height: 16, width: 32 });
  const { height, width } = dimensions;
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleSetColor = (color) => {
    setColor(color.hex);
  };

  const createRow = () => {
    const row = [];
    for (let i = 1; i <= width; i++) {
      row.push(<Square key={i} width={width} height={height} />);
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
            <Tool
              tool={tool}
              setTool={setTool}
              toolType="flood-fill"
              image={floodfill}
            />
            <Tool
              tool={tool}
              setTool={setTool}
              toolType="pencil"
              image={pencil}
            />
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
                    onChange={(color) => handleSetColor(color)}
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
