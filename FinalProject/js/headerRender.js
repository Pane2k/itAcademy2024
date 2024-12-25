header = document.getElementsByTagName('header');
var repo='';
if (window.location.hostname == 'pane2k.github.io') {
    repo = 'https://pane2k.github.io/itAcademy2024';
  }
  else {
    repo = '';
  }

function headerRender(){
    var headerHTML = `<div class="mainColor">
            <div class="container">
                <div class="burger">
                    <button id="burgerButton">

                    </button>
                </div>
                <div class="logo">
                    <a href="${repo}/FinalProject/">
                        <img src="${repo}/FinalProject/img/svg/logo.svg" alt="logo">
                    </a>
                </div>
                <div class="menuWrap" id="menuWrap">
                    <ul>
                        <li>
                            <a href="${repo}/FinalProject/company">КОМПАНИЯ</a>
                            <ul>
                                <li>
                                    <a href="${repo}/FinalProject/company/#aboutcomapy">О КОМПАНИИ</a>
                                </li>
                                <li>
                                    <a href="${repo}/FinalProject/company/#licens">ЛИЦЕНЗИИ</a>
                                </li>
                                <li>
                                    <a href="${repo}/FinalProject/company/#partners">ПАРТНЕРЫ</a>
                                </li>
                                

                            </ul>
                        </li>
                        <li>
                            <a href="${repo}/FinalProject/catalog">КАТАЛОГ</a>
                            <ul>
                                <li class="hasChild">
                                    <a href="${repo}/FinalProject/catalog/battery">АККУМУЛЯТОРЫ</a>
                                    <ul>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/battery/magnum">АКБ MAGNUM</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ ЗВЕРЬ</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">ТЮМЕНСКИЙ<br> АККУМУЛЯТОРНЫЙ ЗАВОД</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ AKOM</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ BARS</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ ТЮМЕНСКИЙ МЕДВЕДЬ</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ ENRUN</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ UNIX (WESTA)</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ EDCON</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ AFA</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ BOSCH</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">АКБ MUTLU</a>
                                        </li>
                                        <li>
                                            <a href="${repo}/FinalProject/catalog/noitem">ОРИГИНАЛЬНЫЕ АКБ</a>
                                        </li>

                                    </ul>
                                </li>
                                <li>
                                    <a href="${repo}/FinalProject/catalog/oil">АВТОМАСЛА</a>

                                </li>
                                <li>
                                    <a href="${repo}/FinalProject/catalog/autoac">АКСЕССУАРЫ</a>
                                </li>
                                <li>
                                    <a href="${repo}/FinalProject/catalog/autochem">АВТОХИМИЯ</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="${repo}/FinalProject/service">УСЛУГИ</a>
                            <ul>
                                <li>
                                    <a href="${repo}/FinalProject/service/diagnostic">ДИАГНОСТИКА АККУМУЛЯТОРА</a>
                                </li>
                                <li>
                                    <a href="${repo}/FinalProject/service/reception">ПРИЕМ АККУМУЛЯТОРОВ</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="${repo}/FinalProject/info">ИНФОРМАЦИЯ</a>
                            <ul>
                                <li>
                                    <a href="${repo}/FinalProject/info/#links">НОВОСТИ</a>
                                </li>
                                <li>
                                    <a href="${repo}/FinalProject/info/#faq">F.A.Q</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="${repo}/FinalProject/contacts">КОНТАКТЫ</a>
                        </li>
                    </ul>
                </div>
                <div class="button">
                    <button class="buttonClass" onclick="openModalTelephone()">
                        ЗАКАЗАТЬ ЗВОНОК
                    </button>
                </div>
                <div class="searchAndCart">
                    <a id="search" href="#!">
                        <img src="${repo}/FinalProject/img/svg/Lupa.svg" alt="Лупа">
                    </a>
                    <a id="card" href="#!" data-itemsInCard="0">
                        <img src="${repo}/FinalProject/img/svg/card.svg" alt="Корзина">
                    </a>
                </div>

            </div>
        </div>
        <div id="searchBar" class="searchBarShow">
            <div class="secondContainer container">
                <div class="searchIcom">
                    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10ZM14.8941 18.7226C13.4474 19.536 11.7779 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 12.2954 19.2266 14.4101 17.9263 16.0979L25.4142 23.5858L22.5858 26.4142L14.8941 18.7226Z"
                            fill="#A5A5A5" />
                    </svg>
                </div>
                <input type="text" placeholder="Поиск по каталогу" id="searchInput">
                <div class="controls">
                    <div class="buttonSearch">
                        <button class="buttonClass">НАЙТИ</button>
                    </div>
                    <div class="closeSearch">
                        <img src="${repo}/FinalProject/img/svg/close.svg" alt="Закрыть">
                    </div>
                </div>
            </div>
        </div>`
        header[0].innerHTML = headerHTML;
}
