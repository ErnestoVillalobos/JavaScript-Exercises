var billionaires = require('./billionaires.json');

/*
    Get the names of the billionaires that are in their 20s
*/
let twentyYearOldBillionaires = [];
for (var i = 0; i < billionaires.length; i++) {
    if (billionaires[i].demographics.age > 20 && billionaires[i].demographics.age < 30) {
        //console.log(billionaires[i].name);
        twentyYearOldBillionaires.push(billionaires[i]);
    }

}



/*
    create a new object with the billionairse year, name and worth rounded to the newarest integer
    {
        year: 1996,
        name: Bernardo Garza Sada,
        worth: 2
    }
*/


let roundedWorth = [];
let newObject = {};
var redondeo;
for (let i = 0; i < billionaires.length; i++) {
    redondeo = Math.round(billionaires[i].wealth['worth in billions']);
    newObject.year = billionaires[i].year;
    newObject.name = billionaires[i].name;
    newObject.worth = redondeo;
    roundedWorth.push(newObject);
}

//console.log(roundedWorth);








/*
    sum the rounded worth of all the billionaires
*/


let red = null;
let aggregatedWorth = null;


for (var i = 0; i < billionaires.length; i++) {
    red = Math.round(billionaires[i].wealth['worth in billions']);
    aggregatedWorth += red;
}

//console.log(aggregatedWorth);

















/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = null
var money = 0;

for (var i = 0; i < billionaires.length; i++) {
    if (billionaires[i].wealth['worth in billions'] > money) {
        richest = billionaires[i];
        money = billionaires[i].wealth['worth in billions'];
    }
}

//console.log(richest);







/*
    find the poorest billioanire, make sure the result is in an array
*/

let poorest = null;

//Aprovecho la función anterior para tener el valor del más rico y usarlo como parámetro
var money = 0;//money hace referencia al worth in billions del más rico

for (var i = 0; i < billionaires.length; i++) {
    if (billionaires[i].wealth['worth in billions'] > money) {
        richest = billionaires[i];//Aquí se almacena la info del más rico
        money = billionaires[i].wealth['worth in billions'];
    }
}

//Utilizo la variable money para comparar y conseguir el 'worth in billions' más bajo
for (var i = 0; i < billionaires.length; i++) {
    if (billionaires[i].wealth['worth in billions'] <= money) {
        poorest = billionaires[i];//Aquí se almacena la info del más pobre
        money = billionaires[i].wealth['worth in billions'];
    }
}


//console.log(poorest);















/*
    make a new array containing the richest and the poorest billionaire
*/
let richAndPoor = null;
//Obtengo el más rico
var money = 0;
for (var i = 0; i < billionaires.length; i++) {
    if (billionaires[i].wealth['worth in billions'] > money) {
        richest = billionaires[i];//Aquí se almacena la info del más rico
        money = billionaires[i].wealth['worth in billions'];
    }
}

//Obtengo el más pobre
for (var i = 0; i < billionaires.length; i++) {
    if (billionaires[i].wealth['worth in billions'] <= money) {
        poorest = billionaires[i];//Aquí se almacena la info del más pobre
        money = billionaires[i].wealth['worth in billions'];
    }
}

//Este es mi arreglo con el más rico y el más pobre
richAndPoor = [richest, poorest];

//console.log(richAndPoor);


module.exports = {
    twentyYearOldBillionaires,
    roundedWorth,
    aggregatedWorth,
    richest,
    poorest,
    richAndPoor
}