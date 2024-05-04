function calcularResistencia(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var voltaje = document.getElementById("voltaje").value;
    var corriente = document.getElementById("corriente").value;
    var resultado = document.getElementById("lblResultado");
    var resistencia;

    if (voltaje != "" && corriente != ""){
        resistencia = voltaje / corriente; //ya hizo los calculos
        resultado.innerHTML = "Resistencia =" + resistencia + "ohms";
        console.log("R = " + resistencia + "ohms");
    } else {
        alert("Ingresar datos porfavor");
    }
}


function calcularCorriente(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var voltajeCurr = document.getElementById("voltajeCurr").value;
    var resistenciaCurr = document.getElementById("resistenciaCurr").value;
    var Resultado = document.getElementById("lblCurrResultado");
    var current;

    if (voltajeCurr != "" && resistenciaCurr != ""){
        current = voltajeCurr * resistenciaCurr; //ya hizo los calculos
        Resultado.innerHTML = "Corriente =" + current + "ohms";
        console.log("C = " + current + "ohms");
    } else {
        alert("Ingresar datos porfavor");
    }
}

function calcularVoltaje(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var corrienteVolt = document.getElementById("corrienteVolt").value;
    var resistenciaVolt = document.getElementById("resistenciaVolt").value;
    var resultado = document.getElementById("lblVoltResultado");
    var voltaje;

    if (corrienteVolt != "" && resistenciaVolt != ""){
        voltaje = corrienteVolt * resistenciaVolt; //ya hizo los calculos
        resultado.innerHTML = "Voltaje =" + voltaje + "ohms";
        console.log("V = " + voltaje + "ohms");
    } else {
        alert("Ingresar datos porfavor");
    }
}