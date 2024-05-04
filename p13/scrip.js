let targetNumber;
let attempts = 0;
const maxAttempts = 5;

function setNewNumber() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("attempts").textContent = "Intentos: " + attempts + "/" + maxAttempts;
    document.getElementById("feedback").textContent = "";
}

function checkGuess() {
    if (!targetNumber) {
        alert("Por favor, establece un nuevo número antes de adivinar.");
        return;
    }

    // Obtener el valor ingresado por el usuario
    const userGuess = parseInt(document.getElementById("guessField").value);

    // Verificar si el valor ingresado es un número
    if (isNaN(userGuess)) {
        document.getElementById("feedback").textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Verificar si el número es negativo o mayor a 100
    if (userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").textContent = "Por favor, ingresa un número dentro del rango válido (1-100).";
        return;
    }

    // Incrementar el número de intentos
    attempts++;

    // Verificar si se han excedido los intentos máximos
    if (attempts > maxAttempts) {
        document.getElementById("feedback").textContent = "¡Has excedido el número máximo de intentos! El número era: " + targetNumber;
        return;
    }

    // Comparar el número ingresado con el número objetivo
    if (userGuess === targetNumber) {
        document.getElementById("feedback").textContent = "¡Felicidades! ¡Adivinaste el número en " + attempts + " intentos!";
    } else {
        // Calcular la distancia entre el número ingresado y el número objetivo
        const difference = Math.abs(targetNumber - userGuess);
        let feedbackMessage = "";

        // Determinar el grado de "calor" basado en la distancia
        if (difference < 10) {
            feedbackMessage = "¡Caliente!";
            document.getElementById("feedback").classList.remove("cold", "warm");
            document.getElementById("feedback").classList.add("hot");
        } else if (difference < 30) {
            feedbackMessage = "¡Tibio!";
            document.getElementById("feedback").classList.remove("cold", "hot");
            document.getElementById("feedback").classList.add("warm");
        } else {
            feedbackMessage = "¡Frío!";
            document.getElementById("feedback").classList.remove("warm", "hot");
            document.getElementById("feedback").classList.add("cold");
        }

        // Mostrar el mensaje de retroalimentación
        document.getElementById("feedback").textContent = feedbackMessage;
    }

    // Actualizar el contador de intentos
    document.getElementById("attempts").textContent = "Intentos: " + attempts + "/" + maxAttempts;
}

function resetGame() {
    targetNumber = null;
    attempts = 0;
    document.getElementById("guessField").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("attempts").textContent = "";
}