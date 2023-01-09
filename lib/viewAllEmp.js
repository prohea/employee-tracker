const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
const cTable = require("console.table");
const { questions } = require("./question");
//CRUD Functions
//Create

function viewAllEmp() {
	console.log("View All Employees");
	connection.query("SELECT * FROM employee", function (err, res) {
		if (err) throw err;
		console.table(res);
		questions();
	});
}

module.exports = viewAllEmp();
