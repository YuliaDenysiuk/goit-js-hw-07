const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

const elementRef = categoriesRef.forEach(element => {
    const headingOfElement = element.querySelector("h2").textContent;
    const numberOfElements = element.querySelectorAll("li").length;
    return console.log(
`Категория: ${headingOfElement}
Количество элементов: ${numberOfElements}`
    );
});
