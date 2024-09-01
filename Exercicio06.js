// 6. FiltrandoArraysdeObjetos
//  ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    {
        nome:'Cairo',
        cargo:'programador Senior',
        salario: 15000
    },
    {
        nome:'Josy',
        cargo:'Odontologa Esteta',
        salario: 20000
    },
    {
        nome:'Joao',
        cargo:'Gerente',
        salario: 3000
    },
    {
        nome:'Maria',
        cargo:'Zeladora',
        salario: 1500
    }
]

    for(let funcionario of funcionarios){
        if(funcionario.salario > 4000){
            console.log(funcionario)
        }
    }