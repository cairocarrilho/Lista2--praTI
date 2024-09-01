// 10. Criando Relatórios com Objetose Arrays
//  ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
//     quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
    {
        produto:'Celular',
        quantidade: 100,
        valor: 2500,  //250,000
    },
    {
        produto:'Notebook',
        quantidade: 20,
        valor: 4500    //90,000
    },
    {
        produto:'Mouse',
        quantidade: 800,
        valor: 50,     //40,000
    },
]

let countVendas =0
let countTotal = 0
vendas.forEach((valorVendas) => {
       countVendas =  valorVendas.valor * valorVendas.quantidade
       countTotal += countVendas
    }
)
console.log(` O valor total das vendas de todos os produtos foram R$ ${countTotal}`)
