// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: use a "while" loop to get user input to create and return an array of employee objects
const employeesArray = []
  const fact = true;
while (fact) {
  const firstName = alert("what is your first name?")
  const lastName = alert("what is your last name?")
  const salary = alert("what is your salary?")
  // todo: create an object with all 3 of these values, push that object to employeesArray

  var payData = {};
    payData["01"] = firstName;
    payData["02"] = lastName;
    payData["03"] = salary;
    employeesArray.push(payData); 

  fact = confirm("continue (OK) or cancel");
}

  // display data alphabetically by lastName, as
      //firstName:"John",
      //lastName:"Smith",
      //salary:12345;
    // salary should default to $0 if not entered as a number (use "isNaN" function for this)


  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary using a "template literal string"
  // show computed/aggregate data
console.log(`Average employee salary is $${salary}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //"Math" object can help here... Math.random
  console.log(`The winner is ${Math.random} employee.`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
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
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
