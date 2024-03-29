import { useState } from "react";
import Binary from "../num system components/Binary.jsx";
import Decimal from "../num system components/Decimal.jsx";
import Octal from "../num system components/Octal.jsx";
import Hexa from "../num system components/Hexa.jsx";
import BaseNToM from "../num system components/BaseNToM.jsx";
import Tab from "../custom components/Tab.jsx";

function NumberSystemTab() {
  const [currentTab, setCurrentTab] = useState("Base-2 to Other");
  const tabData = [
    { name: "Base-2 to Other", comp: <Binary /> },
    { name: "Base-8 to Other", comp: <Octal /> },
    { name: "Base-10 to Other", comp: <Decimal /> },
    { name: "Base-16 to Other", comp: <Hexa /> },
    { name: "Base-N to Base-M", comp: <BaseNToM /> },
  ];
  return (
    <Tab
      tabData={tabData}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
    />
  );
}

export default NumberSystemTab;
