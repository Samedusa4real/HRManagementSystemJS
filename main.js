import { switchToFirstPage , switchToSecondPage} from "./js/switchingPages.js";
import { editingEmployeeValues } from "./js/edit.js";
import { employees, filteredEmployees, filterEmployees, filterForPosition, filterForSalary, searchEmployees } from "./js/employeesAndFilter.js";
import { refreshResultTable } from "./js/refreshTable.js";
import { sortEmployees } from "./js/sort.js";
import { addEmployee } from "./js/addEmployee.js";

filterEmployees()


// ADD AREA
const addNewEmployeeButton = document.querySelector(".add-new-employee button")
addNewEmployeeButton.addEventListener("click", function(){
  addEmployee()
})
// ADD AREA

// SORT AREA
const sortButton = document.querySelector(".sort-section select")
sortButton.addEventListener("change", function(){
  sortEmployees()
})
// SORT AREA

// FILTER AREA
const salaryFilterInput = document.querySelector(".filter-by-salary-section input")
salaryFilterInput.addEventListener("keyup", function(){
  filterForSalary()
})

const positionFilterInput = document.querySelector(".filter-by-position-section select")
positionFilterInput.addEventListener("change", function(){
  filterForPosition();
})
// FILTER AREA

// SEARCH AREA
const searchButton = document.querySelector(".search-section input")
searchButton.addEventListener("keyup", function(){
  searchEmployees()
})
// SEARCH AREA

// SWITCH PAGES AREA
const addEmployeeButton = document.querySelector(".add-new-item")
addEmployeeButton.addEventListener("click", ()=>{
  switchToFirstPage()
})

const backHomeButton = document.querySelector("#first-page span")
backHomeButton.addEventListener("click", ()=>{
  switchToSecondPage()
})
// SWITCH PAGES AREA
