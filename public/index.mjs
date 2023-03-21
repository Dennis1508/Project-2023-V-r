import Dictionary from "./Dictionary.mjs";


let buttonEn = document.getElementById("buttonEn");
let buttonNo = document.getElementById("buttonNo");
let headers = document.getElementById("headers");
let body = document.getElementById("body");
let txtBox = document.getElementById("txtBox");
let addUserBtn = document.getElementById("addUserBtn");




buttonEn.addEventListener("click",function(evt){
headers.innerHTML = Dictionary.en.headers;
buttonEn.innerHTML = Dictionary.en.buttonEn;
buttonNo.innerHTML = Dictionary.en.buttonNo;
txtBox.innerHTML = Dictionary.en.txtBox;


});

buttonNo.addEventListener("click",function(evt){
headers.innerHTML = Dictionary.no.headers;
buttonNo.innerHTML = Dictionary.no.buttonNo;
buttonEn.innerHTML = Dictionary.no.buttonEn;
txtBox.innerHTML = Dictionary.no.txtBox;

});
































