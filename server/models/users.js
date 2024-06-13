const db = require('../db/index');

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static getById(user_id, callback) {
        return db.query('SELECT * FROM users WHERE user_id = ?', [user_id], callback);
    }

    static findByUsername(username, callback) {
        return db.query('SELECT * FROM users WHERE username = ?', [username], callback);
    }

    static createUser(username, email, password, callback) {
        return db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], callback);
    }
}

module.exports = User;
