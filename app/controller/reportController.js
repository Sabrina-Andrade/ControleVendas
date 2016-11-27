"use strict"

const express = require("express")
const router = express.Router()
const reportService = require("../service/reportService")

router.get("/", function(req, res) {
    let initialDate = req.query.initial
    let finalDate = req.query.final
	reportService.filterByDate(initialDate, finalDate, function callback (report) {		
		res.send(report)
	})
})

module.exports = router