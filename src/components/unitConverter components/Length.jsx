import { useState } from "react";
import DropDown from "../custom components/DropDown";

function Length() {
  const [startBase, setStartBase] = useState(2);
  const [endBase, setEndBase] = useState(8);

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
    </div>
  );
}

export default Length;
