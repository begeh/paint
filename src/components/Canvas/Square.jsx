import { useContext } from "react";
import floodFill from "../../helpers/floodFill";
import { MainContext } from "../Main";

export default function Square(props) {
  const { width, height, tool } = useContext(MainContext);
  const {
    currentColor,
    newColor,
    canvas,
    setCanvas,
    row,
    column,
    canvasColumns,
    canvasRows,
  } = props;

  const handleSetSquareColor = (row, column, newColor, currentColor) => {
    if (newColor !== currentColor) {
      let newCanvas = JSON.parse(JSON.stringify(canvas));
      if (tool === "pencil") {
        newCanvas[row][column] = newColor;
        setCanvas(newCanvas);
      } else if (tool === "flood-fill") {
        setCanvas(floodFill(newCanvas, row, column, newColor));
      }
    }
  };

  return (
    <div
      className="grey-on-hover"
      style={{
        width: `calc(${width}px/${canvasColumns})`,
        height: `calc(${height}px/${canvasRows})`,
        backgroundColor: currentColor,
      }}
      onClick={() => handleSetSquareColor(row, column, newColor, currentColor)}
    />
  );
}
