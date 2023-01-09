function addRole() {
	// Prompt to add the role
	inquirer
		.prompt([
			{
				name: "title",
				type: "input",
				message: "What is the name of your role?",
			},
			{
				name: "salary",
				type: "input",
				message: "What is the salary of the role?",
			},
			{
				name: "department",
				type: "list",
				message: "What is the department?",
				choices: ["1", "2", "3", "4"],
			},
		])
		.then((answer) => {
			// Insert the new information into the database
			connection.query(
				"INSERT INTO role SET ?",
				{
					title: answer.title,
					salary: answer.salery,
				},
				(err) => {
					if (err) throw err;
					console.log("New role was added successfully!");
					// Asks the user if they would like to do anything else
					questions();
				}
			);
		});
}

export default addRole();
