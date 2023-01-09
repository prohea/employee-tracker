function viewAllEmp() {
	// View Employees
	connection.query("SELECT * FROM role", (err, res) => {
		// Log the results of the SELECT statement
		if (err) throw err;
		console.table(res);
		// Ends connection
		questions();
	});
}

export default viewAllEmp;
