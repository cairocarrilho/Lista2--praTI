// 9. Contabilizando Elementos com uma Condição
//  ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30anos.

const clientes =[
    {nome:'Cairo', idade: 34, cidade:'Jaragua' },
    {nome:'Eduardo', idade: 40, cidade:'Palmas' },
    {nome:'Anderson', idade: 37, cidade:'Porto Alegre' },
    {nome:'Michel', idade: 22, cidade:'Curitiba' },
    {nome:'Mateus', idade: 18, cidade:'Goiania' },
    {nome:'Josy', idade: 33, cidade:'Jaragua' }

]

let count = 0
clientes.forEach( (idade,index) => {

    if(idade.idade >= 30) {
        count++
        index++
        console.log(`${index}: ${idade.idade} e dos nome ${idade.nome}`)
    }});
console.log()
console.log(`O total de pessoas com mais de 30 anos sao ${count}`)