import {API} from "./index";

export async function request(endpoint, method, token, data) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }

    if (token)
        headers['Authorization'] = `Bearer ${token}`

    if (data)
        headers['Content-Type'] = 'application/json'

    const params = {
        mode: 'cors',
        method,
        headers,
    }

    if (data)
        params['body'] = JSON.stringify(data)

    return fetch(API + endpoint, params).then(status)
}

export async function requestJson(endpoint, method, token, data) {
    return request(endpoint, method, token, data).then(data => data.json())
}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}