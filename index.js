const menuIcon = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-nav');
const menuEmail = document.querySelector('.number-email');
    menuIcon.addEventListener('click', function (e){
        document.body.classList.toggle('_lock')
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuEmail.classList.toggle('_active');
    })