const notas = [10, 6.5, 8, 7.5];
//  O forEach é um método e dentro do parâmetro dele passaremos uma outra função para esse método. Podemos escrever uma função anônima do JS.
let somadasnotas = 0;

notas.forEach(function name(notas) {
  somadasnotas += notas;
});
const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);