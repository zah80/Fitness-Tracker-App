const User = require('../models/users');

exports.signup = (req, res) => {
    const { username, email, password } = req.body;

    User.findByUsername(username, (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        if (results.length > 0) {
            return res.status(400).send('User already exists');
        }

        User.createUser(username, email, password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }

            res.send('Sign-up successful');
        });
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    User.findByUsername(username, (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        if (results.length === 0 || results[0].password !== password) {
            return res.status(401).send('Invalid username or password');
        }

        res.send('Login successful');
    });
};
