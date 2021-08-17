console.log("Hello, world!");
alert("Hello, world!");
let username = "Hayley";
console.log("Hi, " + username);

let num1 = 3;
let num2 = 4;
let total = num1 + num2;
console.log(total);


function addition(x, y) {
    result = x + y;
    console.log(result);
    }

addition(1, 9);

function showName() {
    console.log("Cool name!");
    let username = document.getElementById("name-text").value;
    console.log("Hi, " + username)  
    }

    
// for (let count = 0; count < 10; count++) {
//     console.log(count);
//         }

// let pets = ['Chilli', 'rex', 'roary', 'fluer'];
// console.log(pets);

// console.log(pets[0]);
// console.log(pets[3]);

// pets.push('Ivy');
// console.log(pets);

// for (let index = 0; index < pets.length; index++) {
//     console.log(pets[index]);
//     }

// pets.forEach((pet) => {
//     console.log(pet);
// });

pet = 'Chilli';

if (pet == 'Chilli')  {
    console.log('OMG you arethe cutest');
}
else if (pet == 'Ivy') {
    console.log('OMG cute bow');
}
else {
    console.log('you are reasonably cute');
}