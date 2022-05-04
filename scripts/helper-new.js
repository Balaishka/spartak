// Body 

const body = document.querySelector('body');

// Поиск

const search = document.querySelector('.desktopHeader__LangContainer-sc-dde3e47d-6');
const searchWindow = document.querySelector('.searchHeader__Container-sc-3e011df-0');
const searchClose = searchWindow.querySelector('.search-close');

// Корзина

const basket = document.querySelector('.basket');
const popupBackground = document.querySelector('.popup-bg');
const basketContainer = document.querySelector('.basket-container');
const basketClose = document.querySelector('.basket-close');

const basketTickets = document.querySelector('.basket-tickets');
const basketShop = document.querySelector('.basket-shop');

const basketTicketsContent = document.querySelector('.basket-tickets__content');
const basketShopContent = document.querySelector('.basket-shop__content');

// Корзина мобильная

const basketMobile = document.querySelector('.basket-mobile');
const popupBackgroundMobile = document.querySelector('.popup-bg-mobile');
const basketContainerMobile = document.querySelector('.basket-container-mobile');
const basketCloseMobile = document.querySelector('.basket-close-mobile');

const basketTicketsMobile = document.querySelector('.basket-tickets_mobile');
const basketShopMobile = document.querySelector('.basket-shop_mobile');

const basketTicketsContentMobile = document.querySelector('.basket-tickets__content_mobile');
const basketShopContentMobile = document.querySelector('.basket-shop__content_mobile');

// Меню

const burger = document.querySelector('.mobileHeader__IconContainer-sc-906384ad-2');
const menu = document.querySelector('.mobileMenu__MobileMenuContainer-sc-21cb2d7-0');
const menuClose = document.querySelector('.menu-close');

// Шапка

const headerMobile = document.querySelector('.mobileHeader__Spacer-sc-906384ad-0');
const headerContainerMobile = document.querySelector('.mobileHeader__MobileHeaderContainer-sc-906384ad-1');

function openSearch() {
    searchWindow.classList.remove('ejdxId');
    searchWindow.classList.add('bSRzwD');
}

function closeSearch() {
    searchWindow.classList.remove('bSRzwD');
    searchWindow.classList.add('ejdxId');
}

function openBasket(popupBg, basket) {
    popupBg.classList.remove('iBxIpi');
    popupBg.classList.add('hxwLib');

    basket.classList.remove('iguwRV');
    basket.classList.add('fofLYV');

    body.style.overflow = 'hidden';
}

function closeBasket(popupBg, basket) {
    popupBg.classList.remove('hxwLib');
    popupBg.classList.add('iBxIpi');

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

basketTickets.addEventListener('click', () => {
    basketTickets.classList.remove('exmghx');
    basketTickets.classList.add('kNsZAC');

    basketShop.classList.remove('kNsZAC');
    basketShop.classList.add('exmghx');

    basketTicketsContent.style.display = 'block';
    basketShopContent.style.display = 'none';
});

basketShop.addEventListener('click', () => {
    basketShop.classList.remove('exmghx');
    basketShop.classList.add('kNsZAC');

    basketTickets.classList.remove('kNsZAC');
    basketTickets.classList.add('exmghx');

    basketTicketsContent.style.display = 'none';
    basketShopContent.style.display = 'block';
});

basketTicketsMobile.addEventListener('click', () => {
    basketTicketsMobile.classList.remove('exmghx');
    basketTicketsMobile.classList.add('kNsZAC');

    basketShopMobile.classList.remove('kNsZAC');
    basketShopMobile.classList.add('exmghx');

    basketTicketsContentMobile.style.display = 'block';
    basketShopContentMobile.style.display = 'none';
});

basketShopMobile.addEventListener('click', () => {
    basketShopMobile.classList.remove('exmghx');
    basketShopMobile.classList.add('kNsZAC');

    basketTicketsMobile.classList.remove('kNsZAC');
    basketTicketsMobile.classList.add('exmghx');

    basketTicketsContentMobile.style.display = 'none';
    basketShopContentMobile.style.display = 'block';
});

let valueScroll = 0;

window.addEventListener('scroll', function() {
    if (scrollY > valueScroll) {
        hideHeader();
    } else {
        showHeader();
    }

    valueScroll = scrollY;
});