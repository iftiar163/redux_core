import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import todoReducer from "./todos/todoReducer";

// Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

// Export Default
export default rootReducer;
