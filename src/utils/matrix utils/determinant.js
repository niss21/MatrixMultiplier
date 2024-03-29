const determinant = (matrix) => {
  const n = matrix.length;
  if (n === 1) return matrix[0][0];

  let det = 0;
  let s = 1;
  for (let i = 0; i < n; i++) {
    const subMatrix = [];
    for (let j = 1; j < n; j++) {
      const subRow = [];
      for (let k = 0; k < n; k++) {
        if (k < i) subRow.push(matrix[j][k]);
        if (k === i) k++;
        if (k > i && k < n) subRow.push(matrix[j][k]);
      }
      subMatrix.push(subRow);
    }
    det += matrix[0][i] * s * determinant(subMatrix);
    s *= -1;
  }
  return det;
};

export { determinant };
