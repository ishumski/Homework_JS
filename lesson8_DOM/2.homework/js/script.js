const div = document.createElement("div");//формально создал div
div.setAttribute("id", "content");// задал id = "content"
document.body.prepend(div);//фактически добавил созданный div в начале нашего body

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
  const content = document.querySelector("#content");//обращаемся в div по id

  arrayOfPeople.forEach(item => {//прогон массива(с простым выводом инфы на стр)

    const h1 = document.createElement("h1");//формально создал h1
    const h2 = document.createElement("h2");//формально создал h2

    //больше не обращайся к свойствам так: arrayOfPeople.name, 
    //arrayOfPeople.item.name - в forEach так не принято, пёс!
    h1.innerHTML = item.name;// присвоил h1 значение ключа name
    h2.innerHTML = item.job;// присвоил h2 значение ключа job

    div.append(h1);//фактически добавил созданный h1 в конце div
    div.append(h2);//фактически добавил созданный h2 в конце div
  })

}

/*2. Создайте список покупок. Используйте unordered list.
Весь HTML должен идти в <div> с id="content"*/

function exerciseTwo(shopping) {
  const list = document.createElement("ul");
  div.prepend(list);

  shopping.forEach(elem => {
    const li = document.createElement("li");
    li.innerHTML = elem;
    list.append(li);
  });
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

  const firstBookImg = new Image(250, 300);
  firstBookImg.src = "/lesson8_DOM/2.homework/image/The_Design_of Everyday_Things.png"

  const secondBookImg = new Image(200, 300);
  secondBookImg.src = "/lesson8_DOM/2.homework/image/The_Most_Human_Human.jpg"

  const thirdBookImg = new Image(250, 250);
  thirdBookImg.src = "/lesson8_DOM/2.homework/image/The_Pragmatic_Programmer.jpg"

  books.forEach(elem => {
    /*1. Для каждой книги создайте <p> элемент с названием книги и ее автором и добавьте на страницу.*/
    const p = document.createElement("p");
    p.innerHTML = (`${elem.title} - ${elem.author}`);
    p.style.width = "400px";
    div.style.display = "flex";
    p.style.marginRight = "25px";
    div.append(p);

    /*2. Используйте <ul> и <li> для отображения книг.*/
    const unList = document.createElement("ul");
    const li = document.createElement("li");
    li.style.listStyleType = "none";
    p.append(unList);
    unList.appendChild(li);

    /*4. проверка*/
    elem.alreadyRead ? p.style.backgroundColor = "green" : p.style.backgroundColor = "red";
  })
  /*3. Картинки */
  const p1 = document.querySelector("p:nth-child(1)")
  p1.append(firstBookImg);
  console.log(p1);
  const p2 = document.querySelector("p:nth-child(2)")
  p2.append(secondBookImg);
  console.log(p2);
  const p3 = document.querySelector("p:nth-child(3)")
  p3.append(thirdBookImg);
  console.log(p3);
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