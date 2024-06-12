// controllers/authController.js
const User = require('../models/users');

// Sample database
const users = [];

exports.signup = (req, res) => {
    const { username, password } = req.body;
    // Check if user already exists
    if (users.some(user => user.username === username)) {
        return res.status(400).send('User already exists');
    }
    // Create new user
    const newUser = new User(username, password);
    users.push(newUser);
    res.send('Sign-up successful');
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    // Find user in database
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(401).send('Invalid username or password');
    }
    res.send('Login successful');
};
