import { fracDiv, fracMul, fracSub } from "./fraction.js";

const returnMatrix = (matrix) => {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const rowMatrix = [...matrix[i]];
    newMatrix.push(rowMatrix);
  }
  return newMatrix;
};

const rowEchelon = (matrix) => {
  const row = matrix.length;
  const col = matrix[0].length;
  const stepsArr = [];
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
            for (let k = 0; k < col; k++) {
              let temp = matrix[j][k];
              matrix[j][k] = matrix[pivotRow][k];
              matrix[pivotRow][k] = temp;
            }
            stepsArr.push({
              matrix: returnMatrix(matrix),
              step: `R<sub>${pivotRow + 1}</sub> <--> R<sub>${j + 1}</sub>`,
            });
            break;
          }
        }
      }
      if (matrix[pivotRow][i] === "0") {
        i++;
      } else if (i >= col || matrix[pivotRow][i] !== "0") break;
    }

    if (i >= col) break;

    // const scalar = matrix[pivotRow][i];

    // if (scalar !== "1") {
    //   for (let j = 0; j < col; j++) {
    //     matrix[pivotRow][j] = fracDiv(matrix[pivotRow][j], scalar);
    //   }

    //   stepsArr.push({
    //     matrix: returnMatrix(matrix),
    //     step: `R<sub>${pivotRow + 1}</sub> --> (${fracDiv(
    //       "1",
    //       scalar
    //     )}) x R<sub>${pivotRow + 1}</sub>`,
    //   });
    // }

    for (let j = pivotRow + 1; j < row; j++) {
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
    pivotRow++;
  }
  return { matrix, stepsArr };
};

// const data = [
//   ["1", "3", "5", "9"],
//   ["1", "3", "1", "7"],
//   ["4", "3", "9", "7"],
//   ["5", "2", "0", "9"],
// ];

export { rowEchelon };
