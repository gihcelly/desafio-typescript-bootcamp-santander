"use strict";
/*
// Como podemos melhorar o esse código usando TS?

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
// RESPOSTA 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["padeiro"] = 1] = "padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};
