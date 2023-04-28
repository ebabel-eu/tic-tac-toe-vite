import { Cell } from "./constants";

function areThreeFacesSame(cells: Cell[], i: number[]): boolean {
  return (cells[i[0]].face && cells[i[1]].face && cells[i[2]].face 
    && cells[i[0]].face === cells[i[1]].face && cells[i[1]].face === cells[i[2]].face) || false
}

export default function isGameWon(cells: Cell[]): boolean {
  if (!cells || cells.length !== 9) {
    throw Error('Unexpected grid of cells.');
  }

  return areThreeFacesSame(cells, [0, 1, 2]) || areThreeFacesSame(cells, [3, 4, 5]) || areThreeFacesSame(cells, [6, 7, 8])
    || areThreeFacesSame(cells, [0, 3, 6]) || areThreeFacesSame(cells, [1, 4, 7]) || areThreeFacesSame(cells, [2, 5, 8]) 
    || areThreeFacesSame(cells, [0, 4, 8]) || areThreeFacesSame(cells, [6, 4, 2]);
}
