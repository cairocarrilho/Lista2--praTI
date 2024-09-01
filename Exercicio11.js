// 11.
// Agrupando Elementos com forEach
//  ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente

// Define um array de objetos, onde cada objeto representa um pedido.
const pedidos = [
    { cliente: 'João', produto: 'Produto A', quantidade: 2 },
    { cliente: 'Maria', produto: 'Produto B', quantidade: 5 },
    { cliente: 'João', produto: 'Produto C', quantidade: 1 },
    { cliente: 'Ana', produto: 'Produto A', quantidade: 3 },
    { cliente: 'Maria', produto: 'Produto A', quantidade: 2 }
];

// Cria um objeto vazio que será usado para armazenar a quantidade total de produtos pedidos por cada cliente.
const agrupadoPorCliente = {};

// Itera sobre cada objeto no array `pedidos` usando o método `forEach`.
pedidos.forEach(pedido => {
    // Verifica se o cliente já existe no objeto `agrupadoPorCliente`.
    if (!agrupadoPorCliente[pedido.cliente]) {
        // Se o cliente não existir, inicializa a quantidade com 0.
        agrupadoPorCliente[pedido.cliente] = 0;
    }
    // Adiciona a quantidade do pedido atual à quantidade acumulada para esse cliente.
    agrupadoPorCliente[pedido.cliente] += pedido.quantidade;
});

// Imprime o objeto `agrupadoPorCliente`, que contém a quantidade total de produtos pedidos por cada cliente.
console.log(agrupadoPorCliente);
