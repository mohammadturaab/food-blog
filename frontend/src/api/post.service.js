import frontend from "./axios.config"

const post = '/post';

const create = (data) => {
    console.log("hit");
    return frontend.post(`${post}`, data)
    
}

export {
    create
}