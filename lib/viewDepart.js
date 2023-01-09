const { default: inquirer } = require("inquirer");
const { db } = require("../db/connection");
const cTable = require("console.table");
//CRUD Functions
//Create

function viewDepart() {
	console.log("View Employee Department");
	db.query("SELECT * FROM department", function (err, res) {
		if (err) throw err;
		console.table(res);
		questions();
	});
}

module.exports = viewDepart();
