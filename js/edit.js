export function editingEmployeeValues() {
  const tableBodyDatas = document.querySelectorAll("#resultTableBody td")

  tableBodyDatas.forEach((tableBodyData) => {
    tableBodyData.addEventListener("click", function () {
      tableBodyData.contentEditable = true;
      tableBodyData.focus();
      tableBodyData.style.outline = "none"
    })

    tableBodyData.addEventListener("blur", function () {
      tableBodyData.contentEditable = false;
    })
  })
}