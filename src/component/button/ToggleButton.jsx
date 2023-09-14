import React from "react";
import { THEME } from "../../common/constants";
import "./ToggleButton.scss";

const ToggleButton = ({ toggleNav, theme, setTheme }) => {
  const onToggleClick = () => {
    toggleNav(false);
    setTheme((prevTheme) => {
      const newTheme = prevTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
      localStorage.setItem("current-theme", newTheme);

      return newTheme;
    });
  };

  return (
    <div className="outer" onClick={onToggleClick}>
      <div className={`inner ${theme === THEME.DARK ? "circle" : ""}`} />
    </div>
  );
};

export default ToggleButton;
