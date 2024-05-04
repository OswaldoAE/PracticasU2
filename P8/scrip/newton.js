function calcularResistencia(){
    var masa = document.getElementById("masa").value;
    var aceleracion = document.getElementById("aceleracion").value;
    var resultado = document.getElementById("lblResultado");
    var fuerza;
    if (masa != "" && aceleracion != ""){
        fuerza = masa / aceleracion //ya hizo los calculos
        resultado.innerHTML = "fuerza  =" + fuerza + "newtons";
        console.log("R = " + fuerza + "newtons");
    } else {
        alert("Ingresar datos porfavor");
    }
}








function calcularnewton(){
    var fuerza = document.getElementById("fuerza").value;
    var masa = document.getElementById("masa").value;
    var resultado = document.getElementById("lblResultado");
    var aceleracion;
    if (fuerza != "" && masa != ""){
        aceleracion = fuerza * masa //ya hizo los calculos
        resultado.innerHTML = "fuerza  =" + aceleracion + "newtons";
        console.log("R = " + aceleracion + "newtons");
    } else {
        alert("Ingresar datos porfavor");
    }
}