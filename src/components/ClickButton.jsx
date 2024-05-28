import React from "react";

const ClickButton = ({ onClick }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        press
      </button>
    </div>
  );
};

export default ClickButton;
