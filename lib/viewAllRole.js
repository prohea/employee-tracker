const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
//CRUD Functions
//Create

function viewAllRole() {
	// View Roles
	connection.query(
		"SELECT role.id, title, salary, name as department FROM role LEFT JOIN department ON role.depart_id = department.id",
		function (err, res) {
			if (err) throw err;
			console.table(
				"-----------------------------",
				"All Roles:",
				"-----------------------------",
				res
			);
			questions();
		});
}

module.exports = viewAllRole();
