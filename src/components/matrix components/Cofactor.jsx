import { useState } from "react";

import { cofactor } from "../../utils/matrix utils/cofactor.js";
import MatrixLayout from "../matrix layouts/MatrixLayout.jsx";
import OutputMatrix from "../matrix layouts/OutputMatrix.jsx";

function Cofactor() {
  const [dim, setDim] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getDim = (dim) => {
    setDim(dim);
  };

  return (
    <div className="container">
      {" "}
      <h2 className="calc-title">Cofactor Calculator</h2>
      <MatrixLayout
        setResult={setResult}
        setShowResult={setShowResult}
        showResult={showResult}
        method={cofactor}
        getDim={getDim}
        isSquare={true}
      />
      {showResult && (
        <>
          <h2 className="output-title">Cofactor Matrix: </h2>
          <OutputMatrix row={dim} col={dim}>
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

export default Cofactor;
