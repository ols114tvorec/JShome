// 1.Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

var a = prompt('Если переменная a равна 10?');
if (a == 10) 
    {alert('Верно');
}
else
    {alert("Неверно");
} 


// 2. Вводим в окно число от 0 до 100; есть 4 интервала; Первый это 0 - 25 Второй 25-50 Третий 50-75 Четвертый 75-100;

var n = prompt ("Вводим в окно число от 0 до 100");

if (n>=0 && n<=25 )
    {alert("1");
}
else if
    (n>25 && n<=50) 
    {alert("2");
}
else if
    (n>50 && a<=75) 
    {alert("3");
}
else if
    (a>75 && a<=100) 
    {alert("4");
}
else
    {alert("Bag");
}


// 3. Переменная number может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case

var number = prompt("Сезон");
 switch (number) {
     
    case "1":
    alert("Зима");
    break;

    case "2":
    alert("весна");
    break;

    case "3":
    alert("лето");
    break;

    case "4":
    alert("осень");
    break;

    default:
    alert("Bag");
    break;
}


// 4. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). Решите задачу через switch-case

var month = prompt('Какой месяц?');

switch (month) {

    case '12':
    case '1':
    case '2':
    alert ('Зима');
    break; 

    case '3':
    case '4':
    case '5': 
    alert ('Весна');
    break;

    case '6':
    case '7':
    case '8': 
    alert ('Лето');
    break;

    case '9':
    case '10':
    case '11': 
    alert ('Осень');
    break;

    default: 
    alert ('Подумайте ещё!')
}