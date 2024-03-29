import { useEffect } from "react";
import SideBar from "./SideBar";
import "./Tab.css";

function Tab({ tabData, currentTab, setCurrentTab }) {
  useEffect(() => {
    const sideBar = document.querySelector(".sidebar-wrapper");
    const sideBarCover = document.querySelector(".sidebar-background-cover");

    const hideSideBar = () => {
      sideBar.classList.remove("show-sidebar");
      sideBarCover.classList.remove("show-sidebar-cover");
    };

    sideBarCover.addEventListener("click", hideSideBar);

    return () => sideBarCover.removeEventListener("click", hideSideBar);
  }, []);

  return (
    <div className="tab-wrapper">
      <SideBar
        tabData={tabData}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="currentTab-wrapper">
        {tabData.find((tab) => tab.name === currentTab).comp}
      </div>
      <div className="sidebar-background-cover"></div>
    </div>
  );
}

export default Tab;
