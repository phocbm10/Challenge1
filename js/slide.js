const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator');
let index = 0;

function createIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = i + 1;
        div.setAttribute('onclick', "indicatorSlide(this)");
        div.id = i;
        if (i == 0) {
            div.className = 'active';
        }
        indicator.appendChild(div);
    }
}
createIndicator();

function updateIndicator() {
    for (let i = 0; i < slides.length; i++) {
        indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
}


function indicatorSlide(element) {
    index = element.id;
    updateIndicator();
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

prev.addEventListener('click', function () {
    prevSlide();
    updateIndicator();
});

function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlide();
}

next.addEventListener('click', function () {
    nextSlide();
    updateIndicator();
})

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

var timer = setInterval(autoplay, 4000);

function autoplay() {
    nextSlide();
    updateIndicator();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoplay, 4000);
}