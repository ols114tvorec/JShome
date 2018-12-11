// function test(name) {
// console.log (name)
// }
// var = 


// function test1 (ver){
//     alert('1855n')
//     console.log (ver)
// }

var navItem = document.querySelectorAll ('.tabNav a')
var ItemTab = document.querySelectorAll ('.itemTab')

document.querySelector ('.tabNav') .onclick = function() {
    var target = e.target;
    for (var i = 0; i < navItem.lenght; i++ ){
        console.log (target === navItem [i])
            showTab(i);
        }
    }

function showTab (i) {
    itemTab [i].class
}