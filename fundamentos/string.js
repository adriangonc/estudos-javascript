/*Strings*/

const name = 'Adriano Gonçalves de Souza'
console.log(name)
console.log(name.charAt(3))
console.log(name.charCodeAt(3))
console.log(name.indexOf('a'))

console.log(name.substring(0,3))
console.log(name.substring(3,7))

console.log('Nome: '.concat(name) + '!')

console.log(name.replace('a', 4))

console.log('Adriano, Sara'.split(','))


/*Template String*/

const nomeEsposa = "Sara"
const concatenacao = "Hi " + nomeEsposa + '!'
let template = `
    Hi
${nomeEsposa}!`
console.log(template, concatenacao)

console.log(` 1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Hi... ${up(' how are you')}?`)