// Блок 1

//     Создать функцию конструктор Animal c аргументами name, age, color. Написать логику для того, чтобы функцию можно было вызывать как с, так и без new:
// При вызове без new новый объект все равно должен создаться
console.log("Блок 1 Задание 1");
function Animal(name, age, colour) {
    if (!new.target) {
        return new Animal(name, age, colour)
    }
    this.name = name
    this.age = age
    this.colour = colour
}

const rabbit = Animal('Name', 'Age', 'Colour'); // переадресовывает вызовы на new Animal
const rabbit2 = new Animal('Name', 'Age', 'Colour');

//     Создайте функцию-конструктор Calculator, который создаёт объекты с такими методами:
//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     setAction() запрашивает действие при помощи prompt, которые мы хотим сделать (+, -, / и т.д)
//     doAction() выполняет действие, которое юзер ввел (будет вызывать в себя методы sum, mul, min и т.д)
//     sum() возвращает сумму введённых свойств.
//     mul() возвращает произведение введённых свойств.
//     min() возвращает разницу введённых свойств.
//     другие методы можете добавить, если хотите (метод для квадратного корня и т.д.)
console.log("Блок 1 Задание 2");
function Calculator() {
    this.read = function () {
        // this.value1 = Number(prompt('Ввежите знач1', 0));
        // this.value2 = Number(prompt('Ввежите знач2', 0));
        // test
        this.value1 = 3;
        this.value2 = 3;
    };
    this.setAction = function () {
        // this.action = prompt('Ввежите action(+-*)', '+');
        this.action = '+';
    };
    this.doAction = function () {
        switch (this.action) {
            case '+':
                return sum(this.value1, this.value2);
            case '*':
                return mul(this.value1, this.value2);
            case '-':
                return min(this.value1, this.value2);
            default:
                console.log('no action')
        }
    };
    //эти функции не видят this и не доступны для вызова из обьекта
    function sum(value1, value2) {
        return value1 + value2
    };
    function mul(value1, value2) {
        return value1 * value2
    };
    function mul(value1, value2) {
        return value1 - value2
    };
}

const calculator = new Calculator();
calculator.read();
calculator.setAction();
console.log(calculator.doAction()); // результат


//     Создать функцию конструктор Nums, которая принимает бесконечное множество аргументов, и они записываются в свойство args в виде массива
// Добавить в прототип для всех объектов, которые создадим от конструктора Nums, 2 метода:
//     метод getSum должен вернуть сумму всех элементов (которые только целые числа) массива args
//     метод myFilterReverse должен отфильтровать массив и оставить только целые числа и развернуть массив (было [1, 2, 3] -> стало [3, 2, 1])
// Метод .reverse использовать нельзя :)
// только целые числа -> Number.isInteger(1); // true Number.IsInteger(1.2); // false
console.log("Блок 1 Задание 3");
// let method2 = {
//     assd: 22,
//     getSum: function () {
//         return 111;
//     },
// };

function Nums(...args) {
    // this.prototype = method2;
    this.args = args;
}

Nums.prototype.getSum = function () {
    return this.args.reduce((accumulator, currentValue) =>
        accumulator + ((Number.isInteger(currentValue)) ? currentValue : 0));
}

Nums.prototype.myFilterReverse = function () {
    arr = this.args;
    arr = arr.filter(function (item, i, arr) {
        return (Number.isInteger(item))
    });
    // разворот массива
    var temp;
    for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr
}

const test1sdsd = new Nums(2, 3, 4, 32.3);
console.log(test1sdsd.getSum()); // найдет сумму всех элементов в свойстве args, которые являются целыми  числами.

console.log(test1sdsd.myFilterReverse()); // Отфильтруем массив в свойстве args и развернет массив (было [1, 2, 3] -> стало [3, 2, 1])

//     Есть массив [1, 1, 2, 2, 3]
// Создать свой метод getUnique для любых массивов, который отфильтрует массив и оставит в нем только уникальные значения
// Подсказка: чтобы было легче почитайте про метод .includes()
console.log("Блок 1 Задание 4");

const arr14 = [1, 1, 2, 2, 3, 'ddd', 'ddd', 'sss', 'sss', 333, 333, 444444, 444444];

