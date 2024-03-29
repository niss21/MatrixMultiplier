import { useState } from "react";

import { adjoint } from "../../utils/matrix utils/adjoint.js";
import MatrixLayout from "../matrix layouts/MatrixLayout.jsx";
import OutputMatrix from "../matrix layouts/OutputMatrix.jsx";

function Adjoint() {
  const [dim, setDim] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getDim = (dim) => {
    setDim(dim);
  };

  return (
    <div className="container">
      {" "}
      <h2 className="calc-title">Adjoint Calculator</h2>
      <MatrixLayout
        setResult={setResult}
        setShowResult={setShowResult}
        showResult={showResult}
        method={adjoint}
        getDim={getDim}
        isSquare={true}
      />
      {showResult && (
        <>
          <h2 className="output-title">Adjoint Matrix: </h2>
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

export default Adjoint;
