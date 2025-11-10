// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

const bicycleArray = [
    { name: "Bianchi Sprint", weight: 7.8 },
    { name: "Specialized Tarmac", weight: 7.2 },
    { name: "Trek Emonda", weight: 6.9 },
    { name: "Cannondale SuperSix", weight: 7.5 },
    { name: "Pinarello Dogma", weight: 6.8 }
];

const getMinWeight = (array) => {
    let minBicycle = array[0]; //suppose the first object of the array has the min weight

    for(let i = 0; i < array.length; i++){
        let valueCurIndex = array[i];
        
        if(array[i].weight < minBicycle.weight){ //check if next obj of the array's weight atribute isnt bigger
            minBicycle = array[i];
        }
    }
    return minBicycle;
}
console.log(getMinWeight(bicycleArray));


// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeams = [
  { name: "Juventus", points: 0, fouls: 0 },
  { name: "Inter", points: 0, fouls: 0 },
  { name: "Milan", points: 0, fouls: 0 },
  { name: "Napoli", points: 0, fouls: 0 },
  { name: "Roma", points: 0, fouls: 0 }
];

const getRandomPointsAndFouls = (array) => {

}

console.log(getRandomPointsAndFouls(footballTeams));



// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. 
// Non usare i metodi di array di JS 


const getNumbersIndexMinMax = (array, indexMin, indexMax) => {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        valoreCurNr = array[i];

        if (i >= indexMin && i <= indexMax) {
            resultArray.push(valoreCurNr);
        }

    }
    return resultArray;
}
//                     0 1 2 3 4 5 6 7 8
const numbersArray = [2, 4, 5, 8, 9, 4, 2, 3, 4,];
console.log(getNumbersIndexMinMax(numbersArray, 3, 5));// [894]