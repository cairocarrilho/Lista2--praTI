// Implementando um Carrinho de Compras
//  ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho

const carrinho = {
    itens:[
        { nome: 'Blusa', quantidade:5, precoUnitario: 20.99 },
        { nome: 'Calça', quantidade:2, precoUnitario: 120.99 },
        { nome: 'Short', quantidade:3, precoUnitario: 41.99 },
        { nome: 'Camiseta', quantidade:4, precoUnitario: 80.99 },
    ]
}

let total = 0
 carrinho.itens.forEach((item) => {

   total += item.quantidade * item.precoUnitario


})
console.log('Valor total do carrinho: R$ ' + total.toFixed(2));