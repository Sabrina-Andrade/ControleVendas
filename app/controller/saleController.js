"use strict"

const express = require("express")
const router = express.Router()
const saleService = require("../service/saleService")

router.get("/", function(req, res) {
	saleService.getAll(function callback (sales) {		
		res.send(sales)
	})
})

router.post("/new", function(req, res) {
	saleService.save(req.body, function callback (insertId) {		
		res.send({insertedId: insertId})
	})
})

router.put('/edit', function (req, res) {
	saleService.update(req.body, function callback (insertId) {		
		res.send({insertedId: insertId})
	})
});

router.get("/edit/:id", function(req, res) {
	saleService.getById(req.params.id, function callback (sale) {		
		if (sale) {
			res.send(sale)
		} else {
			res.status(404)
			   .send("sale_not_found")
		}
	})
})

router.delete("/delete/:id", function(req, res) {
	saleService.delete(req.params.id, function callback (deletedId) {		
		res.send({deletedId: deletedId})
	})
})

module.exports = router