"use strict";

const matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//funcion encriptar
function encriptar(texto) {
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

    return texto.replaceAll(encriptarRegex, encriptarReplacer);
}

function encriptarReplacer(match) {
    for (let i = 0; i < matrixCode.length; i++) {
        if (match === matrixCode[i][0]) {
            return matrixCode[i][1];
        }
    }
    return match;
}

//funcion desencriptar
function desencriptar(texto) {
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

    return texto.replaceAll(desencriptarRegex, desencriptarReplacer);
}

function desencriptarReplacer(match) {
    for (let i = 0; i < matrixCode.length; i++) {
        if (match === matrixCode[i][1]) {
            return matrixCode[i][0];
        }
    }
    return match;
}

export {encriptar, desencriptar};