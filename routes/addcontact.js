const express = require('express')
const router = express.Router()
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

router.get('/', (req, res, next) => {
	res.render('addcontact', {})
})

router.post('/', (req, res, next) => {
	const sql = `INSERT INTO mycontacts (name, number) VALUES ("${req.body.name}", "${req.body.number}")`
	con.query(sql, (err, result) => {
		if (err) throw err
		res.render('addcontact', {})
	})
})

module.exports = router
