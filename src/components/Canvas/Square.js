import floodFill from '../../helpers/floodFill';

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
      } else if (tool === "flood-fill") {
        setCanvas(floodFill(newCanvas, row, column, newColor));
      }
    }
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
