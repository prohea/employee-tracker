--Enables creation of a new DB and attempts to drop DB if it exists
DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

--Dropping tables for clean slate
DROP TABLE IF EXISTS department;

DROP TABLE IF EXISTS roles;

DROP TABLE IF EXISTS employee;

--Create table for department, roles, and employess
CREATE TABLE department(
    id INTEGER(11) AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY
    );

CREATE TABLE roles(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    depart_id INT(11),
    PRIMARY KEY,
        FOREIGN KEY (depart_id)
        REFERENCES department(id)
    );
    
  CREATE TABLE employee(
    id INTEGER(30) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(11),
    manager_id INTEGER(11),
    PRIMARY KEY,
        FOREIGN KEY(role_id)
        REFERENCES roles(id),
        FOREIGN KEY (mgr_id) REFERENCES roles(id)
    );