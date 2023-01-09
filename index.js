// Dependencies
const inquirer = require("inquirer");
const connection = require("./db/connection");
const cTable = require("console.table");

//Setup Database connection
connection.connect(function (err) {
	if (err) throw err;
	console.log("User connected to tracker as id: " + connection.threadId + "\n");
	questions();
});

questions();
