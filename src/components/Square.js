import React from "react";

// TODO: Create a clickable square that can contain an X or O

const Square = ({ value, onClick }) => {
  return (
    <>
      <button className="squares" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
