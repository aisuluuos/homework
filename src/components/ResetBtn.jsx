import React from "react";

const ResetBtn = ({ onClick }) => {
  return (
    <div>
      <button className="reset-button" onClick={onClick}>
        reset
      </button>
    </div>
  );
};

export default ResetBtn;
