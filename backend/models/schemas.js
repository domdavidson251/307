const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    stars: Number,
    review: String,
    date: String,
    author: String,
    upvotes: Number,
    downvotes: Number,
    menuitem: {type: mongoose.Types.ObjectId, ref: 'MenuItem'},
    restaurant: {type: mongoose.Types.ObjectId, ref: 'Restaurant'}
}, {collection : 'ratings_list'});

const MenuItemSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: String,
    price: Number,
    description: String,
    restaurant: {type: mongoose.Types.ObjectId, ref: 'Restaurant'},
    ratings: [{type: mongoose.Types.ObjectId, ref: 'Rating'}]
}, {colection : 'menuitems_list'});

const RestaurantSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    location: String,
    category: String,
    image: String,
    ratings: [{type: mongoose.Types.ObjectId, ref: 'Rating'}],
    menuitems: [{type: mongoose.Types.ObjectId, ref: 'MenuItem'}]
}, {collection : 'restaurants_list'});

const rating = mongoose.model('Rating', RatingSchema);
const menuitem = mongoose.model('Menu Item', MenuItemSchema);
const restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = RestaurantSchema;
module.exports = MenuItemSchema;
module.exports = RatingSchema;