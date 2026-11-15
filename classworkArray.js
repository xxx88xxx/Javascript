//среднее значение чисел или суммы в массиве

let numbers = []
function number(n) {
    numbers.push(n);
    console.log(`number ${n} added to array`);
}
number(5);
number(7);
number(1);
console.log(numbers);

function avarage() {
    let sum = 0;
    for (let n = 0; n < numbers.length; n++) {
        sum = sum + numbers[n]
    }
    console.log(sum);
    let avarageNumber = sum / numbers.length
    console.log(avarageNumber);
}
avarage();

/*


1. почему открытый массив без аргумента значения
2. строка 6-7-8 что это, и что за строки и она вызываются вызывают функцию без console.log
3. в каком порядке идет считывание кода итерация
4. почему создали функция avarage?
5.в 13 строке почему написали букву n или можно писать любую букву
6. как эта функция видит первую часть кода с массивами?*/