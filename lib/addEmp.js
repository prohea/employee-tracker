function addEmp() {
	// Prompt to add an employee
	inquirer
		.prompt([
			{
				name: "first_name",
				type: "input",
				message: "What is the employee first name?",
			},
			{
				name: "last_name",
				type: "input",
				message: "What is the employee last name?",
			},
			{
				name: "role",
				type: "list",
				message: "What is the employee role?",
				choices: [
					"Sales Lead",
					"Salesperson",
					"Lead Engineer",
					"Software Engineer",
					" Account Manager",
					"Accountant",
					"Legal Team",
					"Lawyer",
				],
			},
			{
				name: "manager",
				type: "list",
				message: "What is the employee manager?",
				choices: [
					"Sales Lead",
					"Salesperson",
					"Lead Engineer",
					"Software Engineer",
					" Account Manager",
					"Accountant",
					"Legal Team",
					"Lawyer",
				],
			},
		])
		.then((answer) => {
			// Insert the new employee information to the employee table
			connection.query(
				"INSERT INTO employee SET ?",
				{
					first_name: answer.first_name,
				},
				{
					last_name: answer.last_name,
				},
				(err) => {
					if (err) throw err;
					console.log("New employee was added successfully!");
					// Asks the user if they would like to do anything else
					questions();
				}
			);
		});
}

export default addEmp;
