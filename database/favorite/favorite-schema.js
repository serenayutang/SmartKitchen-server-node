const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    username: String,
    recipeId: String,
    recipeName: String,
    recipeImg: String
}, {collection: 'favorite'});

module.exports = favoriteSchema;