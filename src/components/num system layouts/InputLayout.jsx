import { useState, useEffect } from "react";
import { decToOther } from "../../utils/baseN utils/decToOther..js";
import "./InputLayout.css";

function InputLayout({
  base,
  digits,
  setResults,
  setShowResult,
  singleBase,
  baseM,
}) {
  const [baseNum, setBaseNum] = useState("");

  useEffect(() => {
    handleReset();
  }, [base]);

  const handleChange = (event) => {
    const value = event.target.value.toUpperCase();
    const lastValue = value[value.length - 1] || "0";
    if (digits.includes(lastValue)) {
      setBaseNum(value);
    }
  };

  const handleReset = () => {
    setBaseNum("");
    setResults(null);
    setShowResult(false);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    let decimal = parseInt(baseNum, base);
    let binary;
    let octal;
    let hexa;
    let baseMValue;
    try {
      if (isNaN(decimal)) {
        throw new Error("Invalid Input");
      } else {
        if (singleBase) {
          baseMValue = decToOther(decimal, baseM);
          setResults([{ n: baseM, base: `Base-${baseM}`, value: baseMValue }]);
        } else {
          binary = decToOther(decimal, 2);
          octal = decToOther(decimal, 8);
          hexa = decToOther(decimal, 16);

          const results = [
            { n: 2, base: "Binary", value: binary },
            { n: 8, base: "Octal", value: octal },
            { n: 10, base: "Decimal", value: decimal },
            { n: 16, base: "HexaDecimal", value: hexa },
          ];
          setResults(results.filter((result) => result.n !== base));
        }
        setShowResult(true);
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <form onSubmit={handleCalculate} className="base-n-form">
      <input value={baseNum} onChange={handleChange} className="base-n-input" />
      <div className="btn-container">
        <button type="submit" className="btn calc-btn">
          Convert
        </button>
        <button onClick={handleReset} type="button" className="btn reset-btn">
          Reset
        </button>
      </div>
    </form>
  );
}

export default InputLayout;
