import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from './reducer/index';
import BuyersSaga from "../redux/saga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware)  // Corrected here
);
sagaMiddleware.run(BuyersSaga);
