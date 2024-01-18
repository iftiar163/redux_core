import { DECREMENT, INCREMENT, RESET, SET } from "./actionType";
import { initialState } from "./initialState";

// Create Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    case SET:
      return 100;

    default:
      return state;
  }
};

// Export Default Reducer
export default counterReducer;
