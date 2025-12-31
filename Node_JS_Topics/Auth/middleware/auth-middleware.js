require("dotenv").config();
const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Access deined, Please login to continue.",
    });
  }

  // decode the token
  try {
    const decodedInfo = jwt.verify(token, process.env.JSON_SECRET_KEY);
    console.log(decodedInfo)
    req.userInfo = decodedInfo;
    next();
  } catch(error) {
     res.status(500).json({
      success: false,
      message: "Token has expired"
    });
  }
};

module.exports = authMiddleware;
