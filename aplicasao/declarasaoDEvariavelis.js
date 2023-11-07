//var essa foi a primeira forma de declarar variáveis que surgiu no JavaScript
//portanto, funciona basicamente em qualquer parte do código.
/*
var altura = 5;
var comprimeto = 7;

area = altura * comprimeto;
console.log(area)
*/

//let
/*
let  forma1 = 'retangulo'
let  altura =5;
let comprimeto = 7;
let area1;
if (forma == 'retangulo') {
    area = altura * comprimeto;
}else{
    area = altura * comprimeto /2;
}

console.log(area)
*/

//constante (const)
const forma = 'triangulo';
const altura = 5;
const comprimeto = 7;
let area //const área (não seria uma prática recomendável)
if (forma === 'quadrada') {
   area = altura *comprimeto;
}else{
    area = (altura * comprimeto)/2;
}

console.log(area)

/*
(var)utilizar a var, que não é muito recomendada atualmente por ser muito maleável
(let)  a let que permite a troca de valores, mas precisa ser declarada antes
(const) const que tem um valor fixo e também precisa ser declarada antes.
var foi criado no início do JavaScript, quando let e const não existiam
 atualmente o var não é mais utilizado, devido à sua propensão a causar bugs.
 Usamos geralmente o let quando sabemos que o valor da variável precisará ser alterado ou reatribuído. 
 Para todos os outros casos usamos const.
*/
