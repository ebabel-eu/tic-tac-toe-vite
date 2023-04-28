import { useState, MouseEvent } from 'react'
import './App.css'
import { Cell, defaultCells, defaultPlayer, otherPlayer } from './constants';
import isGameWon from './isGameWon';

function App() {
  const [cells, setCells] = useState(defaultCells);
  const [player, setPlayer] = useState(defaultPlayer);
  const [message, setMessage] = useState('');
  const [scorePlayer1, setScorePlayer1] = useState(
    isNaN(Number(localStorage['scorePlayer1'])) ? 0 : Number(localStorage['scorePlayer1']));
  const [scorePlayer2, setScorePlayer2] = useState(
    isNaN(Number(localStorage['scorePlayer2'])) ? 0 : Number(localStorage['scorePlayer2']));
  const [endGame, setEndGame] = useState(false);
      
  function isGameOver(): boolean {
    return cells.filter(cell => cell.face).length === cells.length;
  }

  function increasePlayerScore(player: number) {
    if (player === 1) {
      const newScorePlayer1 = scorePlayer1 + 1;
      setScorePlayer1(newScorePlayer1);
      localStorage.setItem('scorePlayer1', String(newScorePlayer1));
    }
    if (player === 2) {
      const newScorePlayer2 = scorePlayer2 + 1;
      setScorePlayer2(newScorePlayer2);
      localStorage.setItem('scorePlayer2', String(newScorePlayer2));
    }
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>, cell: Cell): void {
    e.preventDefault();

    // Do not change a cell if it's already been set
    // or if a game has ended.
    if (cell.face || endGame) return;

    // Update the clicked cell.
    cell.face = player === defaultPlayer ? 'X' : 'O';

    // Check if the game has been won by a player.
    if (isGameWon(cells)) {
      setMessage(`Player ${player} won!`);
      increasePlayerScore(player);
      setEndGame(true);
      return;
    }

    // Check if the game is over because no more move is possible.
    if (isGameOver()) {
      setMessage('Nobody won!');
      setEndGame(true);
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
    setEndGame(false);
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
        <p className='scores'>
          <span className="player-1">{scorePlayer1}</span> 
          <span className='vs'>vs</span> 
          <span className="player-2">{scorePlayer2}</span>
        </p>
        <button type="reset" onClick={startNewGame}>Start a new game</button>
      </div>
    </>
  )
}

export default App
