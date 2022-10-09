DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE department(
    department_id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(department_id)
    );

CREATE TABLE role(
    role_id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY(role_id),
        FOREIGN KEY (department_id)
        REFERENCES department(department_id)
    );
    
  CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NULL,
    manager_id INTEGER NULL,
    PRIMARY KEY(id),
        FOREIGN KEY(role_id)
        REFERENCES role(role_id),
    );

