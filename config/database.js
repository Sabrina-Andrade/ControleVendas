var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : process.env.OPENSHIFT_MYSQL_DB_HOST,
    user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
    password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
    database : 'controle_vendas'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;