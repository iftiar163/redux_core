import { TODO_ADD, TODO_DELETE } from "./actionTypes";
import { initialState } from "./initValue";

// Create Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];

    case TODO_DELETE:
      return state.filter((data) => data !== action.payload);
    default:
      return state;
  }
};

// Export Default
export default todoReducer;
