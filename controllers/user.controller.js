const User = require('../models/user.model.js');
const jwt = require('jsonwebtoken');


const login = async (req, res) => {
    try {
        const { username, password } = req.body; // Assuming username and password are sent in the body

        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password!" });
        }

        // Create JWT token (sending only necessary data like user ID)
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.MYSECRET, { expiresIn: '1h' });

        // Send token in response
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: "Error during login process", error: error.message });
    }
};

const registerUser = async (req, res) => {

    try {
        const user = await User.create(req.body);
        res.status(200).json("User registered succefully!");
    } catch (error) {
        res.status(404).json({ message: message.error });
    }
}

module.exports = {
    registerUser,
    login
}