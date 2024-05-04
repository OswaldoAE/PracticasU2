var canvas = document.getElementById('myCanvas'); // Obtiene el elemento canvas del documento
var ctx = canvas.getContext('2d'); // Obtiene el contexto de dibujo en 2D del canvas
var painting = false; // Variable que indica si se está dibujando o no
var colorPicker = document.getElementById('colorPicker'); // Obtiene el elemento input de tipo color

function startDraw(e) { // Función para iniciar el dibujo
    painting = true; // Establece la variable de dibujo en true
    draw(e); // Llama a la función de dibujo pasando el evento del mouse
}

function endDraw() { // Función para finalizar el dibujo
    painting = false; // Establece la variable de dibujo en false
    ctx.beginPath(); // Inicia un nuevo trazo
}

function draw(e) { // Función para dibujar
    if (!painting) return; // Si no se está dibujando, salir de la función
    ctx.lineWidth = 10; // Establece el ancho de la línea de dibujo
    ctx.lineCap = "round"; // Establece el estilo de la línea
    ctx.strokeStyle = colorPicker.value; // Establece el color de la línea basado en el valor del color seleccionado
    ctx.lineTo(e.clientX, e.clientY); // Dibuja una línea desde la posición anterior del mouse hasta la posición actual
    ctx.stroke(); // Dibuja el trazo
    ctx.beginPath(); // Inicia un nuevo trazo
    ctx.moveTo(e.clientX, e.clientY); // Mueve el punto de inicio del próximo trazo a la posición actual del mouse
}

canvas.addEventListener('mousedown', startDraw); // Agrega un event listener para el evento 'mousedown' que llama a la función startDraw
canvas.addEventListener('mouseup', endDraw); // Agrega un event listener para el evento 'mouseup' que llama a la función endDraw
canvas.addEventListener('mousemove', draw); // Agrega un event listener para el evento 'mousemove' que llama a la función draw
