import { employees, filteredEmployees } from "./employees.js";

export function searchEmployees() {
    const searchTerm = document.getElementById("searchTerm").value.toLowerCase();
  
    filteredEmployees = employees.filter((employee) => {
      const fullName = `${employee.name} ${employee.surname}`.toLowerCase();
  
      return fullName.includes(searchTerm);
    });
  
    refreshResultTable();
}