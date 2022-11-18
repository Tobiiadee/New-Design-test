//flip-botton
const flipBtn = document.querySelector('.flip-btn');

//element to be flipped
const flipElement = document.querySelector('.aside');

flipBtn.addEventListener('click', (e) => {
    flipElement.classList.toggle('main-up');

    if (flipElement.classList.contains('main-up')) {
        
    }  
});