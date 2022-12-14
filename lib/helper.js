const { connection } = require("../db/connection");

//create array of departments for i to pull
const departArrFill = () => {
	const deptArr = [];

	connection.query(`SELECT * FROM department`, (err, rows) => {
		if (err) {
			console.log(err);
			return;
		}
		for (let i = 0; i < rows.length; i++) {
			deptArr.push({ name: rows[i].name, value: rows[i].id });
		}
	});
	return deptArr;
};

//newDept is added to departments
const newDept = (obj) => {
	const sql = `INSERT INTO department (names) VALUES ('${obj.name}')`;

	connection.query(sql, (err, res) => {
		if (err) throw err;
		return;
	});
};

//show all departments
const getDepart = () => {
	const departments = [];

	connection.query(`SELECT * FROM department`, (err, rows) => {
		if (err) {
			console.log(err);
			return;
		}
		for (let i = 0; i < rows.length; i++) {
			departments.push(rows[i]);
		}
	});
	return departments;
};

//array to get employees
const employeeArrFill = () => {
	const employeeArr = [];

	connection.query(`SELECT * FROM employee ORDER by last_name`, (err, rows) => {
		if (err) {
			console.log(err);
			return;
		}
		for (let i = 0; i < rows.length; i++) {
			employeeArr.push({
				name: rows[i].first_name + " " + rows[i].last_name,
				value: rows[i].id,
			});
		}
	});
	return employeeArr;
};

const roleArrFill = () => {
	const roleArr = [];

	connection.query(`SELECT * FROM roles`, (err, rows) => {
		if (err) {
			console.log(err);
			return;
		}
		for (let i = 0; i < rows.length; i++) {
			roleArr.push({ name: rows[i].title, value: rows[i].id });
		}
	});
	return roleArr;
};

//update roles
const updateRole = (obj) => {
	const sql = `UPDATE employee SET role_id = ? WHERE id= ?`;
	const params = [obj.newRole, obj.employee];

	connection.query(sql, params, (err, res) => {
		if (err) throw err;
		return;
	});
};

//get all employees
const getEmployees = () => {
	const employees = [];

	connection.query(
		`SELECT e.id, e.first_name, e.last_name, roles.title AS job_title, roles.salary AS salary, department.names AS department, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e
    LEFT JOIN roles ON role_id = roles.id
    LEFT JOIN department ON roles.department_id = department.id
    LEFT JOIN employee ON e.manager_id = m.id`,
		(err, rows) => {
			if (err) {
				console.log(err);
				return;
			}
			for (let i = 0; i < rows.length; i++) {
				employees.push(rows[i]);
			}
		}
	);
	return employees;
};

module.exports = {
	getDepart,
	newDept,
	departArrFill,
	employeeArrFill,
	roleArrFill,
	updateRole,
	getEmployees,
};
