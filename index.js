function salary(dollarsPerHour) {
    var dollarsPerWeek = dollarsPerHour * 40;

    var dollarsPerMonth = dollarsPerWeek * 4;
    var dollarsPerYear = dollarsPerMonth * 12;

    var moneyPerYear = dollarsPerWeek * 52;
    var average = (dollarsPerYear + moneyPerYear) / 2;
    
    console.log(`${dollarsPerYear} - ${moneyPerYear}`, ', AVERAGE:', average);
}

salary(80);