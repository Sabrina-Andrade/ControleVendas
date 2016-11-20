"use strict"

const express = require("express")
const router = express.Router()
const loginService = require("../service/loginService")

router.post("/auth", function(req, res) {
	let username = req.body.username
    let password = req.body.password
	loginService.auth(username, password, function callback(user){
		if (user) {
			res.send(user)
		} else {
			res.status(404)
			   .send("user_not_found")
		}
	})
})

module.exports = router