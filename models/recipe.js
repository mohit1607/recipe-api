const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    createdBy: {
        type: String,
        require: true
    },
    description: {
        type: String,
        maxlength: 500,
    },
    ingredients: {
        type:String,
        maxlength: 200,
    },
    imageUrl: {
        type: String,
    },
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;