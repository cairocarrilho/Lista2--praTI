// 2. Verificando Propriedades
//  ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
//     anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto


let livros = {
    titulo: 'Estruturas de Dados e algoritmos com Javascript',
    autor: 'Loiane Groner ',
    anoPublicacao: 2017,
    genero: 'tecnologia',
    editora:'Original'

}

    for(let livro in livros){
      if(livro === 'editora'){
          console.log("Existe a propriedade Editora")
      }

    }

if(!livros.editora){
    livros.editora = 'Novatec';
    console.log('Foi adicionada a propriedade Editora');
}

console.log(livros)

