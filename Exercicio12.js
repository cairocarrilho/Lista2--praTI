// 12. Atualizando um Array de Objetos
//  ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades


const estoque = [
    { produto: 'corrente', quantidade: 5, minino: 10 },
    { produto: 'corrente', quantidade: 15, minino: 10 },
    { produto: 'corrente', quantidade: 20, minino: 10 },
    { produto: 'corrente', quantidade: 2, minino: 20 },
    { produto: 'corrente', quantidade: 5, minino: 10 },

]

estoque.forEach(item => {
    if(item.quantidade < item.minino){
        item.quantidade *=2
    }

})

console.log(estoque)