// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        // debugger; // commands: cont(Continue)
    }

    return gifts;
}

function writeCards(arr,eventName) {
    let returnArr = [];
    for (let index = 0; index < arr.length; index++) {
        returnArr[index] = `Thank you, ${arr[index]}, for the wonderful ${eventName} gift!`;
        //Alternatively could use push or unshift
    }
    return returnArr
}

function countDown(value) {
    let tmp = value;
    while (tmp > -1 ) {
        console.log(tmp--);
    }
    
}

