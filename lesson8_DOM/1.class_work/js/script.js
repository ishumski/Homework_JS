/*1. Написать скрипт который выводит:
    1. Все <p> элементы документа. (список из 6 элементов)
    2. Первый <div> документа (должен вывести div с классом site-header) 
    3. Элемент с id "jumbotron-text"
    4. Все <p> элементы которые находят внутри элемента с классом .primary-content (список из 3 элементов) 
*/

const allPar = document.querySelectorAll("p");
console.log(allPar);

const firstDiv = document.querySelector(".site-header");
console.log(firstDiv);

const itemFromId = document.getElementById("jumbotron-text");
console.log(itemFromId);

const par = document.querySelectorAll(".primary-content p");
console.log(par);


/*2. При клике на кнопку “ALERT”, должен появится alert с текстом 
“Thanks for visiting Bikes for Refugees!”*/

const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", () => {
    alert("Thanks for visiting Bikes for Refugees!");
});


/*3. При нажатии на кнопку “Change color”, 
цвет фона страницы должен меняться на другой.*/

const bgrChangeBtn = document.querySelector(".buttons a");
const body = document.body;
bgrChangeBtn.addEventListener("click", () => {
    body.style.backgroundColor = "purple";
});


/*4.Когда пользователь нажимает на кнопку “Add some text”, 
перед кнопками должен добавиться новый параграф с содержимым 
“Read more below.”*/
const addTextBtn = document.getElementById("addTextBtn");
const jumbo = document.querySelector("div > .jumbotron");
const hr = document.querySelector("div hr");

addTextBtn.onclick = function () {
    const p = document.createElement("p");
    p.textContent = "Read more below.";
    jumbo.insertBefore(p, hr);
}

/*5. Когда пользователь кликает на кнопку “Larger links!”, 
шрифт всех ссылок должен увеличиться.*/
const largerLinksBtn = document.getElementById("largerLinksBtn");
const allLinks = document.querySelectorAll("a");

largerLinksBtn.onclick = function () {
    allLinks.forEach(elem => elem.style.fontSize = "25px");
}