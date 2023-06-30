// Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}


// '?'
function checkAgeCustom(age) {
   return age > 18 ? true : confirm("Родители разрешили ? ")
}


// '||'
function checkAgeCustom(age) {
   return (age > 18) || confirm("Родители разрешили ? ")
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function minNumber(x,y) {
    if (x<y){
        return x
    } else {
        return y
    }
}

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результа
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n)
// В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
    let x = prompt ("x?")
    let n = prompt ("n?")

function pow(x,n){    
    if(n>=1){
        let res = x ** n 
        alert(res)
    } else {
        alert(`Степень ${n} не поддерживается, используйте натуральное число`)
    }

    
}

pow(x,n)