Array.prototype.getUnique = function () {
    return Array.from(new Set(this))
}

console.log(arr14.getUnique()); //  [1, 2, 3]




// 5* Есть объект {a: 1, b: 2, c: 3, d: false, e: 0}; Нужно создать 2 метода для любых объектов:
//     метод getKeySum, который найдет сумму значений всех ключей, которые true.
//     метод reversKey который поменяет местави key и value (ключ и значение)

// Пример Был объект {a: 1, b: 2}.reversKey() -> стало {1: 'b', 2: 'a'}
// Блок 2

//     Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.

// const arr = ['Vasya', 'Petya', 'Alexey']
// removeUser(arr, 1)
// console.log(arr) /// ['Vasya', 'Alexey']
// etc.

//     Повторите по данному по образцу (используя JS):
// Родительский div можно добавить просто в html файле

// help

//     У вас есть следующий код:

// // index.html
// <div class="holder">
// </div>

// Используя JS, добавить такие блоки в div с классом holder
//   <div class="item">1</div>
//   <div class="item">2</div>
//   <div class="item">3</div>
//   <div class="item">4</div>
//   <div class="item">5</div>

// С помощью стилей привести блоки в такой вид (в стилях только флекс)
// help
//     Напилить код функции modificator, такой, чтобы в результате работы кода была строка "sampleFunc: test | sample":
// про .calle посмотреть тут https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments/callee
// function sampleFunc () {
//     console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
// }
// function modificator ( func ) {
//     ...
// }
// const testFunc = modificator( sampleFunc )
// testFunc(); // sampleFunc: test | sample

//     Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы

// Какие данные - на ваше усмотрение ( например, имя, фамилия, возраст, наличие ноутбука и т.д. )

// const group = [{
//                 name: "...",
//                 lastName: "...",
//                 age: ...,
//                 notebook: false,
//                 ...
//               },
//               {...},
// ];

// Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой
// ( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )
// function getStudentsList ( arrayOfStudents ) {
//         ...
// }

// Пример на преобразование:

// const test = {
//   toString() {
//     return 'Hello';
//   }
// };
// String(test); // 'Hello'

// Вывод строки должен произойти после попытки преобразовать объект к строке

// Пример:

// Был массив:

// const group = [{
//   name: 'Vlad',
//   lastName: 'Test',
//   haveLaptop: true
// }];
// getStudentsList(group); // Name - Vlad,lastName - Test,haveLaptop - true

// 'Name - Vlad,lastName - Test,haveLaptop - true' - эта строка должна появиться только после преобразования объекта к строке
// Блок 3

// pure JS

// 1 ) Создайте элемент 'p', при клике на котором появляется картинка размером 100px
// При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px
// При клике на картинке она должна исчезать
//     Дан массив с числами.

// Найдите сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.

//     Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
//     Есть инпут, в который что-то вводим. Рядом с инпутом есть кнопка. По нажатию на кнопку выводим в консоль то, что вписали в инпут.
//     Привяжите всем ссылкам в документе событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.

// HTML:

// <div>
//     <a href="https://www.google.com/" title="">Текст первой ссылки</a>
// </div>
// <div>
//     <a href="https://www.apple.com/" title="">Текст второй ссылки</a>
// </div>
// <div>
//     <a href="https://www.youtube.com/" title="">Текст третьей ссылки</a>
// </div>

//     Добавьте JavaScript к кнопке button, чтобы при нажатии элемент
//     исчезал.

//     Пример из урока
// не используем type='number' для инпута

// Логика:
//     Сделать валидацию для инпута. Нужно проверять то, что вводим в инпут. Вводить можно только тип данных number. Если юзер ввел букву, то удаляем все (все что ввели) в инпуте
//     В инпут юзер вводит кол-во пикселей, на которое хотим передвинуть круг (по Х координате)
//     При нажатии на кнопку START получаем данные из инпута (какое-то число) и передвигаем наш круг на то кол-во пикселей, которое ввел юзер в инпут
//     Передвижения круга должно быть с анимацией
//     Если итоговое значение больше 600px || меньше нуля, то напрямую пишем в инпут ERROR (понимаем это после нажатия на кнопку)
