const MenuItem = require("../models/menu_item");
const Category = require("../models/category");
const { StatusCodes } = require("http-status-codes");

const getAllCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(StatusCodes.OK).json({ categories, count: categories.length });
};

const createMenuItem = async (req, res) => {
  const menuItem = await MenuItem.create(req.body);
  res.status(StatusCodes.CREATED).json({ menuItem });
};

const createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(StatusCodes.CREATED).json({ category });
};

module.exports = { getAllCategories, createCategory, createMenuItem };
