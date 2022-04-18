// Body 

const body = document.querySelector('body');

// Поиск

const search = document.querySelector('.desktopHeader__LangContainer-sc-dde3e47d-6');
const searchWindow = document.querySelector('.searchHeader__Container-sc-66c5a050-0');
const searchClose = searchWindow.querySelector('.search-close');

// Корзина

const basket = document.querySelector('.basket');
const popupBackground = document.querySelector('.popup-bg');
const basketContainer = document.querySelector('.basket-container');
const basketClose = document.querySelector('.basket-close');

// Корзина мобильная

const basketMobile = document.querySelector('.basket-mobile');
const popupBackgroundMobile = document.querySelector('.popup-bg-mobile');
const basketContainerMobile = document.querySelector('.basket-container-mobile');
const basketCloseMobile = document.querySelector('.basket-close-mobile');

// Меню

const burger = document.querySelector('.mobileHeader__IconContainer-sc-906384ad-2');
const menu = document.querySelector('.mobileMenu__MobileMenuContainer-sc-21cb2d7-0');
const menuClose = document.querySelector('.menu-close');

// Шапка

const headerMobile = document.querySelector('.mobileHeader__Spacer-sc-906384ad-0');
const headerContainerMobile = document.querySelector('.mobileHeader__MobileHeaderContainer-sc-906384ad-1');

// Схема

const schemeSectors = document.querySelector('.sectors__sheme');
const schemeWindow = document.querySelector('.sectors__choice-block');
const buttonSchemeWindow = schemeWindow.querySelector('.sectors__close');

//  Схема мест

const schemePlace = document.querySelector('.place__scheme-img');
const schemePlaceOrder = document.querySelector('.place-order');

function openSearch() {
    searchWindow.classList.remove('fOxsBH');
    searchWindow.classList.add('gSSMqJ');
}

function closeSearch() {
    searchWindow.classList.remove('gSSMqJ');
    searchWindow.classList.add('fOxsBH');
}

function openBasket(popupBg, basket) {
    popupBg.classList.remove('eGKEWQ');
    popupBg.classList.add('hxwLib');

    basket.classList.remove('iguwRV');
    basket.classList.add('fofLYV');

    body.style.overflow = 'hidden';
}

function closeBasket(popupBg, basket) {
    popupBg.classList.remove('hxwLib');
    popupBg.classList.add('eGKEWQ');

    basket.classList.remove('fofLYV');
    basket.classList.add('iguwRV');

    body.style.overflow = 'initial';
}

function openMenu() {
    menu.classList.remove('hXlGKy');
    menu.classList.add('ieQHLr');

    body.style.overflow = 'hidden';
}

function closeMenu() {
    menu.classList.remove('ieQHLr');
    menu.classList.add('hXlGKy');

    body.style.overflow = 'initial';
}

function showHeader() {
    headerMobile.classList.remove('ftVVBb');
    headerMobile.classList.add('bxhbqQ');

    headerContainerMobile.classList.remove('gfqdLN');
    headerContainerMobile.classList.add('cJZSRA');
}

function hideHeader() {
    headerMobile.classList.remove('bxhbqQ');
    headerMobile.classList.add('ftVVBb');

    headerContainerMobile.classList.remove('cJZSRA');
    headerContainerMobile.classList.add('gfqdLN');
}

// Обработчики событий

search.addEventListener('click', openSearch);

searchClose.addEventListener('click', closeSearch);

basket.addEventListener('click', () => {
    openBasket(popupBackground, basketContainer);
});

popupBackground.addEventListener('click', () => {
    closeBasket(popupBackground, basketContainer);
});

basketClose.addEventListener('click', () => {
    closeBasket(popupBackground, basketContainer);
});

basketMobile.addEventListener('click', () => {
    openBasket(popupBackgroundMobile, basketContainerMobile);
});

popupBackgroundMobile.addEventListener('click', () => {
    closeBasket(popupBackgroundMobile, basketContainerMobile);
});

basketCloseMobile.addEventListener('click', () => {
    closeBasket(popupBackgroundMobile, basketContainerMobile);
});

burger.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

if (schemeSectors) {
    schemeSectors.addEventListener('click', () => {
        schemeWindow.classList.add('sectors__choice-block_opened');
    });
}

if (buttonSchemeWindow) {
    buttonSchemeWindow.addEventListener('click', () => {
        schemeWindow.classList.remove('sectors__choice-block_opened');
    });
}

if (schemePlace) {
    schemePlace.addEventListener('click', () => {
        schemePlaceOrder.classList.add('place-order_opened');
    });
}

let valueScroll = 0;

window.addEventListener('scroll', function() {
    if (scrollY > valueScroll) {
        hideHeader();
    } else {
        showHeader();
    }

    valueScroll = scrollY;
});