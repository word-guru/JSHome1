alert('ЗАДАНИЕ №7');
const gb = 1024;
const sizeFile = 820;
let flag = true;
let count = 0;

let flesh = +prompt('Введите размер флешки(Гб):');
flesh = gb * flesh;

while(flag)
{
    let res = flesh - sizeFile;

    if(res < 0)
    {
        flag = false;
    }else if(res == 0)
    {
        flag = false;
        count++;
    }else
    {
        flesh = res;
        count++;
    }
}

alert('На флешке поместитсь ' + count + ' файла(ов) размером ' + sizeFile + 'мб');

