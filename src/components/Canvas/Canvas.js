import { useState, useEffect } from 'react';
import Square from './Square';

export default function Canvas(props) {
  const { width, height, tool, color } = props;
  const [canvas, setCanvas] = useState([]);
  const canvasColumns = 32;
  const canvasRows = 16;

  useEffect(() => {
    createCanvas();
  }, []);

  const createRow = () => {
    const row = [];
    for (let i = 1; i <= canvasColumns; i++) {
      row.push("#fff");
    }
    return row;
  };

  const createCanvas = () => {
    const canvas = [];
    for (let i = 1; i <= canvasRows; i++) {
      canvas.push(createRow());
    }
    return setCanvas(canvas);
  };

  const renderCanvas = (canvas) => {
    return canvas.map((row, index1) => (
      <div key={index1} style={{ display: "flex", flexDirection: "row" }}>
        {row.map((squareColor, index2) => (
          <Square
            key={`${index1}-${index2}`}
            width={width}
            height={height}
            canvasColumns={canvasColumns}
            canvasRows={canvasRows}
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
    <div className="canvas-container">
      <div className="canvas" style={{ height: `${height}px`, width: `${width}px` }}>
        {renderCanvas(canvas)}
      </div>
    </div>
  );
}
