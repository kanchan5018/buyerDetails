import axios from "axios"

const BACKEND_URL = 'http://localhost:5000/'


export function postRequest({url = '', data = {}}){
    axios.post(`${BACKEND_URL}${url}`, data)
}

export function getRequest({url = '', params = {}}){
    axios.get(`${BACKEND_URL}${url}`, params)
}