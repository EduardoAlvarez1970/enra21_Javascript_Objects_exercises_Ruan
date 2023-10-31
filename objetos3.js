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

let continuar = true
let listaFilmes = [
    {
        titulo: "Jurassic Park", 
        diretor: "Steven Spielberg", 
        lancamento: "1993",
        genero: "Ação"
    },
    {
        titulo: "Chaves 1", 
        diretor: "Diretor Chaves", 
        lancamento: "1980",
        genero: "Comédia"
    },
    {
        titulo: "Chaves 2", 
        diretor: "Diretor Chaves", 
        lancamento: "2005",
        genero: "Comédia"
    },
    {
        titulo: "Titanic", 
        diretor: "Steven Spielberg", 
        lancamento: "2015",
        genero: "Drama"
    }
]

while (continuar) {
    let opcao = Number(prompt("O que deseja fazer?\n1- Pesquisar por titulo \n2- Pesquisar por diretor\n3- Pesquisar por ano de lançamento \n4- Pesquisar por gênero \n5- Finalizar"))
    switch (opcao) {
        case 1:
            // Pesquisar por titulo
            pesquisar("titulo")
            break
        case 2:
            //  Pesquisar por diretor
            pesquisar("diretor")
            break
        case 3:
            // Pesquisar por ano de lançamento   
            pesquisar("lancamento")
            break
        case 4:
            // Pesquisar por gênero
            pesquisar("genero")
            break
        case 5:
            // Finalizar
            continuar = false
            break
    }
}

function pesquisar(tipoPesquisa) {
    let termoPesquisa = prompt(`Qual é o ${tipoPesquisa}?`)
       
    // Para busca aproximada, podemos usar o includes     
    let listaPesquisa = listaFilmes.filter(objetoFilme => objetoFilme[tipoPesquisa].toLowerCase().includes(termoPesquisa.toLowerCase()))
    console.log(listaPesquisa)
    // etaoa 1: transformar array de objetos em array de strings com map
    let listaStrings = listaPesquisa.map(objetoAtual => objetoAtual.titulo)
    // etapa 2: transformar array de strings em uma unica string com join
    let stringUnificada = listaStrings.join('\n')

    alert(`Filmes encontrados para o ${tipoPesquisa} ${termoPesquisa}: \n${stringUnificada}`)
}




/*Crie um sistema que ajude os viajantes a planejar suas viagens. Peça para o usuário
inserir objetos para representar destinos, com propriedades como nome, custo
estimado e atrações.
Os viajantes podem escolher destinos e calcular o custo total da viagem.*/

let continuar = true
let destinos = [{
        nome: "Paris",
        custo: 1000
    },
    {
        nome: "Palhoça",
        custo: 2000
    },
    {
        nome: "Londres",
        custo: 500
    },
    {
        nome: "Nova Iorque",
        custo: 300
    }
]
let destinosAdicionados = []
while (continuar) {
    let opcao = Number(prompt("O que deseja fazer?\n1- Adicionar um destino para a viagem \n2- Remover um destino da viagem\n3- Ver destinos da viagem \n4- Calcular custo da viagem\n5- Cadastrar novo destino \n6- Ver destinos cadastrados  \n7- Finalizar"))
    switch (opcao) {
        case 1:
            // Adicionar um destino para a viage
            adicionarDestinoViagem()
            break
        case 2:
            // Remover um destino da viagem
            removerDestinoViagem()
            break
        case 3:
            // Ver destinos da viagem      
            listarDestinosViagem()
            break
        case 4:
            // Calcular custo da viagem
            calcularCusto()
            break
        case 5:
            // Cadastrar novo destino
            cadastrarDestino()
            break
        case 6:
            // Ver destinos cadastrados      
            listarDestinosCadastrados()
            break
        case 7:
            // Finalizar
            continuar = false
            break
    }
}

function adicionarDestinoViagem() {
    let destino = prompt("Qual destino voce deseja adicionar?")

    let destinoEncontrado = destinos.find(objetoDestino => objetoDestino.nome.toLowerCase() == destino.toLowerCase())

    if (destinoEncontrado) {
        destinosAdicionados.push(destinoEncontrado)
        alert(`Destino ${destino} adicionado a lista de viagem`)
    } else {
        alert(`Destino ${destino} não encontrado`)
    }
}

function removerDestinoViagem() {
    let destino = prompt("Qual destino voce deseja remover?")

    let indiceDestino = destinosAdicionados.findIndex(objetoDestino => objetoDestino.nome.toLowerCase() == destino.toLowerCase())

    if (indiceDestino !== -1) {
        destinosAdicionados.splice(indiceDestino, 1)
        alert(`Destino ${destino} removido da lista de viagem`)
    } else {
        alert(`Destino ${destino} não encontrado`)
    }
}

function listarDestinosViagem() {
    // etaoa 1: transformar array de objetos em array de strings com map
    let listaStrings = destinosAdicionados.map(objetoAtual => `${objetoAtual.nome}- R$${objetoAtual.custo}`)
    // etapa 2: transformar array de strings em uma unica string com join
    let stringUnificada = listaStrings.join('\n')
    alert(`Lista de destinos escolhidos: \n${stringUnificada}`)
}

function calcularCusto() {
    let custoViagem = 0
    // somar todos os custos dos destino adicionados para uma variavel reduzida
    if (destinosAdicionados.length > 0) {
        custoViagem = destinosAdicionados.reduce((somaTotal, objetoAtual) => somaTotal + objetoAtual.custo, 0)
    }
    alert(`Custo total da viagem: \nR$${custoViagem}`)
}

function cadastrarDestino() {
    let nome = prompt("Qual é o nome do destino?")
    let custo = Number(prompt("Qual é o nome do destino?"))
    let objetoDestino = {
        nome,
        custo
    }
    destinos.push(objetoDestino)
}

function listarDestinosCadastrados() {
    // etaoa 1: transformar array de objetos em array de strings com map
    let listaStrings = destinos.map(objetoAtual => `${objetoAtual.nome}- R$${objetoAtual.custo}`)
    // etapa 2: transformar array de strings em uma unica string com join
    let stringUnificada = listaStrings.join('\n')
    alert(`Lista de destinos cadastrados: \n${stringUnificada}`)
}











/*Crie um livro de receitas em JavaScript onde cada receita deve ser um objeto com
propriedades como nome, ingredientes e instruções.
Os usuários podem adicionar receitas, pesquisar por ingredientes e exibir receitas com
base em critérios específicos.*/


/*Codifique um programa que permita aos usuários registrar suas despesas diárias.
Cada despesa deve ser representada como um objeto com propriedades como
descrição, valor e data. Em seguida, permita que os usuários calculem o total de
despesas para um determinado período de dias.*/


