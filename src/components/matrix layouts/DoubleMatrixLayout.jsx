import { useState, useEffect } from "react";
import "./DoubleMatrixLayout.css";

function DoubleMatrixLayout({
  setResult,
  showResult,
  setShowResult,
  method,
  getDim,
}) {
  const [row1, setRow1] = useState(2);
  const [row2, setRow2] = useState(2);
  const [column1, setColumn1] = useState(2);
  const [column2, setColumn2] = useState(2);

  useEffect(() => {
    handleReset(1);
  }, [row1, column1, row2]);

  useEffect(() => {
    handleReset(2);
  }, [row2, column2, column1]);

  const handleChange1 = (event, isRow) => {
    const value = parseInt(event.target.value) || 0;

    if (value < 0) return;
    if (isRow) setRow1(value);
    else {
      setColumn1(value);
      setRow2(value);
    }
    setShowResult(false);
    setResult(0);
  };
  const handleChange2 = (event, isRow) => {
    const value = parseInt(event.target.value) || 0;

    if (value < 0) return;
    if (isRow) {
      setRow2(value);
      setColumn1(value);
    } else setColumn2(value);
    setShowResult(false);
    setResult(0);
  };

  const handleCalculate = () => {
    let rowMatrix = [];
    const matrix1 = [];
    const matrix2 = [];
    let hasError = false;
    const boxes1 = document.querySelectorAll(".matrix-box-1");
    const boxes2 = document.querySelectorAll(".matrix-box-2");

    try {
      boxes1.forEach((box) => {
        const value = parseInt(box.value);
        if (isNaN(value)) {
          throw new Error("Please give valid input");
        }

        const col = parseInt(box.id) % column1;

        rowMatrix.push(value);

        if (col === column1 - 1) {
          matrix1.push(rowMatrix);
          rowMatrix = [];
        }
      });
    } catch (err) {
      hasError = true;
      alert(err);
    }

    if (hasError) return;

    rowMatrix = [];

    try {
      boxes2.forEach((box) => {
        const value = parseInt(box.value);
        if (isNaN(value)) {
          throw new Error("Please give valid input");
        }

        const col = parseInt(box.id) % column2;

        rowMatrix.push(value);

        if (col === column2 - 1) {
          matrix2.push(rowMatrix);
          rowMatrix = [];
        }
      });
    } catch (err) {
      hasError = true;
      alert(err);
    }

    if (!hasError) {
      const ans = method(matrix1, matrix2);
      if (getDim) {
        getDim(row1, column2);
      }
      setResult(ans);
      setShowResult(true);
    }
  };

  const handleReset = (num) => {
    const boxes = document.querySelectorAll(`.matrix-box-${num}`);

    boxes.forEach((box) => {
      box.value = "";
    });

    if (showResult) {
      setShowResult(false);
      setResult(null);
    }
  };

  const renderMatrix1 = Array(row1 * column1)
    .fill(0)
    .map((_, indx) => {
      return <input className="matrix-box-1" key={indx} id={indx}></input>;
    });

  const renderMatrix2 = Array(row2 * column2)
    .fill(0)
    .map((_, indx) => {
      return <input className="matrix-box-2" key={indx} id={indx}></input>;
    });

  return (
    <div className="double-matrix-layout">
      <div className="matrix12-wrapper">
        <div>
          <h3>Matrix A:</h3>
          <div className="dimension-input-wrapper">
            <h3>Row:</h3>
            <input
              className="dimension-input"
              type="number"
              onChange={(event) => handleChange1(event, true)}
              value={row1 || ""}
              min={0}
            />
          </div>

          <div className="dimension-input-wrapper">
            <h3>Column:</h3>
            <input
              className="dimension-input"
              type="number"
              onChange={(event) => handleChange1(event, false)}
              value={column1 || ""}
              min={0}
            />
          </div>
          {row1 > 0 && column1 > 0 ? (
            <div className="matrix-wrapper">
              <h2 style={{ textAlign: "center" }}>
                Enter elements of {row1} x {column1} matrix
              </h2>
              <div
                className="matrix-container"
                style={{
                  gridTemplateRows: `repeat(${row1}, 1fr)`,
                  gridTemplateColumns: `repeat(${column1}, 1fr)`,
                }}
              >
                {renderMatrix1}
              </div>
              <div className="btn-container">
                <button
                  onClick={() => handleReset(1)}
                  className="btn reset-btn"
                >
                  Reset
                </button>
              </div>
            </div>
          ) : (
            <h2 className="dim-err-msg">Please Enter valid dimension!</h2>
          )}
        </div>
        <div>
          <h3>Matrix B:</h3>
          <div className="dimension-input-wrapper">
            <h3>Row:</h3>
            <input
              className="dimension-input"
              type="number"
              onChange={(event) => handleChange2(event, true)}
              value={row2 || ""}
              min={0}
            />
          </div>

          <div className="dimension-input-wrapper">
            <h3>Column:</h3>
            <input
              className="dimension-input"
              type="number"
              onChange={(event) => handleChange2(event, false)}
              value={column2 || ""}
              min={0}
            />
          </div>
          {row2 > 0 && column2 > 0 ? (
            <div className="matrix-wrapper">
              <h2 style={{ textAlign: "center" }}>
                Enter elements of {row2} x {column2} matrix
              </h2>
              <div
                className="matrix-container"
                style={{
                  gridTemplateRows: `repeat(${row2}, 1fr)`,
                  gridTemplateColumns: `repeat(${column2}, 1fr)`,
                }}
              >
                {renderMatrix2}
              </div>
              <div className="btn-container">
                <button
                  onClick={() => handleReset(2)}
                  className="btn reset-btn"
                >
                  Reset
                </button>
              </div>
            </div>
          ) : (
            <h2 className="dim-err-msg">Please Enter valid dimension!</h2>
          )}
        </div>
      </div>
      {row1 > 0 && column1 > 0 && row2 > 0 && column2 > 0 && (
        <div className="btn-container">
          <button onClick={handleCalculate} className="btn calc-btn">
            Calculate
          </button>
        </div>
      )}
    </div>
  );
}

export default DoubleMatrixLayout;
