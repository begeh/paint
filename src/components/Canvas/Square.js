import { useState } from 'react';

export default function Square(props) {
  const { key, width, height, currentColor, newColor, canvas, setCanvas, row, column } = props;

  const handleSetSquareColor = (row, column, newColor, currentColor) => {
    if(newColor !== currentColor){
      let newCanvas = JSON.parse(JSON.stringify(canvas));
      newCanvas[row][column] = newColor;
      setCanvas(newCanvas);
    }
  }
  
  return (
    <div
      key={key}
      className="grey-on-hover squares"
      style={{
        width: `calc(80vw/${width})`,
        height: `calc(80vh/${height})`,
        backgroundColor: currentColor
      }}
      onClick={() => handleSetSquareColor(row, column, newColor, currentColor)}
    />
  );
}
