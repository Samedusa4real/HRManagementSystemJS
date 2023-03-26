import { refreshResultTable } from "./refreshTable.js";

export let employees = [
    { name: "Nemet", surname: "Museyiboff", salary: 3100, position: "Qazi" },
];

export let filteredEmployees = employees;  


export function filterEmployees() {
    filterForPosition();
    filterForSalary();
}

export function filterForPosition() {
    const positionFilter = document.getElementById("positionFilter").value;
    filteredEmployees = employees.filter((employee) => {
        if (positionFilter && (employee.position).toLowerCase() !== positionFilter) {
            return false;
        }

        return true;
    });

    refreshResultTable();
}

export function filterForSalary() {
    const salaryFilter = Number(document.getElementById("salaryFilter").value);
    filteredEmployees = employees.filter((employee) => {
        if (salaryFilter && employee.salary < salaryFilter) {
            return false;
        }

        return true;
    });

    refreshResultTable();
}

export function searchEmployees() {
    const searchTerm = document.getElementById("searchTerm").value.toLowerCase();
  
    filteredEmployees = employees.filter((employee) => {
      const fullName = `${employee.name} ${employee.surname}`.toLowerCase();
  
      return fullName.includes(searchTerm);
    });
  
    refreshResultTable();
}