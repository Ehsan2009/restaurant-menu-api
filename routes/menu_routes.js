const express = require("express");
const router = express.Router();

const {
  createCategory,
  createMenuItem,
  getAllCategories,
} = require("../controllers/menu_controller");
const { uploadMenuItemImage } = require("../controllers/uploads_controller");

router.route("/menu-item").post(createMenuItem);
router.route("/category").get(getAllCategories).post(createCategory);
router.route("/uploads").post(uploadMenuItemImage);

module.exports = router;
