const inquirer = require('inquirer');
const mysql = require('mysql2')


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ThisIsMySQLPassword1!',
        database: 'team_db'
    },
);

function firstAction() {
    const questions = [
        {
            type: 'list',
            name: 'firstaction',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role',]
        }
    ]
    inquirer.prompt(questions).then((answers) => {
        if (answers.firstaction === 'View all departments') {
            vDepartments()
        }
        if (answers.firstaction === 'View all roles') {
            vRoles()
        }
        if (answers.firstaction === 'View all employees') {
            vEmployees()

        }
        if (answers.firstaction === 'Add a department') {
            addDepartment()

        }
        if (answers.firstaction === 'Add a role') {
            addRole()

        }
        if (answers.firstaction === 'Add an employee') {
            addEmployee()

        }
        if (answers.firstaction === 'Update an employee role') {
            updateRole()

        }
    })
}


function vDepartments() {
    db.query(`SELECT * FROM team_db.department`, (err, res) => {
        if (err) throw err
        console.table(res)
        firstAction()
    })
}

function vRoles(){
    db.query(`SELECT * FROM team_db.roles`, (err, res) =>{
        if(err) throw err
        console.table(res)
        firstAction()
    })
}

function vEmployees(){
    db.query(`SELECT department.department_name
    FROM department
    LEFT JOIN employee
    ON employee.employee.id = department.department_id`, (err, res) =>{
        if(err) throw err
        console.table(res)
        firstAction()
    })
}


firstAction()