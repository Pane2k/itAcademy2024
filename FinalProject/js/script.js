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

function openModalTelephone() {
    console.log("openModalTelephone")
    var modalwindow = document.createElement('div');
    if (document.getElementById('modalwindow')) {
        document.getElementById('modalwindow').remove();
        document.body.style.overflow = 'auto';
    }
    else{
        document.body.appendChild(modalwindow);
        modalwindow.setAttribute('id', 'modalwindow');
        modalwindow.classList.add('modalWindow');
        document.body.style.overflow = 'hidden';
        modalwindow.innerHTML = 
        `
        <div class="modalwindow__wrap"></div>
        <div class="anotherWrap">
            <button onclick=" openModalTelephone() "><img alt="close" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNCA0TDE2IDE2IiBzdHJva2U9IiNBNUE1QTUiIHN0cm9rZS13aWR0aD0iNCIgLz4KICA8cGF0aCBkPSJNMTYgNEw0IDE2IiBzdHJva2U9IiNBNUE1QTUiIHN0cm9rZS13aWR0aD0iNCIgLz4KPC9zdmc+"></button>
            <form action="http://fe.it-academy.by/TestForm.php" method="POST">
                <h3>Заказать звонок</h3>
                <input type="hidden" name="modalwindow" value="modal" >
                <label>
                    Введите ваше имя
                    <input type="text" name="name" required>
                </label>
                <label>
                    Номер телефона
                    <input type="text" name="phone" required>
                </label>

                <button class="buttonClass mediumButton" type="submit">Отправить</button>
            </form>
        </div>
        `
    }
}