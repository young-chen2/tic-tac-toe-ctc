import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  
  // TODO: Render the board here along with the title, game status,
  // and 'Go to Start' button.
  const [board, setBoard] = useState(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const currentPlayer = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    // create a copy of the board
    const newBoard = board.slice();
    if (winner || newBoard[i]) {
      return;
    }
    newBoard[i] = currentPlayer;
    setBoard(newBoard);
    setStepNumber(stepNumber + 1);
    setXIsNext(!xIsNext);
  };

  const jumpToStart = () => {
    setBoard(Array(9).fill(null));
    setStepNumber(0);
    setXIsNext(true);
  };

  const result = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return "Tie Game";
    } else {
      return `Next Player: ${currentPlayer}`;
    }
  };

  return (
    <>
      <h1> Tic Tac Toe </h1>
      <Board squares={board} onClick = {handleClick} />
      <div className="info-wrapper">
        <div>
          <button onClick={jumpToStart}> Restart Game! </button>
        </div>
        <h3> {result()} </h3>
      </div>
    </>
  );
};

export default Game;
