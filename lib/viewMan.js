const { default: inquirer } = require("inquirer");
const { db } = require("../db/connection");
//CRUD Functions
//Create

function viewMgr() {
	console.log("View Employee Manager");
	console.log("------");
}

module.exports = viewMgr();
