/*Programe um sistema de gerenciamento de tarefas que permita aos usuários adicionar,
concluir e remover tarefas. Cada tarefa deve ser um objeto com pelo menos as
propriedades descrição (string), data de criação (Date) e status (boolean).*/

let continuar = true
let lista = []
while (continuar) {
    let opcao = Number(prompt("O que deseja fazer?\n1- Adicionar tarefa, \n2- Concluir tarefa\n 3- Remover tarefa \n 4- Finalizar"))
    switch (opcao) {
        case 1:
            // Adicionar
            let descricao = prompt("Qual é a tarefa que deseja adicionar?")
            let data = new Date(prompt("Em qual data ela se inicia")).toLocaleString()
            let status = false
            let objetoTarefa = {descricao, data, status}
            lista.push(objetoTarefa)
            console.log(lista)
            break
        case 2:
            // Concluir
            let descricaoParaConcluir = prompt("Qual tarefa deseja concluir?")
            let indiceParaConcluir = lista.findIndex(objetoTarefa => objetoTarefa.descricao == descricaoParaConcluir)
            if(indiceParaConcluir !== -1){
                lista[indiceParaConcluir].status = true
                alert("Tarefa concluida")
            } else {
                alert("Tarefa nao encontrada")
            }
            break
        case 3:
            // Remover
            break
        case 4:
            // Finalizar
            continuar = false
            break
    }
}


/*Faça a criação de um catálogo de filmes em JavaScript com alguns objetos possuindo as
propriedades título, diretor, ano de lançamento e gênero.
Em seguida dê opção para o usuário pesquisar pelo título, diretor, ano ou gênero e faça
a filtragem, retornando os títulos em uma única string separada por vírgula.*/










/*Crie um sistema que ajude os viajantes a planejar suas viagens. Peça para o usuário
inserir objetos para representar destinos, com propriedades como nome, custo
estimado e atrações.
Os viajantes podem escolher destinos e calcular o custo total da viagem.*/


/*Crie um livro de receitas em JavaScript onde cada receita deve ser um objeto com
propriedades como nome, ingredientes e instruções.
Os usuários podem adicionar receitas, pesquisar por ingredientes e exibir receitas com
base em critérios específicos.*/


/*Codifique um programa que permita aos usuários registrar suas despesas diárias.
Cada despesa deve ser representada como um objeto com propriedades como
descrição, valor e data. Em seguida, permita que os usuários calculem o total de
despesas para um determinado período de dias.*/


