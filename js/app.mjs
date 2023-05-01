// @ts-nocheck
"use strict";
document.addEventListener("DOMContentLoaded", main);

// import * as encriptador from "/js/encriptador.mjs"

function main() {

    // console.log(encriptador);

    //declaracion de constastes y variables
    const matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    document.querySelector("#encriptar").addEventListener("click", encriptar);
    document.querySelector("#desencriptar").addEventListener("click", desencriptar);
    
    //funcion encriptar
    function encriptar() {
        let texto = document.querySelector("#input").value;
        
        let temp = "";
        //regex encriptar
        for (let i = 0; i < matrixCode.length; i++) {
            if (i === (matrixCode.length - 1)) {
                temp += matrixCode[i][0];
            } else {
                temp += matrixCode[i][0] + "|";
            }
        }
        const encriptarRegex = new RegExp(temp, "g");
        
        function replacer(match) {
            for (let i = 0; i < matrixCode.length; i++) {
                if (match === matrixCode[i][0]) {
                    return matrixCode[i][1];
                }
            }
            return match;
        }
        
        document.querySelector("#output").innerText = texto.replaceAll(encriptarRegex, replacer);
    }
    
    //funcion desencriptar
    function desencriptar() {
        const texto = document.querySelector("#input").value;
        
        let temp = "";
        //regex desencriptar
        for (let i = 0; i < matrixCode.length; i++) {
            if (i === (matrixCode.length - 1)) {
                temp += matrixCode[i][1];
            } else {
                temp += matrixCode[i][1] + "|";
            }
        }
        const desencriptarRegex = new RegExp(temp, "g");
        
        function replacer(match) {
            for (let i = 0; i < matrixCode.length; i++) {
                if (match === matrixCode[i][1]) {
                    return matrixCode[i][0];
                }
            }
            return match;
        }

        document.querySelector("#output").innerText = texto.replaceAll(desencriptarRegex, replacer);
    }
}