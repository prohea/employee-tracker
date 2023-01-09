const { default: inquirer } = require("inquirer");
const { connection } = require("../db/connection");
const { questions } = require("./question");
//CRUD Functions
//Create

function viewDepart() {
	console.log("View Employee Department");
	connection.query("SELECT * FROM department", function (err, res) {
		if (err) throw err;
		console.table(res);
		questions();
	});
}

module.exports = viewDepart();
