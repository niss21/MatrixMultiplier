import { useState } from "react";
import Determinant from "../matrix components/Determinant.jsx";
import Inverse from "../matrix components/Inverse.jsx";
import Cofactor from "../matrix components/Cofactor.jsx";
import Adjoint from "../matrix components/Adjoint.jsx";
import Transpose from "../matrix components/Transpose.jsx";
import MatrixProduct from "../matrix components/MatrixProduct.jsx";
import RowEchelon from "../matrix components/RowEchelon.jsx";
import ReducedRowEchelon from "../matrix components/ReducedRowEchelon.jsx";
import Tab from "../custom components/Tab.jsx";
import LuDecomposition from "../matrix components/LuDecomposition.jsx";

function MatrixTab() {
  const [currentTab, setCurrentTab] = useState("Determinant");
  const tabData = [
    { name: "Determinant", comp: <Determinant /> },
    { name: "Inverse", comp: <Inverse /> },
    { name: "Cofactor", comp: <Cofactor /> },
    { name: "Adjoint", comp: <Adjoint /> },
    { name: "Transpose", comp: <Transpose /> },
    { name: "Matrix Product", comp: <MatrixProduct /> },
    { name: "LU Decomposition", comp: <LuDecomposition /> },
    { name: "Row Echelon Form", comp: <RowEchelon /> },
    { name: "Reduced Row Echelon Form", comp: <ReducedRowEchelon /> },
  ];

  return (
    <Tab
      tabData={tabData}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
    />
  );
}

export default MatrixTab;
