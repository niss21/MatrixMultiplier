import "./OutputMatrix.css";

function OutputMatrix({ row, col, children }) {
  return (
    <div
      className="result-matrix-container"
      style={{
        gridTemplateRows: `repeat(${row}, 1fr)`,
        gridTemplateColumns: `repeat(${col}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}

export default OutputMatrix;
