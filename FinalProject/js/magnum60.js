
var itemCharacteristics = new AccumCharacteristics('60', '500', 'Прямая/Обратная', 'Толстые', '242х175х190', 'Magnum', '14.5');
var item = new Accum('../../../../img/jpg/MAGNUM 60Ah.jpeg', 'MAGNUM 60Ah', '2199 руб.', '2900 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'inCount', itemCharacteristics);
var itemWrap = document.getElementById('item');

if (item.available === 'notInCount') {
    disableInput = 'disabled';
} else {
    disableInput = '';
}
html = `<div class="imgwrap">
            <img src="${item.img}" alt="Фото акумулятора">
        </div>
        <div class="itemCard">
            <span>В НАЛИЧИИ</span>
            <div class="characteristic">
                <p> <strong>Емкость, Ач:</strong> ${item.characteristics.capacity}</p>
                <p> <strong>Пусковой ток, А:</strong> ${item.characteristics.starting}</p>
                <p> <strong>Полярность:</strong> ${item.characteristics.polarity}</p>
                <p> <strong>Клеммы:</strong> ${item.characteristics.terminals}</p>
                <p> <strong>Pазмеры (ДхШхВ), мм:</strong> ${item.characteristics.dimensions}</p>
                <p> <strong>Производитель:</strong> ${item.characteristics.manufacturer}</p>
                <p> <strong>Bес, кг:</strong> ${item.characteristics.weight}</p>
            </div>
            <p class="withDiscount">${item.price}</p>
            <p class="nodiscount">${item.oldPrice}</p>
            <p class="disclamer">${item.disclamer}</p>
            <div class="cardWrap">
                <div class="counter">
                    <button class="minus" id="buttonPlus"
                        onclick="if(document.getElementById('input').value>0){document.getElementById('input').value--}"
                        ${disableInput}>-</button>
                    <input type="text" id="input" value="0" ${disableInput}>
                    <button class="plus" id="buttonMinus"
                        onclick="if(document.getElementById('input').value>=0){document.getElementById('input').value++}"
                        ${disableInput}>+</button>
                </div>
                <div class="button">
                    <button>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
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
            </div>
        </div>`;

itemWrap.innerHTML = html;
