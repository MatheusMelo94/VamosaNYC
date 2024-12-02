const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');  // Remove 'Bearer ' prefix

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.MYSECRET);
        req.user = decoded;  // Attach decoded user info to the request object (e.g., user id)
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyToken;
