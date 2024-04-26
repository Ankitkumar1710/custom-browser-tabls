
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')

    }
}

var currentImageIndex = 0;
var sliderImages = [
    "./assets/journals/blog-1.jpg",
    "./assets/journals/blog-2.jpg",
    "./assets/journals/blog-3.jpg"
];

// Function to change the slider image
function changeSliderImage(direction) {
    var aboutImage = document.getElementById('about-image');
    
    if (direction === 'left') {
        currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    } else {
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    }
    
    aboutImage.src = sliderImages[currentImageIndex];
}

// Event listeners for left and right buttons in the slider
document.querySelector('.imageslider button:nth-child(1)').addEventListener('click', function() {
    changeSliderImage('left');
});

document.querySelector('.imageslider button:nth-child(2)').addEventListener('click', function() {
    changeSliderImage('right');
});

// Original changeBackground function for changing the background of the home section
var isBackgroundImage1 = true;

function changeBackground() {
    var home = document.getElementById('home');
    
    if (isBackgroundImage1) {
        home.style.backgroundImage = "url('./assets/header.jpg')";
    } else {
        home.style.backgroundImage = "url('./assets/header1.jpg')";
    }
    
    isBackgroundImage1 = !isBackgroundImage1;
}


const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
}

ScrollReveal().reveal('.home h1',scrollrevealOption)
ScrollReveal().reveal('.home h4',{
    ...scrollrevealOption,
    delay:800,
})
ScrollReveal().reveal('.home .btn-explore',{
    ...scrollrevealOption,
    delay:1200,
})

ScrollReveal().reveal('.about .about-title',scrollrevealOption)
ScrollReveal().reveal('.about .about-desc',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.about .item-data',{
    ...scrollrevealOption,
    delay:1200,
})
ScrollReveal().reveal('.btn-explore',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.btn-more',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.card',scrollrevealOption)

ScrollReveal().reveal('.card .image',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.card .content-card h4',{
    ...scrollrevealOption,
    delay:1600,
})
ScrollReveal().reveal('.next .card .content-card  p',{
    ...scrollrevealOption,
    delay:2000,
})



ScrollReveal().reveal('.next .card .content-card p',{
    ...scrollrevealOption,
    delay:600,
})


ScrollReveal().reveal('form .input',scrollrevealOption)
ScrollReveal().reveal('row .card',scrollrevealOption)



