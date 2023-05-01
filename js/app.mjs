// @ts-nocheck
"use strict";
document.addEventListener("DOMContentLoaded", main);

import * as encriptador from "/js/encriptador.mjs"

function main() {

    console.log(encriptador);

    document.querySelector("#encriptar").addEventListener("click", encriptar);
    document.querySelector("#desencriptar").addEventListener("click", desencriptar);
    if (isSecureContext) {
        let button = document.createElement("button");
        button.type = "button";
        button.addEventListener("click",copiar);
        button.innerText = "Copiar";
        document.querySelector("body").appendChild(button);
        console.log(button);
    }
    
    //funcion encriptar
    function encriptar() {
        let texto_input = document.querySelector("#input").value;
        let texto_output = encriptador.encriptar(texto_input);
        document.querySelector("#output").innerText = texto_output;
    }
    
    //funcion desencriptar
    function desencriptar() {
        let texto_input = document.querySelector("#input").value;
        let texto_output = encriptador.desencriptar(texto_input);
        document.querySelector("#output").innerText = texto_output;
    }

    function copiar() {
        navigator.clipboard.writeText(document.querySelector("#output").innerText);
    }
}