const getAllMenuItems = (req, res) => {
  res.send("the list of menu items");
};

const createMenuItem = (req, res) => {
   res.send("a menu item created");
};

module.exports = { getAllMenuItems, createMenuItem };
