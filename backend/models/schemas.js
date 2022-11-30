const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
    stars: Number,
    review: String,
    date: Date,
    author: String,
    upvotes: Number,
    downvotes: Number,
    menuitem: { type: mongoose.Types.ObjectId, ref: "MenuItem" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "Restaurant" },
  },
  { collection: "reviews_list" }
);

const MenuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: String,
    price: Number,
    description: String,
    restaurant: { type: mongoose.Types.ObjectId, ref: "Restaurant" },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  },
  { collection: "menuitems_list" }
);
const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    location: String,
    category: String,
    image: String,
    avg_rating: Number,
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    menuitems: [{ type: mongoose.Types.ObjectId, ref: "MenuItem" }],
  },
  { collection: "restaurants_list" }
);

const rating = mongoose.model("Review", ReviewSchema);
const menuitem = mongoose.model("MenuItem", MenuItemSchema);
const restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  RestaurantSchema: RestaurantSchema,
  MenuItemSchema: MenuItemSchema,
  ReviewSchema: ReviewSchema,
};
