import floodFill from '../../helpers/floodFill';

export default function Square(props) {
  const {
    width,
    height,
    currentColor,
    newColor,
    canvas,
    setCanvas,
    row,
    column,
    tool,
    canvasColumns,
    canvasRows
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
        width: `calc(${width}px/${canvasRows})`,
        height: `calc(${height}px/${canvasColumns})`,
        backgroundColor: currentColor,
      }}
      onClick={() => handleSetSquareColor(row, column, newColor, currentColor)}
    />
  );
}
