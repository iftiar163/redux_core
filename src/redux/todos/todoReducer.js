import { TODO_ADD } from "./actionTypes";
import { initialState } from "./initValue";

// Create Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};

// Export Default
export default todoReducer;
