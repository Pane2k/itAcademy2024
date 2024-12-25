footer = document.getElementsByTagName('footer');
var repo='';
if (window.location.hostname == 'pane2k.github.io') {
    repo = 'https://pane2k.github.io/itAcademy2024';
  }
  else {
    repo = '';
  }

function footerRender(){
    var headerHTML = `
        <div class="container">
            <div class="logoAndCR">
                <div class="logo">
                    <a href="${repo}/FinalProject/">
                        <img src="${repo}/FinalProject/img/svg/logo.svg" alt="Лого">
                    </a>
                </div>
                <p class="copyRight">
                    © 2019 PRO Auto. <br>Все права защищены.
                </p>
            </div>
            <div class="gridList">
                <div class="Company">
                    <p>КОМПАНИЯ</p>
                    <ul>
                        <li><a href="${repo}/FinalProject/company/#links">О КОМПАНИИ</a></li>
                        <li><a href="${repo}/FinalProject/company/#licens">ЛИЦЕНЗИИ</a></li>
                        <li><a href="${repo}/FinalProject/company/#partners">ПАРТНЕРЫ</a></li>
                       
                    </ul>
                </div>
                <div class="Catalog">
                    <p>КАТАЛОГ</p>
                    <ul>
                        <li><a href="${repo}/FinalProject/catalog/battery/#links">АККУМУЛЯТОРЫ</a></li>
                        <li><a href="${repo}/FinalProject/catalog/oil/#links">АВТОМАСЛА</a></li>
                        <li><a href="${repo}/FinalProject/catalog/autoac/#links">АКСЕССУАРЫ</a></li>
                        <li><a href="${repo}/FinalProject/catalog/autochem/#links">АВТОХИМИЯ</a></li>
                    </ul>
                </div>
                <div class="Servise">
                    <p>УСЛУГИ</p>
                    <ul>
                        <li><a href="${repo}/FinalProject/service/diagnostic/#links">ДИАГНОСТИКА АККУМУЛЯТОРА</a></li>
                        <li><a href="${repo}/FinalProject/service/reception/#links">ПРИЕМ АККУМУЛЯТОРОВ</a></li>
                    </ul>
                </div>
                <div class="Info">
                    <p>ИНФОРМАЦИЯ</p>
                    <ul>
                        <li><a href="${repo}/FinalProject/info/#links">НОВОСТИ</a></li>
                        <li><a href="${repo}/FinalProject/info/#faq">ВОПРОС - ОТВЕТ</a></li>
                    </ul>
                </div>
            </div>
            <div class="contact">
                <div class="phoneNumber"><a href="tel://0">+7 (342) 279-36-13</a></div>
                <div class="email"><a href="mailto://0">proauto59@yandex.ru</a></div>
                <div class="footer__Button"><button class="buttonClass" onclick="openModalTelephone()">ЗАКАЗАТЬ ЗВОНОК</button></div>
            </div>
        </div>`
        footer[0].innerHTML = headerHTML;
}
