/*
é um tipo de laço de repetição diferente do for tradicional, embora utilize a mesma palavra-chave:
O for…of pode ser executado utilizando qualquer tipo de iterável:

*/
const lista = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista) {
 soma += elemento;
}

console.log(soma) //15