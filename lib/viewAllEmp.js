const { default: inquirer } = require("inquirer");
const { db} = require("../db/connection");
const cTable = require("console.table");
//CRUD Functions
//Create

function viewAllEmp() {
	console.log("View All Employees");
	db.query("SELECT * FROM employee", function (err, res) {
		if (err) throw err;
		console.table(res);
		questions();
	});
}

module.exports = viewAllEmp();
