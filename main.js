let input1 = document.getElementById('input1').value;
let submit = document.getElementById('score-submit');
let result = document.getElementById('result');


function gradeCalculation() {
    input1 = document.getElementById('input1').value;
    result = document.getElementById('result');
    // input1 = result.innerHTML;

    if (input1 >= 80 && input1 <= 100) {
        result.innerHTML = "You got an A";
    } else if (input1 >= 60 && input1 < 80) {
        result.innerHTML = "You got a B";
    } else if (input1 >= 50 && input1 < 60) {
        result.innerHTML = "You got a C";
    } else if (input1 >= 40 && input1 < 50) {
        result.innerHTML = "You got a D";
    } else if (input1 >= 30 && input1 < 40) {
        result.innerHTML = "You got a E";
    } else if (input1 >= 0 && input1 < 30) {
        result.innerHTML = "You got an F";
    } else if (input1 < 0 || input1 > 100) {
        result.innerHTML = "Please type a valid number";
    } else {
        result.innerHTML = "Input is invalid";
    }
}
submit.addEventListener('click', gradeCalculation );