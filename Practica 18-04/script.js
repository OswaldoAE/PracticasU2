document.addEventListener('DOMContentLoaded', function() {
    let slideRight = document.getElementById('slide-right');
    let slideLeft = document.getElementById('slide-left');

    const numSlides = slideLeft.querySelectorAll('.slide').length;
    let indexRight = 0;
    let indexLeft = numSlides - 1;  

    setInterval(() => {
       
        indexRight = (indexRight + 1) % numSlides;
        slideRight.style.transform = `translateY(-${indexRight * 100}vh)`;

       
        indexLeft = (indexLeft - 1 + numSlides) % numSlides;
        slideLeft.style.transform = `translateY(-${indexLeft * 100}vh)`;
    }, 5000); 
});
