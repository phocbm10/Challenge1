const navMenu = document.querySelector('.nav__list');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('sah');
})

window.addEventListener('scroll', function(){
    const menuTop = document.querySelector('.header__content');
    const gotoTop = document.querySelector('.goto__top');
    const scrollHeight = window.pageYOffset;

    // Hide/Show menuTop
    menuTop.classList.toggle('sticky', scrollHeight > 80);

    // Hide/show gotoTop
    if(scrollHeight > 80){
        gotoTop.classList.add('showGoto__top');
        navMenu.style.top = '70px';
    } else{
        gotoTop.classList.remove('showGoto__top');
    }
})

