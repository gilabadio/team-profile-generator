const fs = require("fs");
const path = require("path");
const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, "index.html");
const createSite = require("./src/page-template.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const inquirer = require("inquirer");

const employeeArr = [];
const idArray = [];


const engineerQuestionst = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ID",
        message: "What is your engineer's ID?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an ID number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your employee's email?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is your  employee's GitHub username?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a GitHub username");
            return false;
          }
        },
      },
    ])
    .then((officeAnswers) => {
      const engineer = new Engineer(
        officeAnswers.name,
        officeAnswers.ID,
        officeAnswers.email,
        officeAnswers.github
      );
      employeeArr.push(engineer);
      employeeSelection();
    });
};


const internQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your  employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ID",
        message: "What is your  employee's ID?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is your employee's school?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an school");
            return false;
          }
        },
      },
    ])
    .then((officeAnswers) => {
      const intern = new Intern(
        officeAnswers.name,
        officeAnswers.ID,
        officeAnswers.email,
        officeAnswers.school
      );
      employeeArr.push(intern);
      employeeSelection();
    });
};
const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ID",
        message: "What is the team manager's ID?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an ID number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "What is the team manager's office number?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an office number");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.ID,
        answers.email,
        answers.office
      );
      employeeArr.push(manager);
      idArray.push(answers.ID);
      employeeSelection();
    });
};





const employeeSelection = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((choice) => {
      if (choice.team === "Engineer") {
        console.log("Engineer");
        return engineerQuestionst();
      } else if (choice.team === "Intern") {
        console.log("Intern");
        return internQuestions();
      } else if (choice.team === "Finish") {
        return makeSite();
      }
    });
};
const makeSite = () => {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }
  fs.writeFileSync(distPath, createSite(employeeArr), "utf-8");
};
managerQuestions();