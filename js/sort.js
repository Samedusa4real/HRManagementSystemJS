import { refreshResultTable } from "./refreshTable.js";
import { filteredEmployees } from "./employeesAndFilter.js";

export function sortEmployees() {
    const sortField = document.querySelector("#sortField").value;

    filteredEmployees.sort((a, b) => {
        const valueA = a[sortField];
        const valueB = b[sortField];


        if (typeof (valueA) === "string") {
            if (valueA.toUpperCase() < valueB.toUpperCase()) {
                return -1;
            } else if (valueA.toUpperCase() > valueB.toUpperCase()) {
                return 1;
            } else {
                return 0;
            }
        }

        if (valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        } else {
            return 0;
        }
    });

    refreshResultTable();
}