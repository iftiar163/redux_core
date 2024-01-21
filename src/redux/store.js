import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

// Api Middleware
const middleWare = [thunk];

// Create Reducer
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

// export store default
export default store;
