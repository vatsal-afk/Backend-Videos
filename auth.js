const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, 'randomstr');
    req.user = decoded;
  } 
  catch (err) {
    return res.send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
