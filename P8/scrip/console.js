function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  function calculateOhms() {
    let operation;
    do {
      operation = prompt("¿Qué deseas calcular? (voltaje, corriente, resistencia)").toLowerCase();
      if (!["voltaje", "corriente", "resistencia"].includes(operation)) {
        alert("Por favor, ingresa una operación válida.");
      }
    } while (!["voltaje", "corriente", "resistencia"].includes(operation));
  
    if (operation === "voltaje") {
      let corriente, resistencia;
      do {
        corriente = parseFloat(prompt("Ingresa la corriente en amperios (A):"));
        if (!isNumeric(corriente)) {
          alert("Por favor, ingresa un valor numérico para la corriente.");
        }
      } while (!isNumeric(corriente));
  
      do {
        resistencia = parseFloat(prompt("Ingresa la resistencia en ohmios (Ω):"));
        if (!isNumeric(resistencia)) {
          alert("Por favor, ingresa un valor numérico para la resistencia.");
        }
      } while (!isNumeric(resistencia));
  
      const voltaje = corriente * resistencia;
      console.log("El voltaje es: " + voltaje.toFixed(2) + " V");
    } else if (operation === "corriente") {
      let voltaje, resistencia;
      do {
        voltaje = parseFloat(prompt("Ingresa el voltaje en voltios (V):"));
        if (!isNumeric(voltaje)) {
          alert("Por favor, ingresa un valor numérico para el voltaje.");
        }
      } while (!isNumeric(voltaje));
  
      do {
        resistencia = parseFloat(prompt("Ingresa la resistencia en ohmios (Ω):"));
        if (!isNumeric(resistencia)) {
          alert("Por favor, ingresa un valor numérico para la resistencia.");
        }
      } while (!isNumeric(resistencia));
  
      const corriente = voltaje / resistencia;
      console.log("La corriente es: " + corriente.toFixed(2) + " A");
    } else if (operation === "resistencia") {
      let voltaje, corriente;
      do {
        voltaje = parseFloat(prompt("Ingresa el voltaje en voltios (V):"));
        if (!isNumeric(voltaje)) {
          alert("Por favor, ingresa un valor numérico para el voltaje.");
        }
      } while (!isNumeric(voltaje));
  
      do {
        corriente = parseFloat(prompt("Ingresa la corriente en amperios (A):"));
        if (!isNumeric(corriente)) {
          alert("Por favor, ingresa un valor numérico para la corriente.");
        }
      } while (!isNumeric(corriente));
  
      const resistencia = voltaje / corriente;
      console.log("La resistencia es: " + resistencia.toFixed(2) + " Ω");
    } else {
      console.log("Operación no reconocida");
    }
  }
  
  calculateOhms();