import { useState, useEffect } from "react";
import "./MatrixLayout.css";

function MatrixLayout({
  setResult,
  showResult,
  setShowResult,
  method,
  getDim,
  isSquare,
}) {
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);

  useEffect(() => {
    handleReset();
  }, [row, column]);

  const handleChange = (event, isRow) => {
    const value = parseInt(event.target.value) || 0;

    if (value < 0) return;
    if (isRow) setRow(value);
    else setColumn(value);
    // setShowResult(false, false);
    // setResult(null);
  };

  const handleCalculate = () => {
    let rowMatrix = [];
    const matrixArr = [];
    let hasError = false;
    const boxes = document.querySelectorAll(".matrix-box");
    try {
      boxes.forEach((box) => {
        const value = parseInt(box.value);
        if (isNaN(value)) {
          throw new Error("Please give valid input");
        }

        const dim = isSquare ? row : column;
        const col = parseInt(box.id) % dim;

        rowMatrix.push(value);

        if (col === dim - 1) {
          matrixArr.push(rowMatrix);
          rowMatrix = [];
        }
      });
    } catch (err) {
      hasError = true;
      alert(err);
    }

    if (!hasError) {
      const ans = method(matrixArr);
      if (getDim) {
        isSquare ? getDim(row) : getDim(row, column);
      }
      setResult(ans);
      setShowResult(true, false);
    }
  };

  const handleReset = () => {
    const boxes = document.querySelectorAll(".matrix-box");

    boxes.forEach((box) => {
      box.value = "";
    });

    if (showResult) {
      setShowResult(false, false);
      setResult(null);
    }
  };

  const totalBoxes = isSquare ? row * row : row * column;
  const renderMatrix = Array(totalBoxes)
    .fill(0)
    .map((_, indx) => {
      return <input className="matrix-box" key={indx} id={indx}></input>;
    });

  return (
    <>
      <div className="dimension-input-wrapper">
        <h3>{isSquare ? "Dimension:" : "Row:"}</h3>
        <input
          className="dimension-input"
          type="number"
          onChange={(event) => handleChange(event, true)}
          value={row || ""}
          min={0}
        />
      </div>
      {!isSquare && (
        <div className="dimension-input-wrapper">
          <h3>Column:</h3>
          <input
            className="dimension-input"
            type="number"
            onChange={(event) => handleChange(event, false)}
            value={column || ""}
            min={0}
          />
        </div>
      )}
      {row > 0 && column > 0 ? (
        <div className="matrix-wrapper">
          <h2 style={{ textAlign: "center" }}>
            Enter elements of {row} x {isSquare ? row : column} matrix
          </h2>
          <div
            className="matrix-container"
            style={{
              gridTemplateRows: `repeat(${row}, 1fr)`,
              gridTemplateColumns: `repeat(${isSquare ? row : column}, 1fr)`,
            }}
          >
            {renderMatrix}
          </div>
          <div className="btn-container">
            <button onClick={handleCalculate} className="btn calc-btn">
              Calculate
            </button>
            <button onClick={handleReset} className="btn reset-btn">
              Reset
            </button>
          </div>
        </div>
      ) : (
        <h2 className="dim-err-msg">Please Enter valid dimension!</h2>
      )}
    </>
  );
}

export default MatrixLayout;
