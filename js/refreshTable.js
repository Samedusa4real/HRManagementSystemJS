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

        const deleteAlertSection = document.querySelector("#delete-employee-alert")
        const deleteAlertButtons = document.querySelectorAll("#delete-employee-alert button")
        const secondDisplay = document.querySelector("#second-page")
        
        removeIcons.forEach((removeIcon) =>{
          removeIcon.addEventListener("click", ()=>{
            secondDisplay.classList.add("make-blur")
            deleteAlertSection.style.display = "flex"
            deleteAlertButtons.forEach(deleteAlertButton => {
              deleteAlertButton.addEventListener("click", function(){
                if(deleteAlertButton.innerText === "YES"){
                  employees.splice(index,1);
                  filterEmployees();
                  removeData.appendChild(removeIcon)
                }
                deleteAlertSection.style.display = "none"
                secondDisplay.classList.remove("make-blur")
              })
            })
          })
          row.appendChild(removeData)
        })
      });
      editingEmployeeValues()
}
