import { useState, useEffect, useContext } from "react";
import { MainContext } from "../Main";
import Square from "./Square";

export default function Canvas() {
  const { width, height, tool, color } = useContext(MainContext);
  const [canvas, setCanvas] = useState([]);
  const canvasColumns = 32;
  const canvasRows = 16;

  useEffect(() => {
    createCanvas();
  }, []);

  // Generate array of color codes, initially all set to white (#fff)
  const createRow = () => {
    const row = [];
    for (let i = 1; i <= canvasColumns; i++) {
      row.push("#fff");
    }
    return row;
  };

  /* Create a nested array of multiple rows containing lists of color codes, and set
   it as the canvas state */
  const createCanvas = () => {
    const canvas = [];
    for (let i = 1; i <= canvasRows; i++) {
      canvas.push(createRow());
    }
    return setCanvas(canvas);
  };

  /* Map over each item in each row of the canvas state and inject each row item's color code into the Square component to generate an array of color coded squares. Render the array of Square components as the app's canvas */
  const renderCanvas = (canvas) => {
    return canvas.map((row, index1) => (
      <div key={index1} style={{ display: "flex", flexDirection: "row" }}>
        {row.map((squareColor, index2) => (
          <Square
            key={`${index1}-${index2}`}
            canvasColumns={canvasColumns}
            canvasRows={canvasRows}
            currentColor={squareColor}
            newColor={color}
            canvas={canvas}
            setCanvas={setCanvas}
            row={index1}
            column={index2}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="canvas-container">
      <div
        className="canvas"
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        {renderCanvas(canvas)}
      </div>
    </div>
  );
}
