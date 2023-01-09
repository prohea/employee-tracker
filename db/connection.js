const mysql = require("mysql2/promise");
require("dotenv").config();

//Database Connection
const db = mysql.createConnection(
	{
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PW,
		database: process.env.MYSQL_NAME,
	},
	console.log(`Connected to database.`)
);

db.connect(function (err) {
	if (err) throw err;
	console.log("Connection to db");
});

module.exports = db();
