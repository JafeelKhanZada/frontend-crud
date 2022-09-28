import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import CreateReducer from "./reducer";
const store = createStore(
  CreateReducer,
  compose(applyMiddleware(thunk, logger))
);

export default store;
