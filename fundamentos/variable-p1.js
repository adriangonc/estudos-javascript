//Variáveis JS
{{{{var escopo = 'Escopo 1'}}}} //Não e boa prática usar variáveis com escopo global
console.log(escopo) //Variável 'var' não permanesse no escopo do bloco

function test(){
    var magicNumber = 1532 //var em função permanece somente no escopo da função
    console.log(magicNumber)
}

console.log(test())

//Variáveis var só tem 2 escopos possíveis global e em functions só são acessiveis no escopo da fução.
var num = 1532
{
    var num = 132 //Usando var o valor da variável global e substituído pela variável do bloco, isto não ocorre com let
    console.log('Inside function = ', num)
}

console.log('Outside function = ', num)