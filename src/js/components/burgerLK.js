export const useBurger = () => {
    const burgerButton = document.querySelector('[data-burger="button"]');
    const burgerOverlay = document.querySelector('[data-burger="overlay"]');
    const burgerSideBar = document.querySelector('[data-burger="sidebar"]');

    const openBurgerMenu = () =>{
        burgerButton.addEventListener('click', () =>{
            burgerOverlay.classList.toggle('overlay-active');
            burgerSideBar.classList.toggle('burgerActive');
        })
    };
    openBurgerMenu();

    const closeBurgerMenu = () =>{
        burgerOverlay.addEventListener('click', () => {
            burgerOverlay.classList.remove('overlay-active');
            burgerSideBar.classList.remove('burgerActive');
        })
    };
    closeBurgerMenu();
}