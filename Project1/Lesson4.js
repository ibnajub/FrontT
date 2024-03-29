// Блок 1

//     Получить от юзера число.
//     Получить сумму квадратов всех чисел от 1 до числа, которое ввел юзер.
//     Пример:
//         Юзер ввел 4
//         (1 * 1) + (2 * 2) + (3 * 3) + (4 * 4) = 30
//         Вывести в консоль результат
//     Привести во вторую степень можно через оператор **.
//     3 ** 2 = 9


// let num1 = prompt('Введите число!', 0)
let num1 = 4
let sum1_sqw = 0
for (let index = 1; index <= num1; index++) {
    sum1_sqw += index **2    
    }

console.log(sum1_sqw)

//Есть массив [3, 5, 12, 9, 23, 93, 17]
//     Отфильтровать его так, чтобы остались только те числа, которые больше 2 и меньше 20. И потом получить их сумму.
console.log("Блок 1 Задание 2");
msort1 = [3, 5, 12, 9, 23, 93, 17]

// вариант 1
sum21 = 0
for (let item of msort1) {
    if (item > 2 && item < 20) {
        sum21 += item
    }
}

// вариант 2
// const initialValue = 0;
sum22 = msort1.reduce((accumulator, currentValue) =>
    accumulator + ((currentValue > 2 && currentValue < 20) ? currentValue : 0))
// ,initialValue)

console.log(sum21)
console.log(sum22)


// Дан массив[[1, 6, 3, '6'], [10, 15, 13, '10']].Найти сумму элементов, которые являются числами и кратны двум
console.log("Блок 1 Задание 3");
narray1 = [[1, 6, 3, '6'], [10, 15, 13, '10']]

let sum3 = 0
const fsum3 = (arr) => {

    for (let item of arr) {
        if (typeof item === 'number' && item % 2 === 0) {
            sum3 += item
        }
        else if (typeof item === 'object') {
            // рекурсивно вызовем
            fsum3(item)
        }

    }
    return sum3
}

console.log(fsum3(narray1))


//     Написать функцию, которая устанавливает новые свойства в объект.
//     Функция принимает в себя 3 аргумента - key, value, obj
//         key - свойство, которое хотим добавить. Принимаем это от юзера.
//         value - значение свойства. Принимаем это от юзера.
//         obj - объект, в который хотим добавить новое свойство.
//     Если юзер ввел ключ, который уже есть в объекте, то выводим сообщение - "Уже есть", если ключа нет, то устанавливаем его в объект.
console.log("Блок 1 Задание 4");

const rabbit = {
    jumps: true,
}

const NewItems = (key, value, obj) => {
    if (!(obj[key] === undefined)) {
        console.log(`уже есть такой ключь ${key}`)
    }
    else { obj[key] = value }
}

// let key1 = prompt('Введите Ключь!', 0)
//  let val1 = prompt('Введите Значение!', 0)
let key1 = 'jumps'
let val1 = 'hight'

NewItems(key1, val1, rabbit)
console.log(rabbit)
NewItems('eat', true, rabbit)
console.log(rabbit)

// ======================================================================
// Блок 2
console.log("Блок 2 Задание 1");
//     Написать функцию bindFunc, которая принимает в себя 2 + аргументов (Точно должна принять 2 аргумента, а дальше сколько угодно).
//     1 аргумент - какая-то функция
//     2 аргумент - значение контекста
//     3 + ... аргументы - любое кол-во аргументов
// Эта функция, должна устанавливать контекст для функции, которая в первом аргументе, и возвращать эту функцию с новым контекстом.
// Сам контекст, который мы хотим установить, находиться во втором аргументе

function func1(args) {
    return console.log(this.name, this.lastName, args)
}

const context_obj = {
    name: 'Fedorino',
    lastName: 'Jovanny',
}

bindFunc = function (func1, arg_context, ...args) {
    return func1.bind(arg_context, args)
    // еслу нужен сразу запуск Apply & Call
    // func1.apply(arg_context, args)
}

bindedfun = bindFunc(func1, context_obj, 'aaa', 'bbb')

console.log(bindedfun())

//  Написать функцию, которая не принимает никаких аргументов. В теле функции написать логику для нахождения суммы значений любого
//  количества ключей (значения ключей должны быть больше нуля) из переданного контекста.
// Обращаться к objectA напрямую нельзя :)
// Пример
// const func = function() {
//  this.a + this.b + .....
// }
// const objectA = {
//  a: 1,
//  b: 2,
//  c: 3,
// }
console.log("Блок 2 Задание 2");
const func = function () {
    return Object.values(this).reduce((accumulator, currentValue) => accumulator + ((currentValue > 0) ? currentValue : 0))

}
const objectA = {
    a: 1,
    b: 2,
    c: 3,
    d: -2
}
console.log(func.call(objectA))

