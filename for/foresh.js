// forEach()  é um método do objeto Array.
const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15


// O mesmo código também poderia ser escrito da seguinte forma
lista.forEach(numero => {
    soma += numero
   });

   // Ou ainda, utilizando a palavra-chave function  função callback
   lista.forEach(function (numero) {
    soma += numero
   });
   