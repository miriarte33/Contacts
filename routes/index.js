var express = require('express');
var router = express.Router();
const mysql = require('mysql')
require('dotenv').config()

function createCon() {
	const con = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: process.env.PASSWORD,
		database: 'contacts' 
	})

	con.connect((err) => {
		if (err) throw err
	})

	con.query('CREATE TABLE IF NOT EXISTS mycontacts (name CHAR(32), number CHAR(32) PRIMARY KEY)', (err, result) => {
		if (err) throw err
		console.log('Table created')
	})

	return con
}

/* GET home page. */
router.get('/', function(req, res, next) {
	const con = createCon()
	con.query('SELECT * FROM mycontacts', (err, result) => {
		console.log(result)
		res.render('index', { 
			title: 'Contacts', 
			contacts: result
		});
	})
});

module.exports = router
