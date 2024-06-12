// models/user.js
const db = require('../db/index');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static getById(user_id, callback) {
        return db.query('SELECT * FROM users WHERE user_id = ?', [user_id], callback);
    }
}

module.exports = User;
