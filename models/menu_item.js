const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please provide image url"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide price"],
  },
  category: {
    type: String,
    required: [true, "Please provide category of the menu item"],
    enum: {
      values: ["breakfast", "dinner", "salad"],
      message: "${VALUE} is not supported",
    },
  },
  blurHash: {
    type: String,
    required: [true, "Please provide blur hash for the menu item image"],
  },
});

module.exports = mongoose.model("menuItem", MenuItemSchema)
