let input = document.querySelector(".input")
const submitButton = document.querySelector(".button")
let numberArr = [];
let i = 0;
let numberSum = 0;
const inputlistul = document.querySelector(".inputlistUl")

    do{ 
        number = parseInt(prompt("Enter a number, keep in mind they will sum untill you reach 50"))
        
        numberArr[i] = number ;
        numberSum += numberArr[i];
    }while (numberSum < 50);
    document.writeln("somma dei tuoi numeri = " + numberSum)

   