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

connection.end()

const express = require('express')
const app = express()
const port = 5000;

app.get('/', function (_, res) {
	const connection = mysql.createConnection(config)
	connection.query(`SELECT * FROM names`, async function(err, qRes, _) {
		var msg = '<h1>Full Cycle Rocks!<h1>';
		if (err) console.log(err);
		else {
			msg += '<h2>DB Entry #0 - id: ' + qRes[0].id + '; name: ' + qRes[0].name + '<h2>';
			msg += '<h2>DB Entry #1 - id: ' + qRes[1].id + '; name: ' + qRes[1].name + '<h2>';
		}
		res.send(msg)
	});
	connection.end()
});

app.listen(port, () => {
	console.log("Node.js server running on port " + port)
});
