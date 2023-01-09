const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
const viewAllEmp = require("./viewAllEmp");
//CRUD Functions
//Create

function updateRole() {
	console.log("Update Role");
	connection.query(
		"SELECT id, CONCAT(first_name, ' ', last_name) AS emp FROM employee",
		function (err, res) {
			if (err) throw err;

			const empUpdate = res.map(function (empData) {
				return {
					name: empData.emp,
					value: empData.id,
				};
			});
			inquirer
				.prompt([
					{
						type: "list",
						name: "employee",
						message: "Which employee's role would you like to change?",
						choices: empUpdate,
					},
				])
				.then(function (data) {
					const empUpdate = data.employee;
					connection.query("SELECT * FROM role", function (err, res) {
						if (err) throw err;

						const myRole = res.map(function (roles) {
							return {
								name: roles.title,
								value: roles.id,
							};
						});

						inquirer
							.prompt([
								{
									type: "list",
									name: "roles",
									message: "Select a role:",
									choices: myRole,
								},
							])
							.then(function (data) {
								connection.query(
									"UPDATE employee SET role_id= " +
										data.roles +
										" WHERE id=" +
										empUpdate +
										"",
									function (err, res) {
										if (err) throw err;
										viewAllEmp();
									}
								);
							});
					});
				});
		}
	);
}

module.exports = updateRole;
