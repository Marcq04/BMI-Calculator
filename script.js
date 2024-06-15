function calculate() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("result");

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.innerHTML = "Please enter valid values!";
        return;
    }

    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    let message;

    if (bmi < 25) {
        message = "healthy";
    } 
    else if (bmi >= 25 && bmi < 30) {
        message = "overweight";
    } 
    else {
        message = "obese";
    }

    result.innerHTML = `Your BMI is ${bmi}. You are ${message}.`;
}


function pds() {
    let pds = document.getElementById("pds").value;
    let result = document.getElementById("result in pds");
    if (pds <= 0) {
        result.innerHTML = "Please enter valid values!";
    } 
    else {
        let kg = (pds / 2.205).toFixed(2);
        result.innerHTML = `Your weight in kg is ${kg}`;
    }
}

function feet() {
    let feet = parseFloat(document.getElementById("feet").value);
    let inch = parseFloat(document.getElementById("inch").value);
    let result = document.getElementById("result in feet");

    if (isNaN(feet) || isNaN(inch) || feet <= 0 || inch < 0) {
        result.innerHTML = "Please enter valid values!";
    } else {
        let cm = ((feet * 12) + inch) * 2.54;
        cm = cm.toFixed(2); // Round to 2 decimal places
        result.innerHTML = `Your height in cm is ${cm}`;
    }
}
