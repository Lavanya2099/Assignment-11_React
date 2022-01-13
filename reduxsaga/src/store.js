import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";

import createSagaMiddleware from "redux-saga/";
import rootSaga from "./sagas/rootSaga"

let sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  (
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga)

export default store;
