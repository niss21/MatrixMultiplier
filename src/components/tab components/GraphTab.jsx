import { useEffect } from "react";
import "../custom components/Tab.css";

function GraphTab() {
  useEffect(() => {
    const graphEl = document.getElementById("calculator");
    const graphCalc = Desmos.GraphingCalculator(graphEl);
  }, []);
  return <div id="calculator" className="tab-wrapper"></div>;
}

export default GraphTab;
