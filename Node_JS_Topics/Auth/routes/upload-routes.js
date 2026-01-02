const express = require("express");
const { uploadImageController } = require("../contollers/upload-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const uploadMiddleware = require("../middleware/upload-middleware")

const router = express.Router();

router.post("/upload", authMiddleware, adminMiddleware, uploadMiddleware.single("image"), uploadImageController)

module.exports = router;