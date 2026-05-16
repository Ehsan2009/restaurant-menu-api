const mongoose = require("mongoose");
const MenuItem = require("./menu_item");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  iconUrl: {
    type: String,
    required: [true, "Please provide category icon url"],
  },
  categoryItems: {
    type: [MenuItem.schema],
    required: [true, "Please provide category items"],
  },
});

module.exports = mongoose.model("Category", CategorySchema);
