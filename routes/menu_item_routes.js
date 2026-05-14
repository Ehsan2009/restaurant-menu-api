const express = require("express");
const router = express.Router();

const {
  getAllMenuItems,
  createMenuItem,
} = require("../controllers/menu_item_controller");
const { uploadMenuItemImage } = require("../controllers/uploads_controller");

router.route("/").get(getAllMenuItems).post(createMenuItem);
router.route("/uploads").post(uploadMenuItemImage);

module.exports = router;
