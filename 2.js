/*
Задание 2.

Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

let obj = {
    color: 'black',
    type: 'mobile'
};

let str = 'string';

function fun(str, obj) {
    let name = obj.hasOwnProperty('type');
    console.log(name);
}

fun(str, obj);