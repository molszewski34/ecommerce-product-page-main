const openMenu = document.querySelector('.nav__span-menu');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const closeMenu = document.querySelector('.menu__span');



openMenu.addEventListener('click', () => {
    menu.classList.add('menu-active');
    overlay.classList.add('active');
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu-active');
    overlay.classList.remove('active');
})

const sliderBtnNext = document.querySelector(".next");
const sliderBtnPrev = document.querySelector(".previous");
const slideOne = document.querySelector('.slider__deffault-img');

sliderBtnNext.addEventListener('click', () => {
    let mySrc = slideOne.getAttribute('src');
    if (mySrc == "images/image-product-1.jpg") {
        slideOne.setAttribute('src', "images/image-product-2.jpg");
    } else if (mySrc == "images/image-product-2.jpg") {
        slideOne.setAttribute('src', "images/image-product-3.jpg");
    } else if (mySrc == "images/image-product-3.jpg") {
        slideOne.setAttribute('src', "images/image-product-4.jpg");
    } else if (mySrc == "images/image-product-4.jpg") {
        slideOne.setAttribute('src', "images/image-product-1.jpg");
    }
})

sliderBtnPrev.addEventListener('click', () => {
    let mySrc = slideOne.getAttribute('src');
    if (mySrc == "images/image-product-1.jpg") {
        slideOne.setAttribute('src', "images/image-product-4.jpg");
    } else if (mySrc == "images/image-product-4.jpg") {
        slideOne.setAttribute('src', "images/image-product-3.jpg");
    } else if (mySrc == "images/image-product-3.jpg") {
        slideOne.setAttribute('src', "images/image-product-2.jpg");
    } else if (mySrc == "images/image-product-2.jpg") {
        slideOne.setAttribute('src', "images/image-product-1.jpg");
    }

})

const slideOverlayBtnNext = document.querySelector(".overlay-next");
const slideOverlayBtnPrev = document.querySelector(".overlay-previous");
const overlaySlideOne = document.querySelector('.slider-wth-overlay-with-overlay__deffault-img');

slideOverlayBtnNext.addEventListener('click', () => {
    let mySrc = overlaySlideOne.getAttribute('src');
    if (mySrc == "images/image-product-1.jpg") {
        overlaySlideOne.setAttribute('src', "images/image-product-2.jpg");
    } else if (mySrc == "images/image-product-2.jpg") {
        overlaySlideOne.setAttribute('src', "images/image-product-3.jpg");
    } else if (mySrc == "images/image-product-3.jpg") {
        overlaySlideOne.setAttribute('src', "images/image-product-4.jpg");
    } else if (mySrc == "images/image-product-4.jpg") {
        overlaySlideOne.setAttribute('src', "images/image-product-1.jpg");
    }


})

slideOverlayBtnPrev.addEventListener('click', () => {
    let mySrc = overlaySlideOne.getAttribute('src');
    if (mySrc == "images/image-product-1.jpg") {
        overlaySlideOne.setAttribute('src', "images/image-product-4.jpg");

    } else if (mySrc == "images/image-product-4.jpg") {
        overlaySlideOne.setAttribute('src', "images/image-product-3.jpg");
    } else if (mySrc == "images/image-product-3.jpg") {
        overlaySlideOne.setAttribute('src', "images/image-product-2.jpg");
    } else if (mySrc == "images/image-product-2.jpg") {
        overlaySlideOne.setAttribute('src', "images/image-product-1.jpg");
    }

})

const sliderImgArray = document.querySelectorAll('.slider-with-overlay__img-container img');

sliderImgArray.forEach(overlaySlide => {
    overlaySlide.addEventListener('click', focus => {
        if (focus.target == sliderImgArray[0]) {
            overlaySlideOne.setAttribute('src', "images/image-product-1.jpg");
        } else if (focus.target == sliderImgArray[1]) {
            overlaySlideOne.setAttribute('src', "images/image-product-2.jpg");
        } else if (focus.target == sliderImgArray[2]) {
            overlaySlideOne.setAttribute('src', "images/image-product-3.jpg");
        } else if (focus.target == sliderImgArray[3]) {
            overlaySlideOne.setAttribute('src', "images/image-product-4.jpg");
        }
    })
})

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const formInput = document.querySelector('#form__input');

plus.addEventListener('click', () => {
    formInput.stepUp()
})

minus.addEventListener('click', () => {
    formInput.stepDown()
})

const sliderDesktop = document.querySelectorAll('.slider__img-container img');

sliderDesktop.forEach(slide => {
    slide.addEventListener('click', imgSwitch => {
        if (imgSwitch.target == sliderDesktop[0]) {
            slideOne.setAttribute('src', "images/image-product-1.jpg");
            overlaySlideOne.setAttribute('src', "images/image-product-1.jpg");

        } else if (imgSwitch.target == sliderDesktop[1]) {
            slideOne.setAttribute('src', "images/image-product-2.jpg");
            overlaySlideOne.setAttribute('src', "images/image-product-2.jpg");

        } else if (imgSwitch.target == sliderDesktop[2]) {
            slideOne.setAttribute('src', "images/image-product-3.jpg");
            overlaySlideOne.setAttribute('src', "images/image-product-3.jpg");

        } else if (imgSwitch.target == sliderDesktop[3]) {
            slideOne.setAttribute('src', "images/image-product-4.jpg");
            overlaySlideOne.setAttribute('src', "images/image-product-4.jpg");
        }
    })
})
const sliderClick = document.querySelector('.slider-with-overlay');

slideOne.addEventListener('click', () => {
    sliderClick.classList.add('active-slider-desktop');
    overlay.classList.add('active');
})

const cartBtn = document.querySelector('.cart-btn');
const cartMenu = document.querySelector('.nav__cart-menu');

cartBtn.addEventListener('click', () => {
    cartMenu.classList.toggle('active-cart-menu');

})

const sliderCloseBtn = document.querySelector('.slider-with-overlay__close-btn')
sliderCloseBtn.addEventListener('click', () => {
    sliderClick.classList.remove('active-slider-desktop');
    overlay.classList.remove('active');
})

const confirmBtn = document.querySelector('.form__cart-confirm');
const cartContent = document.querySelector('.nav__cart-content');
const cartItemstOutput = document.querySelector('.nav-cart__input-items');
const cartValueOutput = document.querySelector('.nav-cart__input-value');
const cartItemsCounter = document.querySelector('.cart-items-value');
const cartEmpty = document.querySelector('.nav__cart-empty');
let form = document.querySelector("form");

confirmBtn.addEventListener('click', valueOfCart => {
    valueOfCart.preventDefault();
    if (formInput.value > 0) {
        cartContent.classList.add('show-sum')
        cartItemsCounter.classList.add('active-counter');
        cartEmpty.classList.add('hidden-empty')
        cartItemsCounter.textContent = formInput.value;
        cartItemstOutput.value = formInput.value;
        cartValueOutput.value = formInput.value * 125.0;
    } else if (formInput.value === 0) {
        cartItemsCounter.style.display = 'none';
    }
})

const trashCan = document.querySelector('#delete-btn');
trashCan.addEventListener('click', () => {
    if (cartItemstOutput.value >= 2) {
        cartItemstOutput.value = cartItemstOutput.value - 1;

        cartValueOutput.value = cartValueOutput.value - 125.0;
        cartItemsCounter.textContent = cartItemsCounter.textContent - 1;
    } else {
        cartContent.classList.remove('show-sum');
        cartItemsCounter.classList.remove('active-counter');
        cartEmpty.classList.remove('hidden-empty');
    }
})