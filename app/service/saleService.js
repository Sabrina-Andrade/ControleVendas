const db = require("../../config/database.js")

var saleService = {
	getAll: function(callback) {
		db.query("SELECT * , (sum(quantity) * unitary) AS total FROM sales GROUP BY id ORDER BY client", function(err, rows) {
			if (err) throw err
			callback(rows);
		})
	},

    getById: function(id, callback) {
		db.query("SELECT * FROM sales WHERE id = ?", id, function(err, rows) {
			if (err) throw err
			callback(rows[0]);
		})
	},

    save: function(sale, callback) {
        sale.id = 0
		db.query("INSERT INTO sales SET ?", sale, function(err, rows) {
			if (err) throw err
            callback(rows.insertId)
		})
	},

    update: function(sale, callback) {
		if (sale.sale_date) delete sale.sale_date
        if (sale.total) delete sale.total
		db.query("UPDATE sales SET ? WHERE id = ?", [sale, sale.id], function(err, rows) {
			if (err) throw err
            callback(rows.insertId)
		})
	},

	delete: function(saleId, callback) {
		db.query("DELETE FROM sales WHERE id = ?", saleId, function(err, result) {
			if (err) throw err
            callback(result.affectedRows)
		})
	}

}

module.exports = saleService