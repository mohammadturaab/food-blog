const db = require("../models");

const index = (req, res) => {
    db.Post.find()
        .exec((err, allPost)=>{
            return res.status(200).json({
                message: "Success",
                data: allPost,
            })
        })
}

const create = (req, res) => {
    let incomingReq ={
        content: req.body.content,
    }
    db.Post.create(
        incomingReq,
        (err, allPost)=>{
            if(err) {
                return res.status(400).json({
                    message: "Error 400",
                    error: err
                })
            } else {
                return res.status(200).json({
                    message: "Success" + incomingReq

                })
            }
        }
        )
}

module.exports = {
    index,
    create
}