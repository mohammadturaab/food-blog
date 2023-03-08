import frontend from "./axios.config"

const post = '/post';

const create = (data) => {
    return frontend.post(`${post}`, data)
}

const show = (data) => {
    // console.log("here " + JSON.stringify(data.data.content));
    return frontend.get(`${post}`, data)
}

export {
    create,
    show
}