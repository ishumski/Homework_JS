// Исправьте синтаксические ошибки
/*1.Задача*/
// function addNumbers(a b c) {
//     return a + b + c;
//   }

function addNumbers(a, b, c) {
    return a + b + c;
}

/*2. Задача*/
// function introduceMe(name, age)
//   return "Привет, меня зовут " + name "и мне" age + "года";

function introduceMe(name, age) {
    return "Привет, меня зовут " + name + " и мне " + age + " года";
}
function introduceMe(name, age) {
    return `Привет, меня зовут ${name} и мне ${age} года`;
}

/*3 Задача*/
// function getTotal(a, b) {
//     total = a ++ b;
//     return "The total is "total;
//   }

function getTotal(a, b) {
    total = a + b;
    return "The total is " + total;
}
function getTotal(a, b) {
    total = a + b;
    return `The total is ${total}`;
}


