
const reviewModel = require("../database/review/review-model")

const findAllReviews = () => {
    return reviewModel.find().exec()
}

const findReviewsByRecipe = (recipeId) => {
    return reviewModel.find({recipeId: recipeId}).populate("users").exec()
}

const createReviewForRecipe = (recipeId, textArea, username, recipeName, recipeImg, userId) => {
    return reviewModel.create({recipeId, textArea, username, recipeName, recipeImg, userId})
}

const findReviewById = (reviewId) => {
    return reviewModel.findById(reviewId)
}

const findReviewsByUsername = (username) => {
    if(username) {
        return reviewModel.find({username});
    }
}

const deleteReview = (recipeId, reviewId) => {
    return reviewModel.deleteOne({recipeId, _id: reviewId});
}

module.exports = {
    findAllReviews, findReviewsByRecipe, createReviewForRecipe, findReviewById, findReviewsByUsername, deleteReview
}


