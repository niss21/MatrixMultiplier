const transpose = (matrix) => {
  const transMatrix = [];
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < col; i++) {
    const rowMatrix = [];
    for (let j = 0; j < row; j++) {
      rowMatrix.push(matrix[j][i]);
    }
    transMatrix.push(rowMatrix);
  }
  return transMatrix;
};

export { transpose };
