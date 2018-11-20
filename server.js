const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.env.PASSWORD,
	database: 'contacts'
})

con.connect(err => {
	if (err) throw err
})

con.query('CREATE TABLE IF NOT EXISTS mycontacts (id INT AUTO_INCREMENT PRIMARY KEY, fname CHAR(32), lname CHAR(32), number CHAR(32), email CHAR(50))', (err, result) => {
	if (err) throw err
	console.log('Table Created!')
})

let data = []

app.get('/api/data', (req, res) => {
	con.query('SELECT * FROM mycontacts ORDER BY lname', (err, result) => {
		if (err) throw err
		data = result
		res.json(data)
	})
})

app.post('/api/data/delete', (req, res) => {
	console.log(req.body)
	con.query(`DELETE FROM mycontacts WHERE id=${req.body.id}`, (err, result) => {
		if (err) throw err
		const del = data.find(contact => {
			return contact.id === req.body.id
		})
		const index = data.indexOf(del)
		data.splice(index, 1)
		res.json(data)
	})
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
