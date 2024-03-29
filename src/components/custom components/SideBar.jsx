import "./SideBar.css";

function SideBar({ tabData, currentTab, setCurrentTab }) {
  const closeSideBar = () => {
    const bodyEl = document.body;
    const sideBar = document.querySelector(".sidebar-wrapper");
    const sideBarCover = document.querySelector(".sidebar-background-cover");
    if (bodyEl.clientWidth < 720) {
      sideBar.classList.remove("show-sidebar");
      sideBarCover.classList.remove("show-sidebar-cover");
    }
  };

  const renderLinks = tabData.map((data, indx) => (
    <div
      onClick={() => {
        closeSideBar();
        setCurrentTab(data.name);
      }}
      style={{
        backgroundColor: data.name === currentTab ? "rgb(93, 23, 222)" : "",
      }}
      key={indx}
    >
      {data.name}
    </div>
  ));
  return <nav className="sidebar-wrapper">{renderLinks}</nav>;
}

export default SideBar;
