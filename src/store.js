import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";
import rootSaga from './sagas';

const persistConfig = {
  key: "root",
  storage
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};
const enhancers = [];
const middlewares = [sagaMiddleware];

// Log state while development
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// Create Store
const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middlewares),
  enhancers
);

const persistor = persistStore(store);

export { store, persistor };

//  run the saga
sagaMiddleware.run(rootSaga);
