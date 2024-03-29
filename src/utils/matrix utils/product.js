const product = (matrixA, matrixB) => {
  const row = matrixA.length;
  const col = matrixB[0].length;
  const prodMatrix = [];

  for (let i = 0; i < row; i++) {
    const rowMatrix = [];
    for (let j = 0; j < col; j++) {
      let val = 0;
      for (let k = 0; k < matrixA[0].length; k++)
        val += matrixA[i][k] * matrixB[k][j];
      rowMatrix.push(val);
    }
    prodMatrix.push(rowMatrix);
  }
  return prodMatrix;
};

export { product };
