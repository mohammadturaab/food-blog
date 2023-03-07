import client from "./axios.config"

const post = '/post';

const create = (data) => {
    return client.post(`${post}`, data)
}

export {
    create
}