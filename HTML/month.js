personData = require('./data.json');


for(let x = 0; x < personData.length; x++) {
    let birthdate = new Date(personData[x].birthdate);
    let currentMonth = new Date().getMonth();
    let month = birthdate.getMonth()+1;
    
    if(month == '2') {
        console.log(personData[x]);
        console.log(month);
    }

}