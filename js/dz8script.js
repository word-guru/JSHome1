alert('ЗАДАНИЕ №8');
let price = +prompt('Введите цену товара:');
let money = +prompt('Введите сумму в кошельке:');
let count = parseInt(money/price,10);
let ost = money - count * price;

if(count < 1){
    alert('Недостаточно средств');
} else{
    alert('Можете преобрести ' + count + ' шоколадки. Остаток в кошельке: ' + ost + ' руб.');}