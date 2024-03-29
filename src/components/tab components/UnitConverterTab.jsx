import { useState } from "react";
import Length from "../unitConverter components/Length.jsx";
import Area from "../unitConverter components/Area.jsx";
import Volume from "../unitConverter components/Volume.jsx";
import Time from "../unitConverter components/Time.jsx";
import Pressure from "../unitConverter components/Pressure.jsx";
import Mass from "../unitConverter components/Mass.jsx";
import Force from "../unitConverter components/Force.jsx";
import Speed from "../unitConverter components/Speed.jsx";
import Acceleration from "../unitConverter components/Acceleration.jsx";
import Temperature from "../unitConverter components/Temperature.jsx";
import Tab from "../custom components/Tab.jsx";

function UnitConverterTab() {
  const [currentTab, setCurrentTab] = useState("Length");
  const tabData = [
    { name: "Length", comp: <Length /> },
    { name: "Area", comp: <Area /> },
    { name: "Volume", comp: <Volume /> },
    { name: "Time", comp: <Time /> },
    { name: "Pressure", comp: <Pressure /> },
    { name: "Mass", comp: <Mass /> },
    { name: "Force", comp: <Force /> },
    { name: "Speed", comp: <Speed /> },
    { name: "Acceleration", comp: <Acceleration /> },
    { name: "Temperature", comp: <Temperature /> },
  ];

  return (
    <Tab
      tabData={tabData}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
    />
  );
}

export default UnitConverterTab;
