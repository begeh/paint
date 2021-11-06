const floodFill = (canvas, row, column, newColor) => {
  /* If current square has same color as flood fill color, then
   exit out of recursive loop */ 
  if (canvas[row][column] === newColor) {
    return canvas;
  }
  fill(canvas, row, column, canvas[row][column], newColor);
  return canvas;
};

const fill = (canvas, row, column, color, newColor) => {
  /* Exit out of recursive loop if 1) index of row/column does not exist (i.e. greater than row/column length, or less than zero), or 2) current square is not same color as adjacent square.
   */
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
  // Check square below
  fill(canvas, row + 1, column, color, newColor);
  // Check square above
  fill(canvas, row - 1, column, color, newColor);
  // Check square to the left
  fill(canvas, row, column - 1, color, newColor);
  // Check square to the right
  fill(canvas, row, column + 1, color, newColor);
  return canvas;
};

export default floodFill;