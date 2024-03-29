import { useState } from "react";

import { luDecomposition } from "../../utils/matrix utils/luDecomposition.js";
import MatrixLayout from "../matrix layouts/MatrixLayout.jsx";
import OutputMatrix from "../matrix layouts/OutputMatrix.jsx";

function LuDecomposition() {
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getDim = (row, col) => {
    setRow(row);
    setColumn(col);
  };

  const getResults = (res) => {
    setResult(res);
  };

  const getShowResults = (res) => {
    setShowResult(res);
  };

  return (
    <div className="container">
      {" "}
      <h2 className="calc-title">LU Decomposition Calculator</h2>
      <MatrixLayout
        setResult={getResults}
        setShowResult={getShowResults}
        showResult={showResult}
        method={luDecomposition}
        getDim={getDim}
        isSquare={false}
      />
      {showResult && (
        <>
          {result ? (
            <div className="steps-wrapper">
              <div className="step-wrapper">
                <h2 className="output-title">L Matrix: </h2>
                <OutputMatrix row={row} col={row}>
                  {result.LMatrix.map((row) => {
                    return row.map((el, indx) => (
                      <div className="result-matrix-box" key={indx}>
                        {el.split("/").map((val, indx, arr) => (
                          <span key={indx}>{`${val}${
                            indx < arr.length - 1 ? "/" : ""
                          }`}</span>
                        ))}
                      </div>
                    ));
                  })}
                </OutputMatrix>
              </div>
              <div className="step-wrapper">
                <h2 className="output-title">U Matrix: </h2>
                <OutputMatrix row={row} col={column}>
                  {result.UMatrix.map((row) => {
                    return row.map((el, indx) => (
                      <div className="result-matrix-box" key={indx}>
                        {el.split("/").map((val, indx, arr) => (
                          <span key={indx}>{`${val}${
                            indx < arr.length - 1 ? "/" : ""
                          }`}</span>
                        ))}
                      </div>
                    ));
                  })}
                </OutputMatrix>
              </div>
            </div>
          ) : (
            <h2 className="output-title">LU Decomposition cannot be done</h2>
          )}
        </>
      )}
    </div>
  );
}

export default LuDecomposition;
