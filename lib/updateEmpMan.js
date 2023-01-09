function updateEmployeeManagers() {
	// UPDATE statement using mysql, placeholders and objects
	connection.query(
		"UPDATE employee SET ? WHERE ?",
		[
			{
				// Updating: multiple keys/values are fine
				manager_id: 1,
			},
			{
				// The record/row we are updating
				id: 2,
			},
		],
		(err, res) => {
			if (err) throw err;
			console.log(`${res.affectedRows} Employee manager updated\n`);
			questions();
		}
	);
}

export default updateEmployeeManagers;
