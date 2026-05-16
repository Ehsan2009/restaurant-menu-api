const MenuItem = require("../models/menu_item");
const Category = require("../models/category");
const { StatusCodes } = require("http-status-codes");

const getAllCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(StatusCodes.OK).json({ categories, count: categories.length });
};

const createMenuItem = async (req, res) => {
  const menuItem = req.body;
  const category = await Category.findOne({ name: menuItem.category });

  if (!category) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "this category does't exist" });
  }

  // updating related category
  await Category.findOneAndUpdate(
    { name: menuItem.category },
    { categoryItems: [...category.categoryItems, menuItem] },
  );

  res.status(StatusCodes.CREATED).json({ menuItem });
};

const createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(StatusCodes.CREATED).json({ category });
};

module.exports = { getAllCategories, createCategory, createMenuItem };
