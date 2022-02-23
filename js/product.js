const productImage = document.querySelector('.product-images img'); // selects all images thumbs
const productImageSlide = document.querySelector('.product-slider'); // selects image  slider element

let activeImageSlide = 0; // default slide image

productImage.forEach((item, i) => {
    item.addEventListener('click',() => { // adds click event to each image thumbnails
        productImage[activeImageSlide].classList.remove('active'); // removes active class from current image thumb
        item.classList.add('active'); // adds active class to the current or clicked image thumb
        productImageSlide.getElementsByClassName.backgroundImage = `url('{$item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

const sizeBtns = document.querySelector('.size-radio-btn'); //selected size buttons
let checkedBtn = 0; //current selected button

sizeBtns.forEach((item, i) => { // loops through each button
    item.addEventListener('click',() => { // adds click event to each
        sizeBtns[checkedBtn].classList.remove('check'); // removes active class from current button
        item.classList.add('check'); // adds check class to clicked button
        checkedBtn = i; // updating the variable
    })
})