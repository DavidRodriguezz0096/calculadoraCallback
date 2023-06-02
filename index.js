document.addEventListener('DOMContentLoaded', function() {
    let sumarBtn = document.getElementById('calc(sumarNum)');
    let restarBtn = document.getElementById('calc(restarNum)');
    let multiplicarBtn = document.getElementById('calc(multiplicarNum)');
    let dividirBtn = document.getElementById('calc(divisionNum)');
    let borrarBtn = document.getElementById('calc(borrarValores())');

    sumarBtn.addEventListener('click', function() {
        calc(sumarNum);
    });
    restarBtn.addEventListener('click', function() {
        calc(restarNum);
    });
    multiplicarBtn.addEventListener('click', function() {
        calc(multiplicarNum);
    });
    dividirBtn.addEventListener('click', function() {
        calc(divisionNum);
    });
    borrarBtn.addEventListener('click', function() {
        calc(borrarValores());
    });
});

function calc(callback) {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let resultado = callback(num1, num2);
    document.getElementById("resultado").value = resultado;
}

function sumarNum(num1, num2) {
    return num1 + num2;
}

function restarNum(num1, num2) {
    return num1 - num2;
}


function multiplicarNum(num1, num2) {
    return num1 * num2;
}


function divisionNum(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: No se puede dividir por cero (0)";
    }
}

function borrarValores() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
}



