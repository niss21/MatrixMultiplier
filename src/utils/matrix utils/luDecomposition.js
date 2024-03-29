import { fracDiv, fracMul, fracSub } from "./fraction.js";

const returnMatrix = (matrix) => {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const rowMatrix = [...matrix[i]];
    newMatrix.push(rowMatrix);
  }
  return newMatrix;
};

const luDecomposition = (matrix) => {
  const row = matrix.length;
  const col = matrix[0].length;
  const stepsArr = [];
  let LMatrix = [];
  let decomposable = true;

  for (let i = 0; i < row; i++) {
    let rowValues = new Array(row).fill("0");
    LMatrix.push(rowValues);
  }

  let lCol = 0;
  let pivotRow = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = matrix[i][j].toString();
    }
  }

  for (let i = 0; i < col && pivotRow < row; i++) {
    while (true) {
      if (matrix[pivotRow][i] === "0") {
        for (let j = pivotRow + 1; j < row; j++) {
          if (matrix[j][i] !== "0") {
            decomposable = false;
            break;
          }
        }
        if (!decomposable) break;
      }
      if (matrix[pivotRow][i] === "0") {
        i++;
      } else if (i >= col || matrix[pivotRow][i] !== "0") break;
    }

    if (i >= col || !decomposable) break;

    LMatrix[pivotRow][lCol] = "1";
    for (let j = pivotRow + 1; j < row; j++) {
      LMatrix[j][lCol] = fracDiv(matrix[j][i], matrix[pivotRow][i]);
      if (matrix[j][i] === "0") {
        continue;
      }

      const factor = fracDiv(matrix[j][i], matrix[pivotRow][i]);
      for (let k = 0; k < col; k++) {
        matrix[j][k] = fracSub(
          matrix[j][k],
          fracMul(matrix[pivotRow][k], factor)
        );
      }
      stepsArr.push({
        matrix: returnMatrix(matrix),
        step: `R<sub>${j + 1}</sub> --> R<sub>${j + 1}</sub> ${
          factor.includes("-") ? `+ (${factor.slice(1)})` : `- (${factor})`
        } x R<sub>${pivotRow + 1}</sub>`,
      });
    }
    lCol++;
    pivotRow++;
  }
  if (!decomposable) return false;
  else {
    while (lCol < row) {
      LMatrix[lCol][lCol] = "1";
      lCol++;
    }
    return { LMatrix, UMatrix: matrix };
  }
};

const data = [
  //   ["1", "3", "5", "9"],
  //   ["1", "3", "1", "7"],
  //   ["4", "3", "9", "7"],
  //   ["5", "2", "0", "9"],
  //   ["2", "4", "-1", "5", "-2"],
  //   ["-4", "-5", "3", "-8", "1"],
  //   ["2", "-5", "-4", "1", "8"],
  //   ["-6", "0", "7", "-3", "1"],
  // [1, -1, 3, 2],
  // [0, 2, -1, 2],
  // [3, 1, -2, 1],
  // [1, 2, 3, 4],
  // [5, 6, 7, 8],
  // [2, 4, 6, 8],
  // [10, 12, 14, 16],
  // [2, -3, -1],
  // [3, 2, -5],
  // [2, 4, -1],
];

export { luDecomposition };
