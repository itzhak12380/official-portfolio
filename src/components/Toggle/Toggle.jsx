import React, { useContext } from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themContext } from "../../context/contaxt";
function Toggle() {
  const theme = useContext(themContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };
  return (
    <div className="toggle"  onClick={handleClick}>
      <Sun />
      <Moon />
      <div
        className="t-button"
       
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}

export default Toggle;
