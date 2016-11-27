const db = require("../../config/database.js")

var reportService = {
	filterByDate: function(initialDate, finalDate, callback) {
		db.query("SELECT product, sum(quantity) AS productQuantity FROM sales WHERE sale_date BETWEEN ? AND ? GROUP BY product", 
			[initialDate, finalDate], function(err, rows) {

			if (err) throw err
			callback(rows)
		})
	}
}

module.exports = reportService