const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose
    .connect(process.env.MONGO_URL)
    .then(() =>{
        console.log(`mongoDB successfully connected at ${db.host}: ${db.port}`)
    })
    .catch((err)=>{
        console.log(`mongodb connection failed: ${err}`)
    })

module.exports = {
    Post: require('./post')
}