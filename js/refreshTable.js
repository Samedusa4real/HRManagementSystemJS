import { employees, filteredEmployees, filterEmployees } from "./employeesAndFilter.js";
import { editingEmployeeValues } from "./edit.js";

export function refreshResultTable() { 
    const resultTableBody = document.querySelector("#resultTableBody");
    resultTableBody.innerHTML = "";
  
    filteredEmployees.forEach((employee,index) => {
        resultTableBody.innerHTML += `<tr> <td>${employee.name}</td> <td>${employee.surname}</td> <td>${employee.salary}$</td> <td>${employee.position}</td> <td contenteditable="false"><i style="font-size: 20px; cursor: pointer" class="fa-solid fa-xmark"></i></td></tr>`;
        const row = document.querySelector("tbody tr")
        const removeData = document.querySelector("tbody tr td:last-child")
        const removeIcons = document.querySelectorAll("i")
        removeIcons.forEach((removeIcon) =>{
          removeIcon.addEventListener("click", ()=>{
            employees.splice(index,1);
            filterEmployees();
            removeData.appendChild(removeIcon)
          })
          row.appendChild(removeData)
        })
    });
    editingEmployeeValues()
}