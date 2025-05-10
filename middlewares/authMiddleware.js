const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.cookies.token;

    console.log("token", token)
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      next();
    } catch (err) {
      console.error("JWT verification failed:", err);
      res.status(401).json({ message: 'Token is not valid' });
    }
  };