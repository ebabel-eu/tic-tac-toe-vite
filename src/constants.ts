export type Cell = {
  id: number;
  face?: 'X' | 'O';
}

export type Player = 1 | 2;

export const defaultCells: Cell[] = [
  {id: 1}, {id: 2}, {id: 3},
  {id: 4}, {id: 5}, {id: 6},
  {id: 7}, {id: 8}, {id: 9}, 
];

export const defaultPlayer: Player = 1;
export const otherPlayer: Player = 2;

