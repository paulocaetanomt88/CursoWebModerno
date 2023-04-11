// NÃO EXISTE FUNÇÃO PARA DESCONGELAR UM OBJETO CONGELADO DIRETAMENTE
// MAS PODEMOS USAR O TRUQUE ABAIXO

let obj = { a: 5}
console.log(obj); // { a: 5 }

// Congelando
Object.freeze(obj)

obj.b = 10
console.log(obj); // nada mudou porque está congelado

// Agora use esse truque
let tempObj = {}; // criando objeto temporário
// clonando atributos
for (let i in obj) {
    tempObj[i] = obj[i];
}
console.log(tempObj); // { a: 5 }

// Resetando o objeto
obj = tempObj
console.log(obj)

obj.b = 12
console.log(obj) // output: {a: 5, b: 12} -> significa que o objeto "descongelou" porque criamos uma cópia e sobrescrevemos ele.