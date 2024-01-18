import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// Create Reducer
const store = createStore(rootReducer, composeWithDevTools());

// export store default
export default store;
