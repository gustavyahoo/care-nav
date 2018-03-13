import { createStore } from 'redux';

const reducer = (state = { user: null }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default createStore(reducer);
