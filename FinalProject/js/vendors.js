wrapVendos = document.getElementById('wrapVendos');

function Comapany(name, description, img, url) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.url = url;
}
var companys = [
    new Comapany("АКБ MAGNUM", "Компания «Кайнар – АКБ», Казахстан", "1", "magnum"),
    new Comapany("АКБ ЗВЕРЬ", 'Компания «Аккумуляторные технологии» – ООО "АкТех". Иркутская область, г. Свирск', "2", "magnum"),
    new Comapany("ТЮМЕНСКИЙ А З", 'АО "Тюменский аккумуляторный завод" Россия, г. Тюмень', "3", "magnum"),
    new Comapany("АКБ AFA", 'Аккумуляторы AFA выпускаются на заводах концерна "Johnson Controls". Страна: Чехия', "4", "magnum"),
    new Comapany("АКБ AKOM", 'АО "ТОРГОВЫЙ ДОМ АКОМ" Россия, Самарская область, г. Тольятти', "5", "magnum"),
    new Comapany("АКБ BARS", "Компания «Кайнар – АКБ», Казахстан", "6", "magnum"),
    new Comapany("АКБ BOSCH", ' "VB Autobatterie Gmbh & Co. KgaA" ,  Германия, Гановер', "7", "magnum"),
    new Comapany("АКБ EDCON", 'Компания «Кайнар – АКБ», Казахстан', "8", "magnum"),
    new Comapany("АКБ ENRUN", ' AUTOPART S.A. Польша, г. Мелец', "9", "magnum"),
    new Comapany("АКБ MUTLU", 'MUTLU AKU, Турция', "10", "magnum"),
    new Comapany("АКБ UNIX (WESTA)", 'Аккумуляторы производятся на заводах международной корпорации "WESTA"', "11", "magnum"),
    new Comapany("АКБ ТЮМЕНСКИЙ МЕДВЕДЬ", 'ЗАО МПКФ "Алькор" Россия, г. Тюмень', "12", "magnum"),
    new Comapany("Гелиевые АКБ OPTIMA", 'Производство: США/Мексика', "13", "magnum"),
    new Comapany("Оригинальные АКБ", "", "14", "magnum"),
    
]

    
function renderVendors(companys) {
    var html = '';
    for (var i = 0; i < companys.length; i++) {
            html += `<div class="vendorCard">
                        <div class="imgCard">
                            <img src="../../img/jpg/vendorlogo/${companys[i].img}.jpg" alt="">
                        </div>
                        <div class="textCard">
                            <div class="textWrap">
                                <h3>${companys[i].name}</h3>
                                <p>${companys[i].description}</p>
                            </div>
                            <div class="button">
                                <button class="buttonClass mediumButton" onclick="location.href='${companys[i].url}'">ПОДРОБНЕЕ</button>
                            </div>
                        </div>
                    </div>`
    }
    wrapVendos.innerHTML = html;

}
renderVendors(companys);