import { combineReducers } from "redux";

import Buyers from '../../redux/reducer'

const RootReducer = combineReducers({
    buyers: Buyers
})

export default RootReducer;