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
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, roles.department_id AS department, roles.role_salary, roles.role_title, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.role_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id`, (err, res) =>{
        if(err) throw err
        console.table(res)
        firstAction()
    })
}

function addDepartment(department) {
    const questions = [
        {
        type: "input",
        name: "department_name",
        message: "What is the name of the department?"
        }
    ]
    inquirer.prompt(questions)
        
      .then(res => {
          db.query(`INSERT INTO department SET ?`, res)
          firstAction()
      }
        )
}

function addRole(department) {
    const questions = [
        {
        type: "input",
        name: "role_title",
        message: "What title do you bestow?"
        },
        {
        type: "input",
        name: "role_salary",
        message: "How much do you want to pay them?"
        },
        {
        type: "input",
        name: "department_id",
        message: "What department will this role be in?"
        }
    ]
    inquirer.prompt(questions)
        
      .then(res => {
          db.query(`INSERT INTO roles SET ?`, res)
          firstAction()
      }
        )
}

function addEmployee(department) {
    const questions = [
        {
        type: "input",
        name: "first_name",
        message: "What is their first name?"
        },
        {
        type: "input",
        name: "last_name",
        message: "What is their last name?"
        },
        {
        type: "input",
        name: "role_id",
        message: "What role ID will they have?"
        },
        {
        type: "input",
        name: "manager_id",
        message: "Who is there manager(enter ID)?"
        }
    ]
    inquirer.prompt(questions)
        
      .then(res => {
          db.query(`INSERT INTO employee SET ?`, res)
          firstAction()
      }
        )
}

function updateRole(department) {
    const questions = [
        {
        type: "input",
        name: "id",
        message: "Which employee?"
        },
        {
        type: "input",
        name: "role_id",
        message: "Which role would you like to put them in?"
        }
    ]
    inquirer.prompt(questions)
        
      .then(res => {
          db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, res)
          firstAction()
      }
        )
}

firstAction()