const { default: inquirer } = require("inquirer");
const { db } = require("../db/connection");
//CRUD Functions
//Create

function removeEmp() {
	console.log("Remove Employee");
	console.log("---------------");
};

module.exports = removeEmp();
