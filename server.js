var express = require('express')
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.redirect('/index.html')
})

app.post('/auth', function(req, res) {
	LoginService = require('./app/LoginService')
	let username = req.body.username
    let password = req.body.password
	LoginService.auth(username, password, function callback(user){
		if (user) {
			res.send(user)
		} else {
			res.status(404)
			   .send('user_not_found')
		}
	})
})

var server = app.listen(3030, function () {
    console.log('Server started')
})