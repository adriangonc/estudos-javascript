//Funções parte 1
function printSum(n1, n2){
    console.log(n1 + n2)
}

printSum(1500, 32)
printSum(1500) // pode passar só um parâmetro, porem irá somar um inteiro com um undefined. Retorna: NaN

function returnSum(a, b = 0){ //Nessa função b tem o valor defaut = 0
    return a + b;
}

console.log(returnSum(1500))
console.log(returnSum(1500, 32))