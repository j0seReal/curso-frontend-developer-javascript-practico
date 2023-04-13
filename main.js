const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartAsside);

function toggleDesktopMenu() {
   
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

  mobileMenu.classList.toggle('inactive');
}

function toggleCartAsside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 

    aside.classList.toggle('inactive');
}





/*
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    console.log('click');
    mobileMenu.classList.toggle('inactive');
}
*/