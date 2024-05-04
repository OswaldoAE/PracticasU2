
  // JavaScript para controlar el slider
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slider-img');
  const text = document.querySelector('.slider-text');

  function showSlide(index) {
    // Ocultar todas las imágenes
    slides.forEach(slide => slide.style.display = 'none');
    // Mostrar la imagen actual
    slides[index].style.display = 'block';
    slides[index].style.animation = 'slide-up 1s ease';
    text.style.animation = 'slide-down 0.5s ease';
    
  }

  function updateText(index) {
    // Actualizar texto correspondiente al slide
    switch (index) {
      case 0:
        text.innerHTML = '<h2>Flor Lavanda</h2><p>La Lavanda es una de las plantas aromáticas por excelencia</p>';
        break;
      case 1:
        text.innerHTML = '<h2>Las Rosas</h2><p>conocidas como rosas o rosales son una serie de arbustos, normalmente espinosos</p>';
        break;
      case 2:
        text.innerHTML = '<h2>Árboles Exoticos</h2><p>especies de árboles que se encuentran fuera de su hábitat natural o región originaria</p>';
        break;
      // Agrega más casos según el número de slides
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    updateText(currentIndex);

  }

  // Mostrar el primer slide al cargar la página
  showSlide(currentIndex);
  updateText(currentIndex);

  // Cambiar al siguiente slide cada 3 segundos (3000 milisegundos)
  setInterval(nextSlide, 3000);
