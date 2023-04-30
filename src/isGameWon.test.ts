import { test, expect } from 'vitest';
import isGameWon from './isGameWon';
import { Cell } from './constants';

test('isGameWon is a function', () => {
  expect(isGameWon).toBeTypeOf('function');
});

test('isGameWon returns false when three cells are not the same', () => {
  const cells: Cell[] = [
    {id: 0, face: 'O'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'O'}, {id: 4, face: 'X'}, {id: 5, face: 'X'},
    {id: 6, face: 'X'}, {id: 7, face: 'O'}, {id: 8, face: 'O'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(false);
});

test('isGameWon returns true when three cells the same on the first row', () => {
  const cells: Cell[] = [
    {id: 0, face: 'O'}, {id: 1, face: 'O'}, {id: 2, face: 'O'},
    {id: 3, face: 'O'}, {id: 4, face: 'X'}, {id: 5, face: 'X'},
    {id: 6, face: 'X'}, {id: 7, face: 'O'}, {id: 8, face: 'O'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(true);
});

test('isGameWon returns true when three cells the same on the second row', () => {
  const cells: Cell[] = [
    {id: 0, face: 'O'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'X'}, {id: 4, face: 'X'}, {id: 5, face: 'X'},
    {id: 6, face: 'X'}, {id: 7, face: 'O'}, {id: 8, face: 'O'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(true);
});

test('isGameWon returns true when three cells the same on the third row', () => {
  const cells: Cell[] = [
    {id: 0, face: 'O'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'X'}, {id: 4, face: 'O'}, {id: 5, face: 'X'},
    {id: 6, face: 'O'}, {id: 7, face: 'O'}, {id: 8, face: 'O'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(true);
});

test('isGameWon returns true when three cells the same on the first column', () => {
  const cells: Cell[] = [
    {id: 0, face: 'O'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'O'}, {id: 4, face: 'O'}, {id: 5, face: 'X'},
    {id: 6, face: 'O'}, {id: 7, face: 'X'}, {id: 8, face: 'X'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(true);
});

test('isGameWon returns true when three cells the same on the second column', () => {
  const cells: Cell[] = [
    {id: 0, face: 'X'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'O'}, {id: 4, face: 'X'}, {id: 5, face: 'X'},
    {id: 6, face: 'O'}, {id: 7, face: 'X'}, {id: 8, face: 'X'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(true);
});

test('isGameWon returns true when three cells the same on the third column', () => {
  const cells: Cell[] = [
    {id: 0, face: 'X'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'X'}, {id: 4, face: 'O'}, {id: 5, face: 'O'},
    {id: 6, face: 'O'}, {id: 7, face: 'X'}, {id: 8, face: 'O'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(true);
});

test('isGameWon returns true when three cells the same on the ascending diagonal', () => {
  const cells: Cell[] = [
    {id: 0, face: 'X'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'X'}, {id: 4, face: 'O'}, {id: 5, face: 'X'},
    {id: 6, face: 'O'}, {id: 7, face: 'X'}, {id: 8, face: 'O'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(true);
});

test('isGameWon returns true when three cells the same on the descending diagonal', () => {
  const cells: Cell[] = [
    {id: 0, face: 'X'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'X'}, {id: 4, face: 'X'}, {id: 5, face: 'O'},
    {id: 6, face: 'O'}, {id: 7, face: 'O'}, {id: 8, face: 'X'},
  ];
  const result: boolean = isGameWon(cells);
  expect(result).toBe(true);
});

test('isGameWon throws an error when input does not have the right number of cells', () => {
  const cells: Cell[] = [
    {id: 0, face: 'X'}, {id: 1, face: 'X'}, {id: 2, face: 'O'},
    {id: 3, face: 'X'}, {id: 4, face: 'X'}, {id: 5, face: 'O'},
    {id: 6, face: 'O'}, {id: 7, face: 'O'},
  ];

  // To test code that throws an error,
  // it needs to be wrapped into an anonymous function first.
  const t = () => {
    isGameWon(cells);
  };

  expect(t).toThrow(Error);
  expect(t).toThrow('Unexpected grid of cells.');
});
