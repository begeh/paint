import { useState } from "react";

export default function Square(props) {
  const {
    key,
    width,
    height,
    currentColor,
    newColor,
    canvas,
    setCanvas,
    row,
    column,
    tool,
  } = props;

  const handleSetSquareColor = (row, column, newColor, currentColor) => {
    if (newColor !== currentColor) {
      let newCanvas = JSON.parse(JSON.stringify(canvas));
      if (tool === "pencil") {
        newCanvas[row][column] = newColor;
        setCanvas(newCanvas);
      } else if (tool === 'flood-fill'){
        setCanvas(floodFill(newCanvas, row, column, newColor))
      }
    }
  };

  const floodFill = (canvas, row, column, newColor) => {
    if (canvas[row][column] === newColor) {
      return canvas;
    }
    fill(canvas, row, column, canvas[row][column], newColor);
    return canvas;
  };

  const fill = (canvas, row, column, color, newColor) => {
    if (
      row < 0 ||
      column < 0 ||
      row >= canvas.length ||
      column >= canvas[0].length ||
      canvas[row][column] !== color
    ) {
      return;
    }
    canvas[row][column] = newColor;
    fill(canvas, row + 1, column, color, newColor);
    fill(canvas, row - 1, column, color, newColor);
    fill(canvas, row, column - 1, color, newColor);
    fill(canvas, row, column + 1, color, newColor);
    return canvas;
  };

  return (
    <div
      key={key}
      className="grey-on-hover squares"
      style={{
        width: `calc(80vw/${width})`,
        height: `calc(80vh/${height})`,
        backgroundColor: currentColor,
      }}
      onClick={() => handleSetSquareColor(row, column, newColor, currentColor)}
    />
  );
}
