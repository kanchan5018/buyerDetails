import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionType } from './action';
import { postRequest, getRequest } from '../services/api'; // Adjust the import path based on your file structure

// URL endpoints for the buyers
const API_BUYERS_URL = 'buyers'; // Assuming you're using /buyers endpoint for buyers

// Worker saga to handle adding a buyer
function* addBuyer(action) {
    console.log("action",action)
    try {
        const response = yield call(postRequest, { url: API_BUYERS_URL, data: action.payload });
        yield put({ type: ActionType.ADD_BUYERS_REQUEST_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ActionType.ADD_BUYERS_REQUEST_FAILURE, error });
    }
}

// Worker saga to fetch buyers details
function* fetchBuyers() {
    try {
        const response = yield call(getRequest, { url: API_BUYERS_URL });
        yield put({ type: ActionType.FETCH_BUYERS_DETAILS_REQUEST_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ActionType.FETCH_BUYERS_DETAILS_REQUEST_FAIULRE, error });
    }
}

// Worker saga to handle displaying selected buyers
function* displaySelectedBuyers(action) {
    try {
        const response = yield call(getRequest, { url: `${API_BUYERS_URL}/${action.payload.id}` }); // Adjust based on your endpoint structure
        yield put({ type: ActionType.DISPLAY_SELECTED_BUYERS_REQUEST_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ActionType.DISPLAY_SELECTED_BUYERS_REQUEST_FAILURE, error });
    }
}

// Watcher saga
export default function* watchBuyers() {
    yield takeEvery(ActionType.ADD_BUYERS_REQUEST, addBuyer);
    yield takeEvery(ActionType.FETCH_BUYERS_DETAILS_REQUEST, fetchBuyers);
    yield takeEvery(ActionType.DISPLAY_SELECTED_BUYERS_REQUEST, displaySelectedBuyers);
}
