import { useState } from "react";

import { transpose } from "../../utils/matrix utils/transpose.js";
import MatrixLayout from "../matrix layouts/MatrixLayout.jsx";
import OutputMatrix from "../matrix layouts/OutputMatrix.jsx";

function Transpose() {
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
      {" "}
      <h2 className="calc-title">Transpose Calculator</h2>
      <MatrixLayout
        setResult={setResult}
        setShowResult={setShowResult}
        showResult={showResult}
        method={transpose}
        getDim={getDim}
        isSquare={false}
      />
      {showResult && (
        <>
          <h2 className="output-title">Transpose Matrix: </h2>
          <OutputMatrix row={column} col={row}>
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

export default Transpose;
