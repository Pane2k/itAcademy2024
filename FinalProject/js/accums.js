itemWrap = document.getElementById('itemWrap');


function Accum(img, title, price, oldPrice, disclamer, available, characteristics) {
    this.img = img;
    this.title = title;
    this.price = price;

    this.oldPrice = oldPrice;
    this.disclamer = disclamer;
    this.available = available;
    this.characteristics = characteristics
}

function AccumCharacteristics(capacity, starting, polarity, terminals, dimensions, manufacturer, weight) {
    this.capacity = capacity;
    this.starting = starting;
    this.polarity = polarity;
    this.terminals = terminals;
    this.dimensions = dimensions;
    this.manufacturer = manufacturer;
    this.weight = weight;
}
/*Емкость, Ач: 60 
Пусковой ток, А: 500 
Полярность: Прямая/Обратная 
Клеммы: Толстые 
Pазмеры (ДхШхВ), мм: 242х175х190 
Производитель: Magnum 
Bес, кг: 14.5 */
var accumCharacteristics = new AccumCharacteristics('60', '500', 'Прямая/Обратная', 'Толстые', '242х175х190', 'Magnum', '14.5');


var accum = [
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah',  '2199 руб.', '2900 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', '', accumCharacteristics),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah',  '2199 руб.', '2900 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'inCount', accumCharacteristics),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah',  '2199 руб.', '2900 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'notInCount', accumCharacteristics),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah',  '2199 руб.', '2900 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', '', accumCharacteristics),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah',  '2199 руб.', '2900 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'inCount', accumCharacteristics),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah',  '2199 руб.', '2900 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'notInCount', accumCharacteristics)
]

function renderAccum(accum) {
    var html = '';
    var disableInput;

    for (var i = 0; i < accum.length; i++) {
        if (accum[i].available === 'notInCount') {
            disableInput = 'disabled';
        } else {
            disableInput = '';
        }
        html += `<div class="itemCard ${accum[i].available}">
                    <div class="img">
                        <img src="${accum[i].img}" alt="">
                    </div>
                    
                    <h2>${accum[i].title}</h2>
                    <p class="nodiscount">${accum[i].oldPrice}</p>
                    <p class="withDiscount">${accum[i].price}</p>
                    <p class="disclamer">${accum[i].disclamer}</p>
                    <div class="characteristic">
                        <p> <strong>Емкость, Ач:</strong> ${accum[i].characteristics.capacity}</p>
                        <p> <strong>Пусковой ток, А:</strong> ${accum[i].characteristics.starting}</p>
                        <p> <strong>Полярность:</strong> ${accum[i].characteristics.polarity}</p>
                        <p> <strong>Клеммы:</strong> ${accum[i].characteristics.terminals}</p>
                        <p> <strong>Pазмеры (ДхШхВ), мм:</strong> ${accum[i].characteristics.dimensions}</p>
                        <p> <strong>Производитель:</strong> ${accum[i].characteristics.manufacturer}</p>
                        <p> <strong>Bес, кг:</strong> ${accum[i].characteristics.weight}</p>
                        
                    </div>
                    <div class="cardWrap">
                        <div class="counter">
                            <button class="minus" id="buttonPlus${i}" onclick="if(document.getElementById('input${i}').value>0){document.getElementById('input${i}').value--}" ${disableInput}>-</button>
                            <input type="text" id="input${i}" value="0" ${disableInput}>
                            <button class="plus" id="buttonMinus${i}" onclick="if(document.getElementById('input${i}').value>=0){document.getElementById('input${i}').value++}" ${disableInput}>+</button>
                        </div>
                        <div class="button">
                            <button>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 1L17.1035 11H4" stroke="#C53720" stroke-width="2" />
                                <path d="M5 0L5 11.6667" stroke="#C53720" stroke-width="2" />
                                <path d="M5 1L0 1" stroke="#C53720" stroke-width="2" />
                                <circle cx="14.4002" cy="16.8" r="2.2" stroke="#C53720" stroke-width="2" />
                                <circle cx="7.2" cy="16.8" r="2.2" stroke="#C53720" stroke-width="2" />
                                <path d="M9 3L15 3" stroke="#C53720" stroke-width="2" />
                                <path d="M12 6V-1.78814e-07" stroke="#C53720" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                        <div class="buttona">
                            <button class="buttonClass">ПОДРОБНЕЕ</button>
                        </div>
                    </div>
                    
                </div>`
    }
    itemWrap.innerHTML = html;
}
renderAccum(accum);


viewStyleChanger = document.querySelector('#viewStyleChanger');
gridLike = document.querySelector('#gridLike');
listLike = document.querySelector('#listLike');
itemCardList = document.querySelectorAll('.itemCard');
viewStyleChanger.addEventListener('click', function () {
    console.log('click');
    if (gridLike.classList.contains('selected')) {
        gridLike.classList.remove('selected');
        gridLike.classList.add('notSelected');
        listLike.classList.remove('notSelected');
        listLike.classList.add('selected');
        itemWrap.classList.add('horizontal');

        for (let i = 0; i < itemCardList.length; i++) {
            itemCardList[i].classList.add('horizontal');
        }

    } else{
        gridLike.classList.remove('notSelected');
        gridLike.classList.add('selected');
        listLike.classList.remove('selected');
        listLike.classList.add('notSelected');

        itemWrap.classList.remove('horizontal');
        for (let i = 0; i < itemCardList.length; i++) {
            itemCardList[i].classList.remove('horizontal');

        }
    }
    })


