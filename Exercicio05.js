// 5. Calculando Valores em Arrays de Objetos
//  ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.


let alunos = [
    {
        aluno:'Cairo',
        nota1: 10,
        nota2: 7
    },
    {
        aluno:'Josy',
        nota1: 10,
        nota2: 10
    },
    {
        aluno:'Ana Claudia',
        nota1: 10,
        nota2: 9
    },
    {
        aluno:'Fulano',
        nota1: 5,
        nota2: 7
    }
]

for(let aluno of alunos){
    let media = (aluno.nota1 + aluno.nota2) / 2
    console.log (`O aluno ${aluno.aluno}  tem media ${media}`)
}
