// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari
// e in verde i numeri pari.


const numbers = ["1","2","3","4","5","6","7","8","9","10"];
let itemsContent = document.querySelector(".container");
let red = document.createElement("div");
red.setAttribute("id", "red");
document.body.appendChild(red);

let green = document.createElement("div");
green.setAttribute("id", "green");
document.body.appendChild(green);


for(i=0; i<numbers.length; i++){
    if (numbers[i] %2 == 0){
        red.innerHTML += numbers[i] + ","
    }else {
        green.innerHTML += numbers[i] + ","
    }
}