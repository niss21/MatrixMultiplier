import { useState } from "react";
import MatrixLayout from "../matrix layouts/MatrixLayout.jsx";
import { determinant } from "../../utils/matrix utils/determinant.js";

function Determinant() {
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      {" "}
      <h2 className="calc-title">Determinant Calculator</h2>
      <MatrixLayout
        setResult={setResult}
        showResult={showResult}
        setShowResult={setShowResult}
        method={determinant}
        isSquare={true}
      />
      {showResult && <h2>Determinant: {result}</h2>}
    </div>
  );
}

export default Determinant;
