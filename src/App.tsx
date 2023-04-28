import { useState, MouseEvent } from 'react'
import './App.css'
import { Cell, defaultCells, defaultPlayer, otherPlayer } from './constants';

function App() {
  const [cells, setCells] = useState(defaultCells);
  const [player, setPlayer] = useState(defaultPlayer);
  const [message, setMessage] = useState('');

  function handleClick(e: MouseEvent<HTMLButtonElement>, cell: Cell): void {
    e.preventDefault();

    // Do not change a cell if it's already been set.
    if (cell.face) return;

    cell.face = player === defaultPlayer ? 'X' : 'O';

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
      <p className={`player-${player}`}>{message || <span>Player {player}!<br />It's your turn now!</span>}</p>
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
