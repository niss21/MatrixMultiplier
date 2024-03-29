import { IoIosArrowDown } from "react-icons/io";
import "./DropDown.css";

function DropDown({ list, currentValue, setValue, num }) {
  const toggleDropDown = () => {
    const dropDownWrapper = document.querySelectorAll(".dropdown-wrapper");
    const dropListEl = document.querySelectorAll(".droplist-wrapper");
    const dropDownArrow = document.querySelectorAll(".dropdown-arrow");

    if (dropListEl[num - 1].classList.contains("show-dropdown")) {
      dropDownWrapper[num - 1].classList.remove("expand-dropdown-wrapper");
      dropListEl[num - 1].classList.remove("show-dropdown");
      dropDownArrow[num - 1].classList.remove("rotate-arrow");
    } else {
      dropDownWrapper[num - 1].classList.add("expand-dropdown-wrapper");
      dropListEl[num - 1].classList.add("show-dropdown");
      dropDownArrow[num - 1].classList.add("rotate-arrow");
    }
  };

  const renderList = list.map((data, indx) => {
    return (
      <div
        onClick={() => {
          toggleDropDown();
          setValue(data.value);
        }}
        className={data.value === currentValue.value ? "active-drop" : ""}
        key={indx}
      >
        {data.title}
      </div>
    );
  });
  return (
    <div className="dropdown-wrapper">
      <div onClick={toggleDropDown} className="selected-drop">
        <span>{currentValue.title}</span>
        <IoIosArrowDown className="dropdown-arrow" />
      </div>
      <div className="droplist-wrapper">{renderList}</div>
    </div>
  );
}

export default DropDown;
