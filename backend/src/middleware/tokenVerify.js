const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  const token = req.header("your-auth-token");

  if (!token) return res.status(401).json({ err: { msg: ["Access Denied!"] } });

  try {
    const verified = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.userId = verified.id;

    next();
  } catch (error) {
    res.status(401).json({ err: { msg: ["Invalid Token!"] } });
  }
};

module.exports = verify;
