import { test, expect } from 'vitest';
import App from './App';

test('App is a function', () => {
  expect(App).toBeTypeOf('function');
});

// todo: write more unit tests.