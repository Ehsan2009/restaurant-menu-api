const MenuItem = require("../models/menu_item");
const { StatusCodes } = require("http-status-codes");

const getAllMenuItems = async (req, res) => {
  const menuItems = await MenuItem.find({});
  res.status(StatusCodes.OK).json({ menuItems, count: menuItems.length });
};

const createMenuItem = async (req, res) => {
  const menuItem = await MenuItem.create(req.body);
  res.status(StatusCodes.CREATED).json({ menuItem });
};

module.exports = { getAllMenuItems, createMenuItem };
