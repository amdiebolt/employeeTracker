DROP DATABASE IF EXISTS team_db;
CREATE DATABASE team_db;

USE team_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
    CONSTRAINT fk_department
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR(30),
    role_salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    CONSTRAINT fk_roles
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_title VARCHAR(30)
    FOREIGN KEY (role_title)
    REFERENCES roles(id)
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id),
    INDEX role_ind (role_id),
    manager_id INT ,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    
);