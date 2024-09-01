// 4. IterandoSobreArraysdeObjetos
//  ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade,e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    {
        nome:'Cairo',
        idade: 34,
        cidade:'Jaragua'
    },
    {
        nome:'Josy',
        idade: 34,
        cidade:'Jaragua'
    },
    {
        nome:'Ana Claudia',
        idade: 3,
        cidade:'Jaragua'
    },
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}