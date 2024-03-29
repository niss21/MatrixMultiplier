import { determinant } from "./determinant.js";
import { adjoint } from "./adjoint.js";

const gcd = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  if (a <= b) return gcd(b % a, a);
  if (b < a) return gcd(b, a % b);
};

const inverse = (matrix) => {
  const det = determinant(matrix);
  if (det === 0) return false;

  const adjMatrix = adjoint(matrix);
  const inverseMatrix = [];

  for (let i = 0; i < adjMatrix.length; i++) {
    const rowMatrix = [];
    for (let j = 0; j < adjMatrix[0].length; j++) {
      const gcdVal = gcd(Math.abs(adjMatrix[i][j]), Math.abs(det));
      const num = adjMatrix[i][j] / gcdVal;
      const deno = det / gcdVal;
      const absNum = Math.abs(num);
      const absDeno = Math.abs(deno);
      if (num * deno >= 0) {
        absDeno === 1
          ? rowMatrix.push(`${absNum}`)
          : rowMatrix.push(`${absNum}/${absDeno}`);
      } else {
        absDeno === 1
          ? rowMatrix.push(`${-absNum}`)
          : rowMatrix.push(`${-absNum}/${absDeno}`);
      }
    }
    inverseMatrix.push(rowMatrix);
  }

  return inverseMatrix;
};

export { inverse };
