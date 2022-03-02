INSERT INTO department (department_name)
VALUES  ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO roles (department_id, role_title, role_salary)
VALUES  (1, 'Salesperson', 80000),
        (1, 'Sales Lead', 150000),
        (2, 'Junior Engineer', 80000),
        (2, 'Senior Engineer', 150000),
        (2, 'Director of Engineering', 500000),
        (3, 'Accountant', 100000),
        (3, 'Head of Accounting', 500000),
        (4, 'Lawyer', 150000),
        (4, 'Head of Legal', 500000);

INSERT INTO employee (role_id, first_name, last_name)
VALUES  (1, 'Jim', 'Halpert'),
        (1, 'Dwight', 'Schrute'),
        (2, 'Michael', 'Scott'),
        (3, 'Morty', 'Smith'),
        (4, 'Beth', 'Smith'),
        (5, 'Rick', 'Sanchez'),
        (6, 'Oscar', 'Martinez'),
        (7, 'Kevin', 'Malone'),
        (8, 'Hyper', 'Chicken'),
        (9, 'Harvey', 'Birdman');