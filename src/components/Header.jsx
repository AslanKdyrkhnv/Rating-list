import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, bg }) => {
  return (
    <header style={{ backgroundColor: bg }}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
