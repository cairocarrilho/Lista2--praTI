// 8. CriandoNovos Arrays a Partir de Objetos
//  ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
//     diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.


let filmes =[
    {
        titulo:'Velozes no Codigo',
        diretor: 'Cairo',
        anaLancamento: 2024
    },
    {
        titulo:"Aprendendo JS",
        diretor: 'Cairo',
        anaLancamento: 2025
    }

]

let novoArray = []

filmes.forEach(filme => {
    novoArray  = filme.titulo
    console.log(novoArray)
})