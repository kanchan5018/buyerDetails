import { act } from "react";
import { ActionType } from "./action";

const defaultState = {
    adduser: {},
    isloading: false,
    buyersDetails: [],
    selectedBuyers: {}
}

const Buyers = (state = defaultState, action) => {

    switch (action.type) {
        case ActionType.ADD_BUYERS_REQUEST:
            console.log('hhhhhhhhhhhhh', action)
            return {
                ...state,
            }
        case ActionType.ADD_BUYERS_REQUEST_SUCCESS:
            console.log("success", action)
            return {
                ...state,
                adduser: action.payload.data
            }
        case ActionType.ADD_BUYERS_REQUEST_FAILURE:
            console.log("falllllllll", action)
            return {
                ...state,
            }
        case ActionType.FETCH_BUYERS_DETAILS_REQUEST:
            return {
                ...state,
                isloading: true
            }
        case ActionType.FETCH_BUYERS_DETAILS_REQUEST_SUCCESS:
            return{
                ...state,
                buyersDetails: action.payload.data
            }
        case ActionType.FETCH_BUYERS_DETAILS_REQUEST_FAIULRE:
            return{
                ...state,
            }
        case ActionType.DISPLAY_SELECTED_BUYERS_REQUEST_SUCCESS:
            return{
                ...state,
                isloading: false,
                buyersDetails: action.payload.data
            }
        case ActionType.DISPLAY_SELECTED_BUYERS_REQUEST_FAILURE:
            return{
                ...state,
                isloading: false,
            }
        default:
            return state
    }
}
export default Buyers;