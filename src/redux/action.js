export const ActionType = {
    ADD_BUYERS_REQUEST: 'ADD_BUYERS_REQUEST',
    ADD_BUYERS_REQUEST_SUCCESS: 'ADD_BUYERS_REQUEST_SUCCESS',
    ADD_BUYERS_REQUEST_FAILURE: 'ADD_BUYERS_REQUEST_FAILURE',

    FETCH_BUYERS_DETAILS_REQUEST: 'FETCH_BUYERS_DETAILS_REQUEST',
    FETCH_BUYERS_DETAILS_REQUEST_SUCCESS:'FETCH_BUYERS_DETAILS_REQUEST_SUCCESS',
    FETCH_BUYERS_DETAILS_REQUEST_FAIULRE: 'FETCH_BUYERS_DETAILS_REQUEST_FAIULRE',

    DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST: 'DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST',
    DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST_SUCCESS: 'DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST_SUCCESS',
    DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST_FAILURE: 'DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST_FAILURE'
}

export const addBuyers = (addBuyers) =>{
    return{
        type: ActionType.ADD_BUYERS_REQUEST,
        payload: addBuyers
    }
}

export const fetchbuyers = (getBuyers) => {
    return{
        type: ActionType.FETCH_BUYERS_DETAILS_REQUEST,
        payload: getBuyers
    }
}

export const diamondBuyersDetails = (id)=>{
    return{
        type: ActionType.DISPLAY_BUYERS_DIAMOND_DETAILS_REQUEST,
        payload: id
    }
}