import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import todoReducer from "./todos/todoReducer";
import studentReducer from "./student/studentReducer";

// Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  student: studentReducer,
});

// Export Default
export default rootReducer;
