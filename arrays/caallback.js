const nomes = ["Evaldo", "Mari", "Camis"];
//callback é uma função que passamos como parâmetro de outra função.
nomes.forEach(function (nome) {
  console.log(nome);
});
// arro fuction
nomes.forEach( (nome) => {
  console.log(nome);
});

function imprimenome(nome) {
  console.log(nome);
}
nomes.forEach(imprimenome);