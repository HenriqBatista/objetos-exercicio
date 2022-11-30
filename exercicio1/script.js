
// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// 

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

// objeto
// const estudante = {
//     nome: "Henrique",
//     sobrenome: "Batista",
//     matricula: 20024124,
//     notas: [15, 12, 6]

const sacolao =  []
const fruta1 = {
    nome: "Maça",
    preco: 8.06,
    disponivel: true

}
const fruta2 = {
    nome: "Melancia",
    preco: 1.90,
    disponivel: false

}
const fruta3 = {
    nome: "Abacate",
    preco: 5.33,
    disponivel: true
}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta1,fruta2,fruta3)
console.log(sacolao)
