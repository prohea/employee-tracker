// Dependencies
const inquirer = require("inquirer");
const db = require("./db/connection");

//Setup Database connection
db.connect(function (err) {
	if (err) throw err;
	console.log("Connected to database.");
	questions();
});

questions();
