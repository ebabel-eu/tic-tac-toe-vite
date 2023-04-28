import { useState, MouseEvent } from 'react'
import './App.css'
import { Cell, defaultCells, defaultPlayer, otherPlayer } from './constants';
import isGameWon from './isGameWon';

function App() {
  const [cells, setCells] = useState(defaultCells);
  const [player, setPlayer] = useState(defaultPlayer);
  const [message, setMessage] = useState('');
    
  function isGameOver(): boolean {
    return cells.filter(cell => cell.face).length === cells.length;
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>, cell: Cell): void {
    e.preventDefault();

    // Do not change a cell if it's already been set.
    if (cell.face) return;

    // Update the clicked cell.
    cell.face = player === defaultPlayer ? 'X' : 'O';

    // Check if the game has been won by a player.
    if (isGameWon(cells)) {
      setMessage(`Player ${player} won!`);
      return;
    }

    // Check if the game is over because no more move is possible.
    if (isGameOver()) {
      setMessage('Nobody won!');
      return;
    }

    // Toggle to the next player.
    if (player === defaultPlayer) {
      setPlayer(otherPlayer);
    } else {
      setPlayer(1);
    }
  }

  function startNewGame() {
    const blankCells: Cell[] = [...defaultCells.map(cell => {
      cell.face = undefined; return cell;})];
    setCells(blankCells);
    setPlayer(defaultPlayer);
    setMessage('');
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="card">
      <p className={`player-${player}`}>{message || <span>Player {player}!</span>}</p>
        {
          cells.map(cell => {
            const lineBreak: boolean = cell.id % 3 === 0;

            return (
              <span key={`cell_${cell.id}`}>
                <button className={`face face-${cell.face}`} onClick={(e) => {handleClick(e, cell)}}>
                  {cell.face || ' '}
                </button>
                {lineBreak && <br />}
              </span>
            )
          }
          )
        }
        <button type="reset" onClick={startNewGame}>Start a new game</button>
      </div>
    </>
  )
}

export default App
