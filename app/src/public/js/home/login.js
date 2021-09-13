"use strict";


const id  = document.querySelector("#id"),
 psword  = document.querySelector("#psword"),
 longinBtn  = document.querySelector("button");

longinBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        pw : psword.value,
    };
    console.log(req);
}

