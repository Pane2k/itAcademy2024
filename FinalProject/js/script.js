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



var newsElement = document.getElementById('news');
function News(img, time, title, link) {
    this.img = img;
    this.time = time;
    this.title = title;
    this.link = link;

}
var news = [
    new News('img/jpg/news/VARTA-Facebook-Bit-1-1400x920.jpg', '12 февраля 2020 года', 'У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!', '!'),
    new News('img/jpg/news/VARTA-Facebook-Bit-1-1400x920.jpg', '12 февраля 2020 года', 'У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!', '!'),
    new News('img/jpg/news/VARTA-Facebook-Bit-1-1400x920.jpg', '12 февраля 2020 года', 'У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!', '!')
]
function renderNews(news) {
    var newsElement = document.getElementById('news');
    var html = '';
    for (var i = 0; i < news.length; i++) {
        console.log(news[i])
        html +=
            `
                <div class="newCard">
                    <div class="img"><img src="${news[i].img}" alt=""></div>
                    <div class="text">
                        <p class="time">${news[i].time}</p>
                        <h3>${news[i].title}</h3>
                        <a href="${news[i].link}">
                            <svg width="51" height="20" viewBox="0 0 51 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z"
                                    fill="#C53720" />
                            </svg>
                        </a>
                    </div>
                </div>
                `
    }
    newsElement.innerHTML = html;
}
renderNews(news);

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