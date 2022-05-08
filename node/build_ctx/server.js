const mysql = require('mysql2')

const config = {
	host: 'msql_db',
	user: 'root',
	password: 'r0Ot',
	database: 'db0'
};
const connection = mysql.createConnection(config)

connection.query(`CREATE TABLE IF NOT EXISTS names (id int unique primary key, name VARCHAR(255))`, 
	function (err, res) {
		if (err) throw err;
		console.log("Table created successfully or already exists")
})

const sql = `INSERT IGNORE INTO names(id, name) values (0, 'Artic Fox'), (1, 'Bengal Fox')`

connection.query(sql, function (err, res) {
	if (err) throw err;
})

var qResults;

connection.query(`SELECT * FROM names`, function(err, res, _) {
	if (err) throw err;
	qResults = res;
});

connection.end()

const express = require('express')
const app = express()
const port = 5000;

app.get('/', function (req, res) {
	var msg = '<h1>Full Cycle Rocks!<h1>';
	msg += '<h2>DB Entry #0 - id: ' + qResults[0].id + '; name: ' + qResults[0].name + '<h2>';
	msg += '<h2>DB Entry #1 - id: ' + qResults[1].id + '; name: ' + qResults[1].name + '<h2>';
    res.send(msg)
});

app.listen(port, () => {
	console.log("Node.js server running on port " + port)
});
