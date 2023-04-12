// @ts-nocheck
"use strict";
document.addEventListener("DOMContentLoaded", main);

function main() {

    document.querySelector("#encriptar").addEventListener("click", test);
    document.querySelector("#desencriptar").addEventListener("click", test);

    document.querySelector("#output").innerText = "test";
}

function test() {
    document.querySelector("#output").innerText = document.querySelector("#input").value;
}