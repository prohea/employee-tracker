
USE employeeTracker_db;

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

SELECT * FROM employeeTracker_db.department;
SELECT * FROM employeeTracker_db.employee;
SELECT * FROM employeeTracker_db.role;