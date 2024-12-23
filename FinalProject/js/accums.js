itemWrap = document.getElementById('itemWrap');


function Accum(img, title, price, oldPrice, disclamer,available) {
    this.img = img;
    this.title = title;
    this.price = price;

    this.oldPrice = oldPrice;
    this.disclamer = disclamer;
    this.available = available;
}

var accum = [
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah', '2900 руб.', '2199 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', ''),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah', '2900 руб.', '2199 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'inCount'),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah', '2900 руб.', '2199 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'notInCount'),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah', '2900 руб.', '2199 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', ''),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah', '2900 руб.', '2199 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'inCount'),
    new Accum('../../../img/png/acums/magnum.png', 'MAGNUM 60Ah', '2900 руб.', '2199 руб.', 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом', 'notInCount')
]

function renderAccum(accum) {
    var html = '';
    var disableInput;
    
    for (var i = 0; i < accum.length; i++) {
        if (accum[i].available==='notInCount'){
            disableInput = 'disabled';
        }else{
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
                    </div>
                    <div class="button">
                        <button class="buttonClass">ПОДРОБНЕЕ</button>
                    </div>
                </div>`
    }
    itemWrap.innerHTML = html;
}
renderAccum(accum);


