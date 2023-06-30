/* 
Напишите код, выполнив задание из каждого пункта отдельной строкой:

1. Создайте пустой объект user.
2. Добавьте свойство name со значением John.
3. Добавьте свойство surname со значением Smith.
4. Измените значение свойства name на Pete.
5. Удалите свойство name из объекта.
*/

let user = {}
user.name = "John"
user.surname ="Smith"
user.name = "Pete"
delete user.name 



// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let obj = {}

function isEmpty(){
    for ( let key in obj){
        return false

    } 
    return true
}

alert(isEmpty(obj))







// Сумма свойств объекта

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0
for( let key in salaries){
    
    sum = salaries.John + salaries.Ann + salaries.Pete
    
}




// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  }


  function multiplyNumeric(){
        for (let key in menu) {
            if(typeof menu[key] == "number"){
                menu[key] *= 2
            }
        }

    
  }
  