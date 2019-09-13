//Usando let
var num = 1
{
    let num = 2 //Let tem escopo global, de função e de bloco, um escopo a mais que var
    console.log('Inside: ',num) //Pega variável do escopo mais próximo
}

console.log('Outside: ',num)