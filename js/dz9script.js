alert('ЗАДАНИЕ №9');
let num = +prompt('Введите 3-х значное число:');
let temp = 10;
let flag = 3;
let res = '';

while(flag > 0)
{
    res = res + num % temp;
    num = parseInt(num / temp,10);
    flag--;
}
alert('Результат  = '+ res);