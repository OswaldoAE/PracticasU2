
// Para las tablas de multiplicar
let botonTablas = document.getElementById("mostrarTablas");
if (botonTablas) {
    botonTablas.addEventListener("click", function() {
        let resultado = "";
        for (let i = 2; i <= 10; i++) {
            resultado += `<h3>Tabla del ${i}</h3>`;
            for (let j = 1; j <= 10; j++) {
                resultado += `${i} x ${j} = ${i * j}<br>`;
            }
        }
        document.getElementById("tablas").innerHTML = resultado;
    });
}

// Para la serie de Fibonacci
let botonFibonacci = document.getElementById('generar');
if (botonFibonacci) {
    botonFibonacci.addEventListener('click', function() {
        function generarFibonacci(n) {
            let numeros = [0, 1];
            for (let i = 2; i < n; i++) {
                numeros.push(numeros[i - 1] + numeros[i - 2]);
            }
            return numeros;
        }

        document.getElementById('fibonacci').innerText = generarFibonacci(20).join(', ');
    });
}

// Para la serie los números primos
document.getElementById('verificar').addEventListener('click', function() {
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');

    if (!numero || isNaN(numero)) {
        resultado.innerText = "Por favor, ingresa un número válido.";
        return;
    }

    numero = parseInt(numero);
    if (esPrimo(numero)) {
        resultado.innerText = "El número " + numero + " es primo.";
    } else {
        resultado.innerText = "El número " + numero + " no es primo.";
    }
});

function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}