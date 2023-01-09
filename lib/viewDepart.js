const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
//CRUD Functions
//Create

function viewDepart() {
	console.log("View Employee Department");
	connection.query("SELECT * FROM department", function (err, res) {
		if (err) throw err;

		const myDep = res.map(function (dep) {
			return {
				name: dep.name,
				value: dep.id,
			};
		});

		inquirer
			.prompt([
				{
					type: "list",
					name: "department",
					message: "Select a department to view its employees:",
					choices: myDep,
				},
			])
			.then(function (data) {
				connection.query(
					"SELECT eleft.first_name, eleft.last_name, title, name as department, salary, CONCAT(eright.first_name, ' ', eright.last_name) AS manager FROM employee as eLeft LEFT JOIN role ON eleft.role_id = role.id LEFT JOIN department ON role.depart_id = department.id RIGHT JOIN employee eright ON eleft.manager_id = eright.id WHERE department.id=" +
						data.department +
						"",
					function (err, res) {
						if (err) throw err;
						console.table(
							"-----------------------------",
							"All Employees in the " +
								myDep[data.department - 1].name +
								" department: ",
							"-----------------------------",
							res
						);
						questions();
					}
				);
			});
	});
}

module.exports = viewDepart();
