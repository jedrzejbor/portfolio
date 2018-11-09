const firstLook = document.querySelector('.first-look');
const firstBtn = document.querySelector('.first-button');
const secondBtn = document.querySelector('.second-button');

// const newScreen = new Function ("")

firstBtn.addEventListener('click', function () {
    firstLook.classList.toggle("active");
})