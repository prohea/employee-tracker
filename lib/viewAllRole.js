const { default: inquirer } = require("inquirer");
const { db } = require("../db/connection");
const cTable = require("console.table");
//CRUD Functions
//Create

function viewAllRole() {
	// View Roles
	db.query("SELECT * FROM roles", function (err, res) {
		if (err) throw err;
		console.table(res);
		questions();
	});
}

module.exports = viewAllRole();
