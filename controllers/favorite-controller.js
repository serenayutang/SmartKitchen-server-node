module.exports = (app) => {
    const favoriteService = require('../services/favorite-service');

    const isFavorite = (req, res) => {
        const userId = req.params.userId;
        const recipeId = req.params.recipeId;
        favoriteService.isFavorite(userId, recipeId).then(count => {
            if (count <= 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        });
    }
    
    const findFavoritesByUserId = (req, res) => {
        const userId = req.params.userId;
        favoriteService.findFavoritesByUserId(userId)
            .then(favorites => res.json(favorites));
    }

    const addFavorite = (req, res) => {
        const userId = req.body.userId;
        const recipeId = req.body.recipeId;
        const username = req.body.username;
        const recipeName = req.body.recipeName;
        const recipeImg = req.body.recipeImg;
        favoriteService.addFavorite(userId, recipeId, username, recipeName, recipeImg)
            .then(favorite => res.json(favorite));
    }

    const removeFavorite = (req, res) => {
        const userId = req.body.userId;
        const recipeId = req.body.recipeId;
        favoriteService.removeFavorite(userId, recipeId)
            .then(favorite => res.json(favorite));
    }

    app.get('/api/favorite/:recipeId/:userId', isFavorite);
    app.get('/api/favorite/:userId', findFavoritesByUserId);
    app.post('/api/favorite', addFavorite);
    app.delete('/api/favorite', removeFavorite);
}
