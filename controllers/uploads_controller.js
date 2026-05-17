const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const {StatusCodes} = require("http-status-codes")

const uploadImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "restaurant-menu-images",
    },
  );

  fs.unlinkSync(req.files.image.tempFilePath)

  return res.status(StatusCodes.OK).json({image: {src: result.secure_url}})
};

module.exports = { uploadImage };
