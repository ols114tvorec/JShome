
// 1. Создайте объект в котором будут храниться суммы денег  пользователей;
//  Напишите код, который выведет сумму всех денег у пользователей;
var obj = {
    Олег: 100,
    Вася: 200,
    Коля: 300,
};
var sum = 0;

for (var name in obj) {
  sum += obj[name];
}

alert( sum );


// 2. Вывести самое большое число.
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
      };
var maxName = '';
      var max = 0;
      for (var name in obj){
      if (max < obj[name]){
max = obj[name];
maxName = name;
      }      
      }


// 3. Все числа умночить на 2; написать функцию

var salaries = {
  "Вася": 100,
  "Петя": 302,
  "Даша": 'jhkjh',
};
var sum = [];
 function objx2 (obj) {
        for (var key in obj) {
            if (typeof obj [key]); {
                obj[key] *=  2;
                sum.push (obj[key]);
                console.log(obj[key]);
                return obj[key];
            }
        }
    }

    objx2(salaries);


    
// 4. нужно написать функцию которая возвращает значение ключа.
// var arr = [ 
//        { key: 'слово', value: 'значение1' },
//        { key: 'слово2', value: 'значение2' },
//        { key: 'слово3', value: 'значение3' }
//     ];
// НАПРИМЕР: isResult(arr, 'слово3') - и функция возвращает значение ключа 'слово3'

var arr = [ 
    { key: 'слово', value: 'значение1' },
    { key: 'слово2', value: 'значение2' },
    { key: 'слово3', value: 'значение3' }
 ];

function returnValue (arr, val) {
     arr.map (function(item) {
         if (item.key === val) {
             console.log(item.value);
             return item.value;
         }
     });
 }
returnValue(arr,'слово2');
