// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.


let multipleArr= []
let elementoLi = " "

let numero = parseInt(prompt ("Inserisci il numero di Array da creare"));

for(let i=0 ; i<numero ; i++){  // generare N Array
    let singleArr = [];
    for (let j=0 ; j<10 ; j++){   // ogni array genera 10 numeri casuali da 1 a 100   
        singleArr.push(Math.floor(Math.random()*100)+1);
    }
    multipleArr.push(singleArr);  
    
}

for (let i=0; i<multipleArr.length; i++){
    alert(multipleArr[i]);
    for (let j=0; j<multipleArr[i].length; j++){
        console.log(multipleArr[i][j])
    }
}



// ogni volta che un array viene creato, viene stampato a schermo

