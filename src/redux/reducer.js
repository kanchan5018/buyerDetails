import { ActionType } from "./action";

const defaultState = {
    adduser: {},
    isloading: false,
    buyersDetails: [],
    buyersDiamondDetails: []
}

const Buyers = (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.ADD_BUYERS_REQUEST:
            return {
                ...state,
                isloading: true
            }
        case ActionType.ADD_BUYERS_REQUEST_SUCCESS:
            return {
                ...state,
                adduser: action.payload,
                isloading: false
            }
        case ActionType.ADD_BUYERS_REQUEST_FAILURE:
            return {
                ...state,
                isloading: false,
                error: action.error,
            }
        case ActionType.FETCH_BUYERS_DETAILS_REQUEST:
            return {
                ...state,
                isloading: true
            }
        case ActionType.FETCH_BUYERS_DETAILS_REQUEST_SUCCESS:
            return{
                ...state,
                isloading: false,
                buyersDetails: action.payload
            }
        case ActionType.FETCH_BUYERS_DETAILS_REQUEST_FAIULRE:
            return{
                ...state,
                isloading: false
            }
        case ActionType.DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST: {
            return{
                ...state,
                isloading: true
            }
        }
        case ActionType.DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST_SUCCESS:
            return{
                ...state,
                isloading: false,
                buyersDiamondDetails: action.payload
            }
        case ActionType.DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST_FAILURE:
            return{
                ...state,
                isloading: false,
            }
        default:
            return state;
    }
}
export default Buyers;