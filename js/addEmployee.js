import { filterEmployees, employees } from "./employeesAndFilter.js";

export function addEmployee() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const salary = Number(document.getElementById("salary").value);
    const position = document.getElementById("position").value;
    
    // const employeeInputs = document.querySelectorAll(".add-new-employee input")
    // employeeInputs.forEach((employeeInput) => {
    //     employeeFields = employeeInput.value
    //     const newEmployee = { employeeFields };
    //     employees.push(newEmployee);
    // })
    
    const newEmployee = { name, surname, salary, position };

    if(newEmployee.name === '' || newEmployee.surname === '' || newEmployee.salary === 0){
        alert("INVALID VALUES!")
    }
    else{
        employees.push(newEmployee);
    }

    
    // localStorage.setItem('name', document.getElementById('name').value);
    // localStorage.setItem('surname', document.getElementById('surname').value);
    // localStorage.setItem('salary', document.getElementById('salary').value);
    // localStorage.setItem('position', document.getElementById('position').value);

    // location.reload()

    // document.addEventListener('DOMContentLoaded', function() {
    //   document.getElementById('name').value = localStorage.getItem('name') || '';
    //   document.getElementById('surname').value = localStorage.getItem('surname') || '';
    //   document.getElementById('salary').value = localStorage.getItem('salary') || '';
    //   document.getElementById('position').value = localStorage.getItem('position') || '';
    // });
    
    filterEmployees();
}