var newsElement = document.getElementById('news');

var repo='';
if (window.location.hostname == 'pane2k.github.io') {
    repo = 'https://pane2k.github.io/itAcademy2024';
  }
  else {
    repo = '';
  }
function News(img, time, title, link) {
    this.img = img;
    this.time = time;
    this.title = title;
    this.link = link;
}




var news = [
    new News(repo + '/FinalProject/img/jpg/news/newlogo.jpg', '12 февраля 2020 года', 'У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!', '#!'),
    new News(repo + '/FinalProject/img/jpg/news/VARTA-Facebook-Bit-1-1400x920.jpg', '10 февраля 2020 года', 'ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA', '#!'),
    new News(repo + '/FinalProject/img/jpg/news/consult.jpeg', '3 февраля 2020 года', 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE', '#!')
]
function renderNews(news) {
    var newsElement = document.getElementById('news');
    var html = '';
    for (var i = 0; i < news.length; i++) {
        html +=
            `
                <div class="newCard">
                    <div class="img"><img src="${news[i].img}" alt="Превью новости"></div>
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