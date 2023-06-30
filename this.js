
/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/
let calculator = {
    a:0,
    b:0,
    resSum:0,
    resMul:0,

    read(){
        this.a = +prompt("a?")
        this.b = +prompt("b?")
    },
   
    sum(){
        this.resSum = this.a +this.b
    },
    mul(){
        this.resMul = this.a * this.b
    }


}
function showCalc () {
    calculator.read()
    calculator.sum()
    calculator.mul()

    alert(calculator.resSum)
    alert(calculator.resMul)
}
showCalc()

