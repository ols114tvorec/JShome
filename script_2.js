// 1.Напишите функцию  которая будет последовательно выводить числа от 1 до 20, с интервалом между числами 100 мс.
    var i = 1;
    var number = setInterval(function() {
      console.log(i);
      if (i == 20) clearInterval(number);
      i++ }, 100)
      




// 2. Написать код при котором юзер вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.
//  -  То есть если пользователь введет число 3. Ваш код  должен посчитать сумму чисел  от 1 до 3, то есть 1+2+3 и выдать ответ 
var number = prompt("Enter any positive integer number please");
var sum = 0;

for (var index = 1; index <= number; index++) {
  sum += index; 
}
// 3. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
var a = 0;

if (a == 0 || a == 2) {
  a += 7;
}
else {
  a /= 10;
}


// 4. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так  выводим окей или же не окей
var str = "12345";

Number(str);
if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
  alert("okey");
}
else {
  alert("not okey");
}
// 5. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
var myString = "124";
var mySum = 0;

mySum = +myString[0] + +myString[1] + +myString[2];
// 6.  Есть строка из 6-ти цифр. нужно узнать что сумма первых трех цифр равняется сумме вторых трех цифр. выводим да или нет
var newString = "223124";

if (+newString[0] + +newString[1] + +newString[2] == +newString[3] + +newString[4] + +newString[5]) {
  alert("Yes");
}
else {
  alert("No");
}
// 7.  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 8. Напишите функцию которая будет принимать число и возвращать сумму этого числа.  То есть если я передаю в функцию число 123 функция должна вернуть 6. (1+2+3)
var numb;

function isNumberInRange (numb) {
  if (numb > 0 && numb < 10) {
    alert("Number in 1...10 range");
  }
  else {
    alert("Number not in 1...10 range");
  }
}
isNumberInRange(5);

// 8. Напишите функцию которая будет принимать число и возвращать сумму этого числа.  То есть если я передаю в функцию число 123
// функция должна вернуть 6. (1+2+3)

var lastNumber;

function Sum (lastNumber) {
    var arr = String(lastNumber).split("");
    var lastSum = 0;

    for (var ind = 0; ind < arr.length; ind++) {
      lastSum += Number(arr[ind]);
    }
    alert(lastSum); 
}
Sum(1234);

