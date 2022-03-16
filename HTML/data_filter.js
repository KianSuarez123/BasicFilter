personData = require('./data.json');


for(let x = 0; x < personData.length; x++) {
    let birthdate = new Date(personData[x].birthdate);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthdate.getFullYear();
    
    if(age >= 18){
        console.log(personData[x].name);
        console.log(age);
    }
}


