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

export default floodFill;