import {API} from "./index";

export async function request(endpoint, method, token) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }

    if (token)
        headers['Authorization'] = `Bearer ${token}`

    return fetch(API + endpoint, {
        mode: 'cors',
        method,
        headers,
    }).then(status)
}

export async function requestJson(endpoint, method, token) {
    return request(endpoint, method, token).then(data => data.json())
}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}