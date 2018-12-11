var modal = document.querySelector("#modal"),
    closebutton = document.querySelector("#close-button"),
    onbutton = document.querySelector("#openbutton"),
    form = document.querySelector("#form");
console.log(modal);
closebutton.addEventListener("click", function() {
    modal.classList.toggle("closed");
});
onbutton.addEventListener("click", function() {
    modal.classList.toggle("closed");
});
modal.addEventListener("mousedown", function(t) {
    console.log('tttt', t);
    modal.classList.toggle("closed");
});