// makes a reference for the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// collects employee data
const collectEmployees = function () {
  // uses a "while" loop to get user input
  const employeesArray = [];
  let fact = true;
  while (fact) {
    const firstName = prompt("what is your first name?");
    const lastName = prompt("what is your last name?");
    const salary = prompt("what is your salary?");

    // creates an object with all 3 of these values, and pushes that object to employeesArray
    var payData = {};
    payData["employeeFirst"] = firstName;
    payData["employeeLast"] = lastName;
    payData["employeeSalary"] = salary;
    employeesArray.push(payData);

    fact = confirm("continue (OK) or cancel");
  }

  console.log(employeesArray);
  return employeesArray;

  // display data alphabetically by lastName, as
  //firstName:"John",
  //lastName:"Smith",
  //salary:12345;
  // salary should default to $0 if not entered as a number (use "isNaN" function for this)
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  console.log(employeesArray);
  let fullPayroll = 0;

  for (i = 0; i < employeesArray.length; i++) {
    fullPayroll = fullPayroll + Number(employeesArray[i].employeeSalary);
  }
  console.log(fullPayroll);
  const salary = fullPayroll / employeesArray.length;

  // TODO: Calculate and display the average salary using a "template literal string"
  // show computed/aggregate data

  console.log(`Average employee salary is $${salary.toFixed(2)}.`);
};

// Selects a random employee, Displays a random employee in the console log
function getRandomInt(employeeCount) {
  return Math.floor(Math.random()) * employeeCount;
}

const getRandomEmployee = function (employeesArray) {
  const randomInteger = getRandomInt(employeesArray.length);
  const randomEmployee = employeesArray[randomInteger];
  console.log(
    `Employee of the month is ${randomEmployee.employeeFirst} ${randomEmployee.employeeLast}.`
  );
};

// ====================
// STARTER CODE - not modified
// */

// Displays employee data in an HTML table

const displayEmployees = function (employeesArray) {
  // Gets the employee table

  const employeeTable = document.querySelector("#employee-table");

  // Clears the employee table

  employeeTable.innerHTML = "";

  // Loops through the employee data and creates a row for each employee

  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");

    // Formats the salary as currency

    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Adds event listener to 'Add Employees' button

addEmployeesBtn.addEventListener("click", trackEmployeeData);
