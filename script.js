alert('Seja bem-vindo ao nosso jogo!');
let totalNotas=0;

let entrada1 = prompt("quantas notas você deseja inserir para saber a média?");
let quantNotas = parseInt(entrada1);//força a entrada e coversão do numero em inteiro

console.log(quantNotas);

for(i=0; i<quantNotas; i++){
    let entrada2 = prompt("Insira uma nota");
    console.log(entrada2);

    let notas = parseInt(entrada2);
    totalNotas = totalNotas + notas;
}

let media = totalNotas/quantNotas;

alert("Sua média é: " + media);

console.log(media);
