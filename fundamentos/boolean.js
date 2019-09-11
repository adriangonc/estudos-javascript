let isActive = false

isActive = true
console.log(isActive)

isActive = 7 < 1
console.log(isActive)
console.log(!isActive)

console.log(!!1)
console.log(!!3)
console.log(!!-1)
console.log(!!0)
console.log(!!{})
console.log(!!' ')
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!null || !!1)

let nome = ''
console.log(nome || 'Insira seu nome!')