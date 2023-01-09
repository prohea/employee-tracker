// Dependencies
const inquirer = require("inquirer");
const db = require("./connection");
const mysql2 = require("mysql2");

const connection = mysql2.createConnection(
	{
		host: "localhost",

		user: "root",

		password: "",

		database: "employeeTracker_db",
	},
	console.log(`Connected to database.`)
);

const cTable = require("console.table");
