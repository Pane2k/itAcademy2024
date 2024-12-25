footer = document.getElementsByTagName('footer');
console.log(header);
var repo='';
if (window.location.hostname == 'pane2k.github.io') {
    repo = 'https://pane2k.github.io/itAcademy2024';
  }
  else {
    repo = '';
  }

function footerRender(){
    console.log(header);
    var headerHTML = `
        <div class="container">
            <div class="logoAndCR">
                <div class="logo">
                    <a href="${repo}/FinalProject/">
                        <img src="${repo}/FinalProject/img/svg/logo.svg" alt="">
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
                        <li><a href="${repo}/FinalProject/company/#aboutcomapy">О КОМПАНИИ</a></li>
                        <li><a href="${repo}/FinalProject/company/#licens">ЛИЦЕНЗИИ</a></li>
                        <li><a href="${repo}/FinalProject/company/#partners">ПАРТНЕРЫ</a></li>
                       
                    </ul>
                </div>
                <div class="Catalog">
                    <p>КАТАЛОГ</p>
                    <ul>
                        <li><a href="${repo}/FinalProject/catalog/battery">АККУМУЛЯТОРЫ</a></li>
                        <li><a href="${repo}/FinalProject/catalog/oil">АВТОМАСЛА</a></li>
                        <li><a href="${repo}/FinalProject/catalog/autoac">АКСЕССУАРЫ</a></li>
                        <li><a href="${repo}/FinalProject/catalog/autochem">АВТОХИМИЯ</a></li>
                    </ul>
                </div>
                <div class="Servise">
                    <p>УСЛУГИ</p>
                    <ul>
                        <li><a href="${repo}/FinalProject/service/diagnostic">ДИАГНОСТИКА АККУМУЛЯТОРА</a></li>
                        <li><a href="${repo}/FinalProject/service/reception">ПРИЕМ АККУМУЛЯТОРОВ</a></li>
                    </ul>
                </div>
                <div class="Info">
                    <p>ИНФОРМАЦИЯ</p>
                    <ul>
                        <li><a href="${repo}/FinalProject/info/#news">НОВОСТИ</a></li>
                        <li><a href="${repo}/FinalProject/info/#faq">ВОПРОС - ОТВЕТ</a></li>
                    </ul>
                </div>
            </div>
            <div class="contact">
                <div class="phoneNumber"><a href="tel://0">+7 (342) 279-36-13</a></div>
                <div class="email"><a href="mailto://0">proauto59@yandex.ru</a></div>
                <div class="footer__Button"><button class="buttonClass">ЗАКАЗАТЬ ЗВОНОК</button></div>
            </div>
        </div>`
        footer[0].innerHTML = headerHTML;
}
