const nomes = ["sddd", "fsdf", "fulani", "fulani", "fulalal", "fulalal", "fulalal"];
//remover repetisoes de valorezs nos arrays]
// regra de que seus elementos não podem se repetir. 
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);