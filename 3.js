/*
Задание 3.

Напишите функцию, которая создает пустой объект, но без прототипа.
*/
function fun() {
    let obj = Object.create(null);
    console.log(obj);
}

fun();