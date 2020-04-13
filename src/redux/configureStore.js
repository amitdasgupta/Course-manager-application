import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //for redux devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(immutableStateInvariantMiddleware()))
  );
}
