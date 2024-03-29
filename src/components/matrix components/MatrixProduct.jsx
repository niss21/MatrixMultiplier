import { useState } from "react";

import { product } from "../../utils/matrix utils/product.js";
import OutputMatrix from "../matrix layouts/OutputMatrix.jsx";
import DoubleMatrixLayout from "../matrix layouts/DoubleMatrixLayout.jsx";

function MatrixProduct() {
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getDim = (row, col) => {
    setRow(row);
    setColumn(col);
  };

  return (
    <div className="container">
      <h2 className="calc-title">Matrix Product Calculator</h2>
      <DoubleMatrixLayout
        setResult={setResult}
        setShowResult={setShowResult}
        showResult={showResult}
        method={product}
        getDim={getDim}
      />
      {showResult && (
        <>
          <h2 className="output-title">Product: </h2>
          <OutputMatrix row={row} col={column}>
            {result.map((row) => {
              return row.map((el, indx) => (
                <div className="result-matrix-box" key={indx}>
                  <span>{el}</span>
                </div>
              ));
            })}
          </OutputMatrix>
        </>
      )}
    </div>
  );
}

export default MatrixProduct;
