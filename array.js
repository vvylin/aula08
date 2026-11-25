//[] significa um array
// array é literalmente usado para guardar as informações em ordem
// os valores são separados por vírgula (,)

///////////////////////////////////////////////

let nomes = ["Isa linda", "Victor", "Pedro", "Samuel", "Geovana"]
console.log(nomes)
console.log(nomes[3])

nomes[4] = "Caleb" // substituindo valor em posição especifica!
console.log(nomes)

console.log(nomes.length) // "length" conta quantas informações eu tenho no meu array

nomes[nomes.length] = "Geovana" // push adiciona mais um valor ao FINAL do array
console.log(nomes)

nomes[nomes.length] = "Nicolas"
console.log(nomes)

nomes.unshift("Ro feia") // unshift serve para colocar o valor no COMEÇO do array
console.log(nomes)

nomes.pop() // remove o ultimo valor do array
console.log(nomes)

nomes.shift()
console.log(nomes) // remove o primeiro valor do array

let ultimoNome = nomes.pop()
console.log(nomes)
console.log(ultimoNome)

let primeiroNome = nomes.shift()
console.log(nomes)
console.log(primeiroNome)

///////////////////////////////////////////////

// atividades
// 1. faça uma lista com o nome de 5 colegas
// 2. adicione no final dessa lista o nome de +1 amigo
// 3. adicione no começo dessa lista o nome de um pet
// 4. adicione agora no final da lista o nome de +2 a 5 colegas 
// 5. mostre a informação que esta salva no 4 posição
// 6. extraia a primeira informação e salve na variavel PETs

///////////////////////////////////////////////

// 1. 

let nomesColegas = ["Lucas", "Beatriz", "Tiago", "Camila", "Rafael"]
console.log(nomesColegas)

//2. 

nomesColegas[nomesColegas.length] = "Mariana"
console.log(nomesColegas)

// 3.

nomesColegas.unshift("Lua")
console.log(nomesColegas)

// 4. 

nomesColegas[nomesColegas.length] = "Gabriel" 
nomesColegas[nomesColegas.length] = "Larissa"
console.log(nomesColegas)

// 5. 

console.log(nomesColegas[4])

// 6. 

let PETs = nomesColegas.shift()
console.log(PETs)

///////////////////////////////////////////////

// se eu precisar validar que uma informação existe em um array?

console.log(nomesColegas.includes("Samuel"))
// false = não existe 
// true = existe

// se eu precisar saber em que posição essa informação está?

console.log(nomesColegas.indexOf("Lua"))

// se eu precisar percorrer todo o array?
// "=>" arrow function é usado para definir uma função anonima 
// () => {} declaração da função anonima 

nomesColegas.forEach((linha, contador)=>{
    console.log("O " + (contador+1) + " registro é: " + linha)
})