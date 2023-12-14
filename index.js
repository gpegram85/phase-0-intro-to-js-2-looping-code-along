// Code your solutions in this file

const names = [];

function writeCards(names, event) {
    const newNames = [];

    for (let i = 0; i < names.length; i++) {
        //code to add msg to new array
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newNames;
}

writeCards(newNames);


function countDown(int) {
    while (int >= 0) {
        console.log(int--);
    }
}

