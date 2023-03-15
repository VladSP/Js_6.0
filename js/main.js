// // for (начало; условие; шаг) {
// //     тело цикла
// // }
// // for (начало; условие; шаг) {
// //     тело цикла
// // }

// // do..while

// // do {
// //     тело цикла
// // }
// // while (условие)
// let a, b, h;

// do {
//     a = +prompt('Enter number a', '1');
// } while (isNaN(a) || !a);

// document.write('a = ' + a + '<br>');
    
// do {
//     b = +prompt('Enter number b', '5');
// } while (isNaN(b) || !b || b <= a);

// document.write('b = ' + b + '<br>');
// do {
//     h = +prompt('Enter step', '1');
// } while (isNaN(h) || !h || b < 0);

// document.write('h = ' + h + '<br>');

// sum = 0;
// for (a; a <= b; a+=h) {
//     console.log(a);
//     for (j = 1, factorial = 1; j <= a;  j++) {
//         console.log(`${j}`);
//         factorial = factorial * j;
//     }
//     sum += factorial;
// }
// document.write(sum);
// 3! = 1 * 2 * 3

// 2! = 1 * 2

// 2! + 3! = sum



// var browser = prompt('Your browser, please...');
// switch (browser) {
//     case 'Chrome':
//     case 'Mozilla':
//     case 'Opera':
//         document.write(navigator.userAgent);
//         break;
//     default:
//         document.write('Your browser is not popular, friend I believe it is not IE');
// }

// if (browser == 'Chrome') {
//     document.write('Your browser is ...' + browser);
// }

// for (let i = 0; i < 15; i++) {
//     if (i % 3 == 0) continue;
//         console.log(i);
    
// }

// let a = 6;
// let b = 8;

// metka: for (let i = 1; i < a; i++) {
//             for (let j = 1; j <= b; j++) {
//                 document.write(i + ' , ' + j + '<br>');
//                 let symb = prompt('Enter your number' + i + ' ' + j );
//                 if (!symb) break metka;
//                 document.write('Real: ' + i + ' ' + j + '; ' + 'Symb: ' + symb + '<br>');

//             }
// }

let sum = 0;
for (let i = 1; i <= 55; i++){
    if (i % 4 == 0) continue;
    sum += i;
}
console.log(sum);

