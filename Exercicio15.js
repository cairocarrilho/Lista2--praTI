// 15. Filtrando e Somando Valores
//  ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
//     somando as entradas e subtraindo as saídas.

let transacoes = [
    {tipo:'entrada', valor: 1000 },
    {tipo:'saida', valor: 1000 },
    {tipo:'saida', valor: 2000 },
    {tipo:'entrada', valor: 5000 },
    {tipo:'entrada', valor: 5000 },
    {tipo:'saida', valor: 10000 },
    {tipo:'entrada', valor: 5000 },
    {tipo:'saida', valor: 5000 },
    {tipo:'entrada', valor: 50000 },
    {tipo:'saida', valor: 5000 },

]

let contadorEntrada = 0
let contadorSaida = 0

transacoes.forEach(transacao => {
    if(transacao.tipo === 'entrada'){
        contadorEntrada += transacao.valor
    }

    if(transacao.tipo === 'saida'){
        contadorSaida += transacao.valor

    }

})

let total = contadorEntrada - contadorSaida
console.log(`O valor total de entrada foi R$${contadorEntrada} e de saida foi R$ ${contadorSaida} e o total da sobra foi R$ ${total}` )