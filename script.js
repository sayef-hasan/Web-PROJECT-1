
var btn = document.getElementById("show-login")
var formm = document.getElementById("container")
var cls = document.getElementById("close")
btn.onclick = function(){
formm.classList.add("active");
}
cls.onclick = function(){
formm.classList.remove("active");
}



