function calc(op){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var output = 0;

    switch (op) {
        case '+':
            output = num1 + num2;
            break;
        case '-':
            output = num1 - num2;
            break;
        case '/':
            output = num1 / num2;
            break;
        case '*': 
        output = num1 * num2;
            break;
        default:
            alert("Operação inesperada");              
    }    

    document.getElementById("output").value = output;
}

function sub(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var output = num1 - num2;

    document.getElementById("output").value = output;
}

function div(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var output = num1 / num2;

    document.getElementById("output").value = output;
}

function mult(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var output = num1 * num2;

    document.getElementById("output").value = output;
}