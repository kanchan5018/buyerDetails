import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from './reducer/index'
import watchBuyers from "../redux/saga";


const sagamiddleware = createSagaMiddleware();
export const store = createStore(
    RootReducer,
    sagamiddleware(applyMiddleware)
)
sagamiddleware.run(watchBuyers)

