const mysql = require("mysql2/promise");
require("dotenv").config();

//Database Connection
const connection = mysql.createConnection(
	{
		host: process.env.MYSQL_HOST,

		user: process.env.MYSQL_USER,

		password: process.env.MYSQL_PW,

		database: process.env.MYSQL_NAME,
	},
	console.log(`Connected to database.`)
);

module.exports = connection();
