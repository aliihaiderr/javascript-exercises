/*  Write a function that stores information about a car in a Object. The function should always receive 
a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure all the 
information was stored correctly. */


import PromptSync from "prompt-sync";
const prompt=PromptSync();

function carDetail(make,model,...para){
        let carOptions={
            Manufatorer:make,
            Model:model,
            color:"black",
            Sunroof:true,
            PowerSeats: "yes",  
        }
        console.log(carOptions);
        // let keys= Object.keys(carOptions);
        // let values= Object.values(carOptions);
        // for (let key of keys) {
        //     // console.log(key);
        // }
        // for (let value of values) {
        //     // console.log(value);
        // }

        // let arrKeys = Object.keys(carOptions);
        // for(let i = 0; i < arrKeys.length; i++) {
        // console.log(arrKeys[i] + ": " + carOptions[arrKeys[i]]);
}
carDetail("Audi","A5");