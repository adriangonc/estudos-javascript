//Null e Undefined
const a = {nome: "AAA"}
const b = a

b.nome = 'BBB'

console.log(a) //Imprime a referência na memória BBB

let n1 = 1532
let n2 = n1

n2++
console.log(n1, n2) // Valores primitivos não apontam pra endereço de memória, nesse caso e feita uma cópia por valor

let valor
console.log(valor) //undefined - não inicializada
valor = null
console.log(valor) //null - ausência de valor
//console.log(valor.toString()) //TypeError pois essa propriedade está nula

const prod = {}
console.log(prod.preco) //undefined - pois o preço só não foi definido
prod.preco = 1.99
console.log(prod)
delete prod.preco //Retira a propriedade preço do produto
console.log(prod)