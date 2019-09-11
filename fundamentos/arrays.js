//Arrays
let numberList = [1,2,3,4,5]
const values = [1532, 'Adriano', 0.8, 0,1]

console.log(numberList)
console.log(numberList[2])
console.log(values[1])
console.log(numberList[1532]) //permite acessar posição inexistente
console.log(values)

values[10] = 51
console.log(values)
console.log(values.length)

values.push(true, {id: 123})
console.log(values)

delete values[0]
console.log(values)
console.log(typeof values)