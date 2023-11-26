/*
A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras
linguagens, o for é muito conveniente pois pode ser utilizado com qualquer
tipo de iterável e é construído de uma forma que deixa muito claro quais são
todas as “fases” de cada loop - também chamamos um loop de laço de repetição ou de iteração.
iterável representa uma sequência de elementos que pode ser percorrida 
*/
const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
 console.log(lista[indice]); 
}



const listas = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < listas.length; i++, j++) {
 console.log(listas[i] + j); 
}

//1
//3
//5
//7
//9