//  Написать функцию, которая возвращает новый массив, в котором должны быть только четные числа, которые больше двуx и меньше 10. Новый массив будет
// состоять из значений ключа values из контекста, если такого ключа нет, то выводим сообщение "Не найдено".
// Обращаться к valObject0 напрямую нельзя :)
// Если хотите использовать map, то внутри map this всегда равен глобальному объекту. Чтобы это поменять передаем нужное значение this во второй аргумент map -
// arr.map(() => {}, this);
// Пример:
// function getNewArray() {
//  ....
// };
// const valObject0 = {
//  values: [1, '2', 4, 8, '8',  3, 10, null, false],
// };
// const result = getNewArray...; // Ссылаясь на массив ключа values из valObject0 [4, 8]
console.log("Блок 2 Задание 3");
function getNewArray23() {
    if (this.values === undefined) {
        return 'Не найдено'
    }
    return this.values.filter((curVal) => (typeof curVal === 'number' && curVal > 2 && curVal < 10 && curVal % 2 === 0));
};
const valObject0 = {
    values: [1, '2', 4, 8, '8', 3, 10, null, false],
};
console.log(getNewArray23.call(valObject0))

// Блок 3

//     Дан объект с городами и странами.
// Написать функцию getCity. Эта функция (getCity) должна вернуть новый массив, элементы которого будут преобразованы в данный формат: <Столица> - это <Страна>.
// Доступ к объекту может быть любым (через контекст, напрямую и т.д.)
// Можно использовать Object.entries метод )
console.log("Блок 3 Задание 1");

const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};
function getCity() {
    return Object.entries(citiesAndCountries).map(([city, country]) => { return `${city} - это ${country}` })
}
console.log(getCity()); // ['Киев - это Украина', 'Нью-Йорк - это США', ... и т.д.]


//     Создать объект с названиями дней недели. Где ключами будут ru и en, a значением свойства ru будет массив с названиями дней недели на русском, а en - на английском.
// После написать функцию которая будет выводить в консоль название дня недели пользуясь выше созданным объектом (доступ к объекту можно получить напрямую).
// Все дни недели начинаются с 1 и заканчиваются цифрой 7 (1- понедельник, 7 - воскресенье).
// Функция принимает в аргументы 2 параметра:
//     lang - название языка дня недели
//     day - число дня недели
// Можно вспомнить про метод indexOf(). А может можно и без него :)

console.log("Блок 3 Задание 2");
const namesOfDays = {
    "ru": ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    "en": ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(lang, datNumber) {
    return namesOfDays[lang][datNumber - 1]
}
console.log(getNameOfDay('en', 7));// 'Sunday'
console.log(getNameOfDay('ru', 3)); // 'Среда'



// Написать универсальную функцию setProto, которая принимает в себя 2 аргумента (currentObj, protoObj).
//Функция должна устанавливать прототип (protoObj) для currentObj. То есть после вызова функции мы должны получить результат:
console.log("Блок 3 Задание 3");

const person0 = {
    name: 'Vlad'
};
const person11 = {
    age: 1
};

function setProto(currentObj, protoObj) {
    currentObj.__proto__ = protoObj
}
// Теперь прототипом для объекта person1 выступает объект person
setProto(person11, person0);
console.log(person11);




// Создать базовый объект person. Этот объект должен выступать в роли прототипа для объекта person1.
// В объекте person должны быть такие методы:
//     метод для установки имени и возраста (setName, setAge)
//     метод для получения имени и возраста (getName, getAge)
//     метод для валидации возраста (ageValidation)
// person1.setName(...); // установили новое имя
// person1.getName(); // имя
// person1.setAge(...); // установили возраст
// person1.getAge(); // получили возраст

// Метод ageValidation вызывается при вывозе метода setAge (то есть внутри метода setAge). Метод ageValidation должен как-то проверить возраст,
// который мы вводим в setAge. Если возраст, который мы ввели, меньше 18, то записываем в age слово 'Validation Error', а есть введенный возраст больше 18, то вписываем в age это значение.
// ageValidation только проверяет данные, он ничего не записывает (в ageValidation не должно быть this.age = age)

console.log("Блок 3 Задание 4");

const person = {
    name: 'Vlad'
};
const person1 = {
    a: 1,
    setName(arg) { this.name = arg },
    "getName": function () { return this.name },
    setAge(arg) {
        if (this.ageValidation(arg)) { this.age = arg }
        else { this.age = 'Validation Error' }
    },
    getAge() { return this.age },

    ageValidation(age) { return age > 18 },

};

person1.__proto__ = person;

person1.setName('Igor');
console.log(person1.getName());
person1.setAge(1); // передать возраст можно как угодно
console.log(person1.getAge()); // 'Validation Error'
person1.setAge(20); // передать возраст можно как угодно
console.log(person1.getAge()); // Новое значение - 20
