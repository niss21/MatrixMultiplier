import { useLocation, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import { useEffect } from "react";

function Header() {
  const location = useLocation();

  useEffect(() => {
    const hamBurgerBtn = document.querySelector(".sidebar-toggle-btn");
    const validRoutes = ["/", "/matrix", "/base-n"];
    if (!validRoutes.includes(location.pathname))
      hamBurgerBtn.classList.add("remove-sidebar-toggle-btn");
    else {
      hamBurgerBtn.classList.remove("remove-sidebar-toggle-btn");
    }
  }, [location.pathname]);

  const routes = [
    { name: "Matrix", to: "/" },
    // { name: "Matrix", to: "/matrix" },
    // { name: "Base-N", to: "/base-n" },
    // { name: "Graph", to: "/graph" },
    // { name: "Unit Converter", to: "/unit-converter" },
  ];

  const handleToggle = () => {
    const sideBar = document.querySelector(".sidebar-wrapper");
    const sideBarCover = document.querySelector(".sidebar-background-cover");

    if (sideBar.classList.contains("show-sidebar")) {
      sideBar.classList.remove("show-sidebar");
      sideBarCover.classList.remove("show-sidebar-cover");
    } else {
      sideBar.classList.add("show-sidebar");
      sideBarCover.classList.add("show-sidebar-cover");
    }
  };

  const renderRoutes = routes.map((route, indx) => {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? "route active-route" : "route"
        }
        to={route.to}
        key={indx}
      >
        {route.name}
      </NavLink>
    );
  });

  return (
    <nav className="header-wrapper">
      <button onClick={handleToggle} className="sidebar-toggle-btn">
        <RxHamburgerMenu size={20} />
      </button>
      <div className="routes-wrapper">{renderRoutes}</div>
    </nav>
  );
}

export default Header;
