SELECT department.department_name
FROM department
LEFT JOIN employee
ON employee.employee.id = department.department_id
