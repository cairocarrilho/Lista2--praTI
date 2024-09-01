// 7. ModificandoObjetosemumArray
//  ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
//     preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.


let produtos =[
    {
        nome:'celular',
        preco: 2500,
        desconto: 10,

    },
    {
        nome:'Notebook',
        preco: 4000,
        desconto: 10,
    },
    {
        nome:'Lampada',
        preco: 8,
        desconto: 10,

    },

]

produtos.forEach(valor => {
    valor.preco = (valor.preco) - (valor.preco * (valor.desconto /100))
    console.log(' O produto ' + valor.nome + ' tem o novo  valor com desconto de R$ '+ valor.preco)
})


