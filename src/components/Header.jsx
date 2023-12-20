import { useState } from "react";
import light_mode from "../assets/theme_light.png";
import dark_mode from "../assets/theme_dark.png";

const Header = () => {
  const [colorTheme, setColorTheme] = useState(dark_mode);

  const handleColorTheme = () => {
    setColorTheme((prevColor) =>
      prevColor === dark_mode ? light_mode : dark_mode
    );
  };

  return (
    <>
      <img
        src={colorTheme}
        className="theme-btn"
        alt="theme icon"
        onClick={handleColorTheme}
      />
      <h1>ROT13</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/ROT13">About ROT13</a>
      </p>
    </>
  );
};
export default Header;
