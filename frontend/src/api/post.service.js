import frontend from "./axios.config"

const post = '/post';

const create = (data) => {
    console.log("hit");
    return frontend.post(`${post}`, data)
}

const show = (data) => {
    return frontend.get(`${post}`, data)
}

export {
    create,
    show
}