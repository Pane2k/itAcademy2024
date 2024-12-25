var burgerButton = document.querySelector('#burgerButton');
var menu = document.querySelector('#menuWrap');
var serviceIdWrap = document.querySelector('#serviceIdWrap');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var isMenuActive = false;
burgerButton.addEventListener('click', () => {
    // add to menu class "active"
    isMenuActive = !isMenuActive;

    if (menu.classList.contains('active')) {
        // add class slideOut and after 0.2s remove class slideOut and add class slideIn
        burgerButton.classList.remove('activeBurger');
        menu.classList.add('slideOut');
        menu.classList.remove('slideIn');
        sleep(300).then(() => {
            if (!isMenuActive) {
                menu.classList.remove('slideOut');
                menu.classList.remove('active');
            }
        });

    }
    else {
        // add class "active"
        burgerButton.classList.add('activeBurger');
        menu.classList.add('slideIn');
        menu.classList.add('active');
    }
});


searchButton = document.getElementById('search');
searchBarId = document.getElementById('searchBar');
searchInput = document.getElementById('searchInput');
isSearchShow = false;
searchButton.addEventListener('click', function () {
    isSearchShow = !isSearchShow
    console.log(isSearchShow)
    if (isSearchShow) {
        searchInput.focus()
        searchBarId.classList.add('activeShowBar')
    } else {
        searchBarId.classList.remove('activeShowBar')
    }
})