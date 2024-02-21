import { createStore } from 'redux';

const todos = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export const store = createStore(todos);

export const increment = {
  type: 'INCREMENT',
};

export const decrement = {
  type: 'DECREMENT',
};

export const reset = {
  type: 'RESET',
};
