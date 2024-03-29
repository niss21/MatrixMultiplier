import { determinant } from "./determinant.js";

const cofactor = (matrix) => {
  const n = matrix.length;
  const coMatrix = [];

  for (let i = 0; i < n; i++) {
    const rowMatrix = [];
    for (let j = 0; j < n; j++) {
      const subMatrix = [];
      for (let k = 0; k < n; k++) {
        const subRow = [];
        for (let l = 0; l < n; l++) {
          if (k < i && l < j) subRow.push(matrix[k][l]);
          if (k === i) k++;
          if (l === j) l++;
          if (k > i && k < n && l < j) subRow.push(matrix[k][l]);
          if (k < i && l > j && l < n) subRow.push(matrix[k][l]);
          if (k > i && k < n && l > j && l < n) subRow.push(matrix[k][l]);
        }
        if (i === n - 1 && k === n - 2)
          // condition for skipping row for last-row elements
          k++;
        subMatrix.push(subRow);
      }

      const value = Math.pow(-1, i + j) * determinant(subMatrix);
      rowMatrix.push(value);
    }
    coMatrix.push(rowMatrix);
  }
  return coMatrix;
};

export { cofactor };
