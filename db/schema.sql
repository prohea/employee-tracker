DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
    );

    CREATE TABLE role(
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    PRIMARY KEY(id),
        FOREIGN KEY (department_id)
        REFERENCES department(id)
    );
    
    CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(11) NULL,
    manager_id INTEGER(11) NULL,
    PRIMARY KEY(id),
        FOREIGN KEY(role_id)
        REFERENCES role(id),
        FOREIGN KEY(manager_id)
        REFERENCES employee(id)
    );

    USE employees;
    INSERT INTO department (name)
    VALUES
      ('Sales'),
      ('Engineering'),
      ('Finance'),
      ('Legal');
INSERT INTO role 
  (title, salary, department_id)
VALUES 
  ('Sales Lead, 100000, 1'),
  ('Salesperson, 80000, 2'),
  ('Lead Engineer, 150000, 3'),
  ('Software Engineer, 12000, 4'),
  ('Account Manager, 16000, 5'),
  ('Accountant, 125000, 6'),
  ('Legal Team Lead, 250000, 7'),
  ('Lawyer, 190000, 8');
  INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
  VALUES 
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupic', 4, 3),
    ('Kunal', 'Sing', 5, NULL),
    ('Malia', 'Brown', 6, 5),
    ('Sarah', 'Lourd', 7, NULL),
    ('Tom', 'Allen', 8, 7);