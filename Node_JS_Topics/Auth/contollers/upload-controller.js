const Image = require("../models/Image");
const uploadToCloudinary = require("../helpers/cloudinaryHelper");

const uploadImageController = async (req, res) => {
  try {
    // check if file is missing in req object
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "File is required, Please upload an image",
      });
    }

    // upload to cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path);

    // store the image url and public id along with uploaded user id
    const newImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    });

    await newImage.save();
    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      image: newImage
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadImageController
};
