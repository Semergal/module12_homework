/*
Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность. 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдайте best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
*/

function Electrotechnics(name) {
    this.power = 'power'
    this.name = name
}

Electrotechnics.prototype.turnOnOff = function (click) {
    this.statusOnOff
    if (click == 'On') {
        this.statusOnOff = 'On'
        console.log(`${this.name} включен(а)`)
    } else {
        this.statusOnOff = 'Off'
        console.log(`${this.name} выключен(а)`)
    }
}
Electrotechnics.prototype.powerOnOff = function () {
    if (this.statusOnOff == 'On') {
        this.power = this.power
        console.log(`Потребляемая мощность ${this.power} Вт`)
    } else {
        this.power = 0;
        console.log(`Потребляемая мощность ${this.power} Вт`)
    }
}

function ElectricalAppliances(name) {
    this.name = name
    this.category = 'Home and Garden'
}
ElectricalAppliances.prototype = new Electrotechnics()

function Electronics(name) {
    this.name = name
    this.category = 'Computers, Tablets & Network Hardware'
}
Electronics.prototype = new Electrotechnics()


const lamp = new ElectricalAppliances('Настольная лампа');
lamp.power = 30;
lamp.Finish = 'Chrome Plated';
lamp['lighting Technology'] = 'LED';
lamp.changeBrightness = function () {
    console.log(`${this.name} горит ярче`)
};
const computer = new Electronics('Компьютер');
computer.power = 200;
computer.RAM = '16 GB';
computer.printDocument = function () {
    console.log('Документ отправлен на печать')
};

lamp.turnOnOff('On');
lamp.powerOnOff();
computer.turnOnOff('On');
computer.powerOnOff();
console.log(`Общая потребляемая мощность ${lamp.power + computer.power} Вт`);