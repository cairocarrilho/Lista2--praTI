// 3. Filtrando Propriedades de Objetos
//  ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = {
    valor1: 1200,
    valor2: 200,
    valor3: 300,
    valor4: 1000
}

function criarProduto(produto) {
    let novoProduto = {}
    for (let propriedade in produto) {
        if( produto[propriedade] >= 1000){
            novoProduto[propriedade] = produto[propriedade];
        }
    }
    return novoProduto;
}

console.log(criarProduto(produto))

