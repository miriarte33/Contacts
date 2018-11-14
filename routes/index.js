var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
require('dotenv').config()

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


/* GET home page. */
router.get('/', function(req, res, next) {
	con.query('SELECT * FROM mycontacts ORDER BY name', (err, result) => {
		console.log(result)
		res.render('index', { 
			title: 'Contacts', 
			contacts: result
		});
	})
});

module.exports = router
