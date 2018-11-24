// var arr = ['Вторник', 'среда']
// arr.unshift ('понедельник');
// console.log ('test', arr)

// var arr = ['Саша', 'Коля'];
// arr.push ('new Name');
// arr[arr.length - 2] = 'жора'
// console.log (arr)


// 1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// function task1 () {
//     arr1 = ['a', 'b', 'c'];
//     arr2 = [1, 2, 3];
//     arr3 = arr1.concat(arr2);
//     console.log(arr3);
// }
// 2.Дан массив [‘admin’, ‘admin’, ‘admin’]. Добавьте ему в конец элементы 1, 2, 3.
// function task2 () {
//     arr = ['admin', 'admin', 'admin'];
//     arr.push(1,2,3);
//     console.log(arr);
// }
// 3.Напишите код который  запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.

// var arr = [];
// while (true) {
//     var value = prompt ('dffdf')
//     if (value === '' || value === isNaN(value) || value === null )
//     arr.push (+value);
// }

// var sum = 0;
// for (var i = 0; i < arr.length; ++i){
//     sum += arr [i];
// }

// - Заканч ивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// - 0 не должен заканчивать ввод, это разрешённое число.
// - Выводит сумму всех значений массива;
// 4. Cоздать массив с данными;  Написать функцию которая ищет значение Value в массиве и возвращает его index, если он есть, если нету то -1;
//  Например arr = [«user», 3, 4, «b»];
//  find(arr, «user»); Должен вернуть 0.
// function find (arr, value ){
        
//         if (arr.indexOf){
//             ruturn arr.indexOf(value)}
//     return -1;
//     }

// 5. Дан массив с элементами [3, 6, 7, 5]. Найдите произведение элементов массива.
// var sum = 0;
// var arr = ['3', '6', '7','5']
// for (var i = 0; i < arr.length; ++i){
//     sum *= arr [i];
// }
// 6. Дан масar сив с элементами 21 3, 9, 45, 0, 6.  Выведите элементы которые больше 4 но меньше 10.
// var arr = [21, 3, 9, 45, 0 , 6] 
// for (var i = 0; i < arr.length; ++i);
// if (arr[i] > 3 && arr[i] < 10) {
// console.log(arr[i])
// }


// // 7. Создайте массив с положительными и отрицательрыми числами. найдите сумму положительных чисел.
// var arr = [21, 3, 9, 45, 0 , 6] 
// for (var i = 0; i < arr.length; ++i);
// if (arr[i] >= 0) {
//     sum += arr[i];
// console.log(arr[i])
// }

// // 8. Создайте массив с числами например: [10, 23, 35, 56,]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5
// var arr = [10, 23, 35, 56]
// for (var i = 0; i < arr.length; ++i); {
//     if (arr [i] [0] ==='1' || arr [i] [0] ==='5' || arr [i] [0] ==='2'){

//     }
// }





// var arr = [10, 20, 30];
// var string = "-10-20-30-";
// var newString = "" ;
// for (var i = 0; i < arr.length; ++i);
// {
//     newString = newString + '-' + arr [i]; 
// }


// var arr = [10, 20, 30];
// arr.forEach (function(item, i, arr) {
//  console.log ('item', item);
//  console.log ('item', i);
//  console.log ('item', arr);
// })




// var arr =['I' , 'LOVE', 'JS']
// var NewArrey = arr.map (function (item, index) {
//     console.log ('item', item );
//     console.log ('index', index );
//     return item;
// }
// )
// console.log ('NewArrey', NewArrey )


// var arr =['good ' , 'your', 'you']
// var NewArrey = arr.filter (function (item, index) {
// return Item.length ==3;
// }
// ) 

var arr =['apple' , 'google', 'orange']
function ap (value){
    return arr.filter (function(item){
        return item.toLowerCase() .indexOf(value.toLowerCase)
    })
}
console.log ('app', item)
