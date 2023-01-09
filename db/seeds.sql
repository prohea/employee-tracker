DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE department(
    department_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY Key(id)
    );

CREATE TABLE role(
    role_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(8,2) NOT NULL,
    department_id INT(11) NULL,
    PRIMARY Key(id),
        FOREIGN KEY (depart_id)
        REFERENCES department(id)
    );
    
  CREATE TABLE employee(
    id INTEGER(30) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(11) NULL,
    manager_id INTEGER(11) NULL,
    PRIMARY Key(id),
        FOREIGN KEY(role_id)
        REFERENCES role(id),
    );

