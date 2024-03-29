import { useState } from "react";
import { baseNdigits } from "../../utils/baseN utils/baseNdigits.js";
import InputLayout from "../num system layouts/InputLayout";
import OutputLayout from "../num system layouts/OutputLayout";

function Decimal() {
  const [results, setResults] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      <h2 className="calc-title">Enter Decimal Number:</h2>
      <InputLayout
        base={10}
        digits={baseNdigits(10)}
        setResults={setResults}
        setShowResult={setShowResult}
        singleBase={false}
      />
      {showResult && <OutputLayout results={results} />}
    </div>
  );
}

export default Decimal;
