/*
Задание 1.

Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/


let obj = {
    color: 'black',
    type: 'mobile'
};

function fun(obj) {
   for (let key in obj) {
       console.log('Ключ: ' + key + ', ' + 'Значение: ' + obj[key]);
   }
}

fun(obj);