//Objetos
const produto = {}
produto.nome = 'GTX 2080 TI'
produto.preco = 5998.99
produto['Desconto'] = 399.90 // Evitar usar isso

console.log(produto)

const produtoDois = {
    nome: 'Ryzen 3800x',
    preco: 1799.90,
    caracteristicas: {
        nucleos: 16,
        clock: '4200 Mhz'
    }
}

console.log(produtoDois)

objetoJson = '{ "nome": "VGA 5700XT", "preco" : 1999.80}'
console.log(objetoJson)