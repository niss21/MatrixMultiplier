import { useState } from "react";
import parse from "html-react-parser";

import { reducedRowEchelon } from "../../utils/matrix utils/reducedRowEchelon.js";
import MatrixLayout from "../matrix layouts/MatrixLayout.jsx";
import OutputMatrix from "../matrix layouts/OutputMatrix.jsx";

export default function ReducedRowEchelon() {
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [steps, setSteps] = useState(null);
  const [showSteps, setShowSteps] = useState(false);

  const getDim = (row, col) => {
    setRow(row);
    setColumn(col);
  };

  const getResults = (res) => {
    setResult(res?.matrix);
    setSteps(res?.stepsArr);
  };

  const getShowResults = (bool1, bool2) => {
    setShowResult(bool1);
    setShowSteps(bool2);
  };

  return (
    <div className="container">
      {" "}
      <h2 className="calc-title">Reduced Row Echelon Calculator</h2>
      <MatrixLayout
        setResult={getResults}
        setShowResult={getShowResults}
        showResult={showResult}
        method={reducedRowEchelon}
        getDim={getDim}
        isSquare={false}
      />
      {showResult && (
        <>
          <h2 className="output-title">Reduced Row Echelon Form: </h2>
          <OutputMatrix row={row} col={column}>
            {result.map((row) => {
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
          <button
            onClick={() => setShowSteps((prev) => !prev)}
            className="btn calc-btn"
          >
            {showSteps ? "Hide" : "Show"} Steps
          </button>
        </>
      )}
      {showSteps && (
        <div className="steps-wrapper">
          {steps.map((step, indx) => {
            return (
              <div className="step-wrapper" key={indx}>
                <h4 className="output-title">{parse(step.step)}</h4>
                <OutputMatrix row={row} col={column}>
                  {step.matrix.map((row) => {
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
            );
          })}
        </div>
      )}
    </div>
  );
}
