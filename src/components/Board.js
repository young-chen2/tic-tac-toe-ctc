import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => (
  // TODO: Populate the board with squares
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
