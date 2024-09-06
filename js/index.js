const btnNext = document.getElementById('btnNext');
const btnPrevious = document.getElementById('btnPrevious');
const contentContainer = document.getElementById('contentContainer');
const contentSpanElement = document.querySelector('#contentContainer span');
const contentH1Element = document.querySelector('#contentContainer H1');
const contentButtonElement = document.querySelector('#contentContainer Button');

btnNext.addEventListener('click', function() {
    contentSpanElement.innerText = 'Product'
    contentH1Element.innerText = 'Welcome to my world!';
    contentButtonElement.innerText = 'Shop  now next';
    contentContainer.style.backgroundImage = 'url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)';
    console.log('I am next button');
});

btnPrevious.addEventListener('click', function() {
    contentSpanElement.innertext = 'Product'
    contentH1Element.innerText = 'Welcome to my world!';
    contentButtonElement.innerText = 'Shop  now previous';
    contentContainer.style.backgroundImage = 'url(https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)';
    console.log('I am previous button');
});