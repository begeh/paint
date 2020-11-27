import "./App.css";
import { useEffect, useState } from "react";
import Square from "./components/Canvas/Square";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  const [color, setColor] = useState("#fff");
  const [canvas, setCanvas] = useState([]);
  const [tool, setTool] = useState(false);
  const [dimensions, setDimensions] = useState({ height: 16, width: 32 });
  const { height, width } = dimensions;
  const canvasColumns = 16;
  const canvasRows = 32;

  useEffect(() => {
    createCanvas();
  }, []);

  const createRow = () => {
    const row = [];
    for (let i = 1; i <= canvasRows; i++) {
      row.push("#fff");
    }
    return row;
  };

  const createCanvas = () => {
    const canvas = [];
    for (let i = 1; i <= canvasColumns; i++) {
      canvas.push(createRow());
    }
    return setCanvas(canvas);
  };

  const renderCanvas = (canvas) => {
    return canvas.map((row, index1) => (
      <div key={index1} style={{ display: "flex", msFlexDirection: "row" }}>
        {row.map((squareColor, index2) => (
          <Square
            key={`${index1}-${index2}`}
            width={width}
            height={height}
            currentColor={squareColor}
            newColor={color}
            canvas={canvas}
            setCanvas={setCanvas}
            row={index1}
            tool={tool}
            column={index2}
          />
        ))}
      </div>
    ));
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
        <div className="canvas">{renderCanvas(canvas)}</div>
      </section>
    </div>
  );
}

export default App;
