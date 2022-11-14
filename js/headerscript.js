// hamburger menu

const mobileNav = document.querySelector('.nav_items');
const burgerIcon = document.querySelector('.burger');



burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active'); 
   
})