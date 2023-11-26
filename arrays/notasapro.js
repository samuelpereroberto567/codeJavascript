const alunos = ['fulano1','fulano2', 'vsdv' ,'eçklvj'];
const medias = [7, 4.5, 8, 7.5];
//filtrando 
const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});
// Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.
console.log(reprovados);