// 14. Manipulando Objetos Complexos
//  ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
//     que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.


const empresa = {
    departamentos:[
        {
            nome:'RH',
            funcionarios: ['Ana', 'João', 'Maria']
        },
        {
            nome: 'TI',
            funcionarios: ['Cairo', 'Fernanda', 'Roberto']
        },
        {
            nome: 'Marketing',
            funcionarios: ['Paula', 'Marcelo']
        }

    ]
}


for(let depto in empresa.departamentos){
   const departamentoPrimario = empresa.departamentos[depto];
   console.log(departamentoPrimario.nome)

        for (let funcionario of departamentoPrimario.funcionarios){
            console.log(funcionario)
        }


}
console.log(empresa.departamentos)