//flip-botton
const flipBtn = document.querySelector('.flip-btn');

//element to be flipped
const flipElement = document.querySelector('.aside');

//flip arrow
const flipArrow = document.querySelector('.none');




flipBtn.addEventListener('click', (e) => {

    e.preventDefault();

    flipElement.classList.toggle('main-up');

    if (flipElement.classList.contains('main-up')) {
       
        flipArrow.classList.toggle('rotate');

        // console.log(flipElement, flipArrow);


    }  

    else {
        flipArrow.classList.toggle('rotate');

        // console.log(flipElement, flipArrow);

    }
});