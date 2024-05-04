function calcularVacio(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var consPro = document.getElementById("consPro").value;
    var carga1 = document.getElementById("carga1").value;
    var carga2 = document.getElementById("carga2").value;
    var distancia = document.getElementById("distancia").value;
    var resultado = document.getElementById("lblResultado");
    var Fuerza;

    if (consPro != "" && carga1 != "" && carga2 != "" && distancia !=""){
        Fuerza = consPro * carga1 + carga2 / distancia; //ya hizo los calculos
        resultado.innerHTML = "Fuerza =" + Fuerza + "coulombs";
        console.log("F = " + Fuerza + "coulombs");
    } else {
        alert("Ingresar datos porfavor");
    }
}

function calcularMedio(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var consPro = document.getElementById("consPro").value;
    var carga1 = document.getElementById("carga1").value;
    var carga2 = document.getElementById("carga2").value;
    var distancia = document.getElementById("distancia").value;
    var relativa = document.getElementById("relativa").value;
    var resultado = document.getElementById("lblResultado");
    var Fuerza;

    if (consPro != "" && carga1 != "" && carga2 != "" && relativa !="" && distancia !=""){
        Fuerza = consPro * carga1 + carga2 / relativa * distancia; //ya hizo los calculos
        resultado.innerHTML = "Fuerza =" + Fuerza + "coulombs";
        console.log("F = " + Fuerza + "coulombs");
    } else {
        alert("Ingresar datos porfavor");
    }
}

function calcularFuerzaElectrostatica(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var va = document.getElementById("va").value;
    var distancia = document.getElementById("distancia").value;
    var consPro = document.getElementById("consPro").value;
    var carga2 = document.getElementById("carga2").value;
    var resultado = document.getElementById("lblResultado");
    var carga1;

    if (va != "" && distancia != "" && consPro != "" && carga2 !=""){
        carga1 = va * distancia / consPro * carga2; //ya hizo los calculos
        resultado.innerHTML = "Carga1 =" + carga1 + "coulombs";
        console.log("C = " + carga1 + "coulombs");
    } else {
        alert("Ingresar datos porfavor");
    }
}function calcularVacio(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var consPro = document.getElementById("consPro").value;
    var carga1 = document.getElementById("carga1").value;
    var carga2 = document.getElementById("carga2").value;
    var distancia = document.getElementById("distancia").value;
    var resultado = document.getElementById("lblResultado");
    var Fuerza;

    if (consPro != "" && carga1 != "" && carga2 != "" && distancia !=""){
        Fuerza = consPro * carga1 + carga2 / distancia; //ya hizo los calculos
        resultado.innerHTML = "Fuerza =" + Fuerza + "coulombs";
        console.log("F = " + Fuerza + "coulombs");
    } else {
        alert("Ingresar datos porfavor");
    }
}

function calcularMedio(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var consPro = document.getElementById("consPro").value;
    var carga1 = document.getElementById("carga1").value;
    var carga2 = document.getElementById("carga2").value;
    var distancia = document.getElementById("distancia").value;
    var relativa = document.getElementById("relativa").value;
    var resultado = document.getElementById("lblResultado");
    var Fuerza;

    if (consPro != "" && carga1 != "" && carga2 != "" && relativa !="" && distancia !=""){
        Fuerza = consPro * carga1 + carga2 / relativa * distancia; //ya hizo los calculos
        resultado.innerHTML = "Fuerza =" + Fuerza + "coulombs";
        console.log("F = " + Fuerza + "coulombs");
    } else {
        alert("Ingresar datos porfavor");
    }
}

function calcularFuerzaElectrostatica(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var va = document.getElementById("va").value;
    var distancia = document.getElementById("distancia").value;
    var consPro = document.getElementById("consPro").value;
    var carga2 = document.getElementById("carga2").value;
    var resultado = document.getElementById("lblResultado");
    var carga1;

    if (va != "" && distancia != "" && consPro != "" && carga2 !=""){
        carga1 = va * distancia / consPro * carga2; //ya hizo los calculos
        resultado.innerHTML = "Carga1 =" + carga1 + "coulombs";
        console.log("C = " + carga1 + "coulombs");
    } else {
        alert("Ingresar datos porfavor");
    }
}