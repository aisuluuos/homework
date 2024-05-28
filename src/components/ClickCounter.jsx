import React from "react";

const ClickCounter = ({ clickCount }) => {
  return (
    <div className="counter">
      <p>количество кликов : {clickCount}</p>
    </div>
  );
};

export default ClickCounter;
