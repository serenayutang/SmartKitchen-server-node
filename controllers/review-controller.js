module.exports = (app) => {
    const reviewService = require("../services/review-service")

    const findAllReviews = (req, res) => {
        reviewService.findAllReviews()
            .then((reviews) => {
                res.send(reviews)
            })
    }

    const findReviewsByRecipe = (req, res) => {
        const recipeId = req.params['recipeId']
        reviewService.findReviewsByRecipe(recipeId)
            .then((reviews) => {
                res.send(reviews)
            })
    }

    const createReviewForRecipe = (req, res) => {
        // reviewService.createReviewForRecipe(req.params.recipeId, req.body)
        //     .then((reviews) => {
        //         res.send(reviews)
        //     })
        const review = req.body;
        const recipeId = review.recipeId;
        const textArea = review.textArea;
        const username = review.username;
        const recipeName = review.recipeName;
        const recipeImg = review.recipeImg;
        const userId = review.userId;
        reviewService.createReviewForRecipe(recipeId, textArea, username, recipeName, recipeImg, userId)
            .then(review => res.json(review));
    }

    const findReviewById = (req, res) => {
        const reviewId = req.params['reviewId']
        reviewService.findReviewById(reviewId)
            .then(review => {
                res.json(review)
            })
    }

    const deleteReview = (req, res) => {
        const recipeId = req.params["recipeId"];
        const reviewId = req.params["reviewId"];
        reviewService.deleteReview(recipeId, reviewId)
            .then(review => res.json(review));
    }

    const findReviewsByUsername = (req, res) => {
        const username = req.params["username"];
        reviewService.findReviewsByUsername(username)
            .then(reviews => res.json(reviews))
    }

    app.get("/api/reviews", findAllReviews)
    app.get("/api/reviews/:recipeId", findReviewsByRecipe)
    app.post("/api/reviews/:recipeId", createReviewForRecipe)
    app.get('/api/internal/reviews/:reviewId', findReviewById)
    app.get("/api/reviews/username/:username", findReviewsByUsername)
    app.delete("/api/reviews/:recipeId/:reviewId", deleteReview)
}

