INSERT INTO 
    department (names) 
VALUES 
    ("Sales"),
    ("Finance"),
    ("Engineering"),
    ("Legal"),
    ("Management");

INSERT INTO 
    roles (title, salary, depart_id) 
VALUES 
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 2),
    ("Lead Engineer", 150000, 3),
    ("Software Engineer", 12000, 4),
    ("Account Manager", 16000, 5),
    ("Accountant", 125000, 6),
    ("Legal Team Lead", 250000, 7),
    ("Lawyer", 190000, 8);

INSERT INTO 
    employee (first_name, last_name, role_id, mgr_id) 
VALUES 
    ("John", "Doe", 1, NULL),
    ("Mike", "Chan", 2, 1),
    ("Ashley", "Rodriguez", 3, NULL),
    ("Kevin", "Tupic", 4, 3),
    ("Kunal", "Sing", 5, NULL),
    ("Malia", "Brown", 6, 5),
    ("Sarah", "Lourd", 7, NULL),
    ("Tom", "Allen", 8, 7);

