// parametro de funsao 

function soma(num1,num2) {
    return num1 + num2;
}
console.log(soma(2,2))
console.log(soma(245,234))
console.log(soma(223,226))
console.log(soma(-223,231))

// parametro x armumentos

// ordem dos parametros
function noeidade(nome , idade) {
    return `meu nome e ${nome} e minha idade e ${idade}`;
}
console.log(noeidade("fulano" , 18))

function multiplica(numero1 , numero2) {
    return numero1 * numero2;
}
    console.log(multiplica(soma(4,5), soma(3,3)))
    
    function cumprimentar(){
        return 'Oi gente!'
       }
       
       function cumprimentaPessoa(nomePessoa) {
        console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
       }
       
       cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”