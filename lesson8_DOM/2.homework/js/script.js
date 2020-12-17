/*1. Дан массив people с объектами, которые содерержат в себе имя и работу человека.
  - Добавить <h1> элемент на страницу для каждого из имени человека 
  - Добавить <h2> элемент на страницу для каждой из работ человека
  Весь HTML должен идти в <div> с id="content"
  <div id="content">
       <h1>{Имя}</h1>
       <h2>{Работа}</h2>
       .....
  </div>
 */


function exerciseOne(arrayOfPeople) {
  const content = document.querySelector("#content");
  content.innerHTML = arrayOfPeople;
  if (Array.isArray(arrayOfPeople)) {
    for (let item of arrayOfPeople)
      if (typeof item == "object") {
        return Object.values(item).appendChild(h1);
      }

  }
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");


h1.innerHTML = "Chris";
h2.innerHTML = "Teacher";
content.appendChild(h1);
content.appendChild(h2);




if (Array.isArray(arrayOfPeople)) {
  return arrayOfPeople.forEach(item => item.name)
}



/*2. Создайте список покупок. Используйте unordered list.
Весь HTML должен идти в <div> с id="content"*/
function exerciseTwo(shopping) {
  shopping.forEach(item => document.write(`<ul>${item}</ul>`));

}


/*3. Дан массив с книгами
    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];
    Пройдитесь по массиву.
    - Для каждой книги создайте <p> элемент с названием книги и ее автором и добавьте на страницу.
    - Используйте <ul> и <li> для отображения книг.
    - Добавьте <img> для каждой книги с ее обложкой.
    - Измените стиль книги в зависимости от того прочитана она (зеленый) или нет (красный).*/
function exerciseThree(books) {
  //Свой код здесь
}

//
//
//
//
// НЕ РЕДАКТИРОВАТЬ ВСЕ ЧТО НИЖЕ
//
//
//
//

const people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

const shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
