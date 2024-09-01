// 1.
// Acessando Propriedades de Objetos
//  ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
//     ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carros = {
    marca: 'Toyota',
    modelo:'Etios',
    ano: 2017,
    cor:'Branco'

}

for(let propriedade in carros){
                // No propriedade = esta inteirando sobre as chaves do objeto
    console.log(propriedade + ': ' + carros[propriedade]) // aqui no objeto carros[propriedade] esta pegando o valor dentro de cada chave
}