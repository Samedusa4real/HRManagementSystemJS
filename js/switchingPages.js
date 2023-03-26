export function switchToFirstPage() {
    const firstPage = document.querySelector("#first-page")
    const secondPage = document.querySelector("#second-page")
    secondPage.classList.add("non-visibility")
    firstPage.classList.remove("non-visibility")
}

export function switchToSecondPage() {
    const firstPage = document.querySelector("#first-page")
    const secondPage = document.querySelector("#second-page")
    secondPage.classList.remove("non-visibility")
    firstPage.classList.add("non-visibility")
}

