const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    contect: {
        type: String
    }
})

module.exports = mongoose.model("post", postSchema);