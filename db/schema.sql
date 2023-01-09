USE employeeTracker_db

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Management");

INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 80000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Engineer", 150000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Software Engineer", 12000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Account Manager", 16000, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Accountant", 125000, 6);
INSERT INTO role (title, salary, department_id) VALUES ("Legal Team Lead", 250000, 7);
INSERT INTO role (title, salary, department_id) VALUES ("Lawyer", 190000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ("John", "Doe", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ("Mike", "Chan", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ("Ashley", "Rodriguez", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ("Kevin", "Tupic", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ("Kunal", "Sing", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ("Malia", "Brown", 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ("Sarah", "Lourd", 7, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES ("Tom", "Allen", 8, 7);

UPDATE employee SET manager_id=3 WHERE id=1;
UPDATE employee SET manager_id=1 WHERE id=2;
UPDATE employee SET manager_id=9 WHERE id=3;
UPDATE employee SET manager_id=3 WHERE id=4;
UPDATE employee SET manager_id=9 WHERE id=5;
UPDATE employee SET manager_id=2 WHERE id=6;
UPDATE employee SET manager_id=9 WHERE id=7;
UPDATE employee SET manager_id=7 WHERE id=8;
UPDATE employee SET manager_id=9 WHERE id=10;