import { useState } from "react";
import DropDown from "../custom components/DropDown";
import InputLayout from "../num system layouts/InputLayout";
import { baseNdigits } from "../../utils/baseN utils/baseNdigits.js";
import OutputLayout from "../num system layouts/OutputLayout";

function BaseNToM() {
  const [startBase, setStartBase] = useState(2);
  const [endBase, setEndBase] = useState(8);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const baseList = Array(31)
    .fill(0)
    .map((_, indx) => {
      return { title: `Base-${indx + 2}`, value: indx + 2 };
    });

  return (
    <div className="container">
      <div className="drop">
        <div className="base-input-dropdown">
          <h2>From: </h2>
          <DropDown
            list={baseList}
            currentValue={{ title: `Base-${startBase}`, value: startBase }}
            setValue={setStartBase}
            num={1}
          />
        </div>
        <div className="base-input-dropdown">
          <h2>To: </h2>
          <DropDown
            list={baseList}
            currentValue={{ title: `Base-${endBase}`, value: endBase }}
            setValue={setEndBase}
            num={2}
          />
        </div>
      </div>
      <h2 className="calc-title">{`Enter Base-${startBase} number: `}</h2>
      <InputLayout
        base={startBase}
        digits={baseNdigits(startBase)}
        setResults={setResult}
        setShowResult={setShowResult}
        singleBase={true}
        baseM={endBase}
      />
      {showResult && <OutputLayout results={result} />}
    </div>
  );
}

export default BaseNToM;
