// For converting radian to degree
function radianToDegree(radian){
    if(typeof radian !== "number"){
        return "Please enter a number";
    }
    const pi = Math.PI;
    const degree = radian * (180 / pi);
    return degree.toFixed(2);
}


// For checking whether the given file name is a JavaScript file or not
function isJavaScriptFile(fileName){
    if(typeof fileName !== "string"){
        return "Please enter a string";
    }
    
    const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
    if(fileExtension === "js"){
        return true;
    }
    else{
        return false;
    }
}


// For calculating the total oil price that I have to pay
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    if(typeof dieselQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number"){
        return "Please enter a number";
    }
    const diesel = 114;
    const petrol = 130;
    const octane = 135;
    
    const dieselPrice = diesel * dieselQuantity;
    const petrolPrice = petrol * petrolQuantity;
    const octanePrice = octane * octaneQuantity;

    const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
    return totalOilPrice;
}


// For calculating how much money I have to pay for the public bus fare
function publicBusFare(people){
    if(typeof people !== "number"){
        return "Please enter a number";
    }
    const reservedBus = 50;
    const microBus = 11;
    
    const busRemainingPeople = people % reservedBus;
    const restOfThePeople = busRemainingPeople % microBus;

    const totalBusFare = restOfThePeople * 250;
    return totalBusFare;
}


// For checking whether They are friend or not
function isBestFriend(personOne, personTwo){
    if(typeof personOne !== "object" || typeof personTwo !== "object"){
        return "Please provide an Object";
    }  
    else if(personOne.name === personTwo.friend && personTwo.name === personOne.friend){
        return true;
    }
    else{
        return false;
    }
}