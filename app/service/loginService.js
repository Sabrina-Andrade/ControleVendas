const db = require("../../config/database.js")

var loginService = {
	auth: function(username, password, callback) {
		db.query("SELECT * FROM users WHERE username=? AND password=?", [username, password], function(err, rows, fields) {
			if (err) throw err
			callback(rows[0]);
		})
	}
}

module.exports = loginService