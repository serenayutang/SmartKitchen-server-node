const mongoose = require("mongoose")
const Schema = require("mongoose");

const reviewSchema = new mongoose.Schema({
    recipeId: String,
    textArea: String,
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'UserModel'
    // },
    username: {
        type: mongoose.Schema.Types.String,
        ref: "UserModel"
    },
    userId: String,
    recipeName: String,
    recipeImg: String
}, {collection: "reviews", timestamps: true})

module.exports = reviewSchema
