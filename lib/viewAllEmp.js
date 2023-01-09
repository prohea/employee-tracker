const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
//CRUD Functions
//Create

function viewAllEmp() {
	console.log("View All Employees");
	connection.query(
		"SELECT eleft.first_name, eleft.last_name, title, name as department, salary, CONCAT(eright.first_name, ' ', eright.last_name) AS manager FROM employee as eLeft JOIN role ON eleft.role_id = role.id LEFT JOIN department ON role.depart_id LEFT JOIN employee eright ON eleft.mgr_id = eright.id",
		function (err, res) {
			if (err) throw err;
			console.table(
				"-----------------------------",
				"All Employees:",
				"-----------------------------",
				res
			);
			questions();
		});
}

module.exports = viewAllEmp();
