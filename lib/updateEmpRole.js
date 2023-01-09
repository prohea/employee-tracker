function updateRole() {
	// UPDATE statement using mysql, placeholders and objects
	connection.query(
		"UPDATE employee SET ? WHERE ?",
		[
			// Updating: multiple keys/values are fine
			{
				role_id: 9,
			},
			{
				// The record/row we are updating
				id: 1,
			},
		],
		(err, res) => {
			if (err) throw err;
			console.log(`${res.affectedRows} Employee role updated\n`);
			questions();
		}
	);
}

export default updateRole;
