function apresentasao(nome) {
    return `meu nome e ${nome}`;
}

const aresentararrow = nome =>`meu nome e ${nome}`;
const soma = (num1 ,num2) => num1 + num2;

// arrow fuction com + de uma 1 linha de intrusao

const somanumeros = (num1 , num2) => {
    if (num1|| num2 > 10) {
        return "somente numeros de 1 a 9"
    }else{
        return num1 + num2;
    }
}