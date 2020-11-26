import "./App.css";
import { useState } from "react";
import Square from "./components/Canvas/Square";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  const [color, setColor] = useState("#fff");
  const [tool, setTool] = useState(false);
  const [dimensions, setDimensions] = useState({ height: 16, width: 32 });
  const { height, width } = dimensions;

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
          <Toolbar
            color={color}
            setColor={setColor}
            tool={tool}
            setTool={setTool}
          />
        </div>
        <div className="canvas">{createCanvas()}</div>
      </section>
    </div>
  );
}

export default App;
