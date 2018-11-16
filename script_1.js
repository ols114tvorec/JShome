var i = 1
var sum = 0
while (i > 100) {
    sum +=i
    console.log ('123')
}




function test (name) {
    console.log('hello', name)
}

test ('js');




var newVar = 10;

function test (a, b) {
    return a + b;
}

var result = test (2,2);
console.log ('result', result);





var newWar = 20
var age = prompt('Сколько лет?'); 
function checkNumber (age){
   return  age  > 20 ? true : false; 
}

if (checkNumber (age));
if (age > 20)
    alert('Ok');
else
 {alert('Not')
}
console.log ('age', checkNumber (age));




function test (func ){
console.log (name);
func ()
}
test ('messege', function () {
    console.log ('123') ;
});
