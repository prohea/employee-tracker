const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
const viewAllEmp = require("./viewAllEmp");
//CRUD Functions
//Create

function updateRole() {
	console.log("Update Role");
	inquirer
		.prompt([
			{
				type: "list",
				name: "employee",
				message: "Which employee's role would you like to change?",
				choices: empArr,
			},
			{
				type: "list",
				name: "newRole",
				message: "What is the employee's new role?",
				choices: roleArr,
			},
		])
		.then((ans) => {
			updateRole(ans);
			console.log("Role updated");
			employees = getEmployees();
			employeeArr = employeeArrFill();
			return questions();
		});
}

module.exports = updateRole;
