/*Crie um laço de repetição para solicitar 10 nomes e idades, a cada nome e idade
digitado, crie um objeto e armazene dentro de uma lista de pessoas.
Após isso, crie uma nova lista utilizando o método filter para buscar as pessoas comas
idades maiores que 20 anos.*/

let individuos = [];

for(i=0; i < 10; i++) {
    let nome = prompt('Digite o seu nome');
    let idade = Number(prompt('Digite a sua idade'));
    
    let individuo = {
        nome: nome,
        idade: idade
    };
    individuos.push(individuo)
}

console.log(individuos)


 let maioresVinte = individuos.filter((valor) => valor.idade > 20);

 console.log(maioresVinte)

/*Crie um programa para simular um pedido de um e-commerce, onde devem ser
solicitados os produtos e preços e armazenar esses dados em objetos dentro de um
Array. Inclua um laço de repetição que pergunte se o cliente deseja finalizar a compra e
ao final da compra, exiba o valor total e a quantidade de produtos.
Obs: Dentro do laço de repetição busque apenas criar os objetos e incluir na lista, as
análises de preço e quantidade faça depois do laço de repetição.*/

let items = [];

let arrayPrecos = [];

let continuar = true;

while(continuar == true) {
    let produto = prompt('Digite o nome do produto');
    let preco = Number(prompt('Digite o preço do produto'));
    let item = {
        produto : produto,
        preco : preco
    }
    items.push(item);
    arrayPrecos.push(item.preco);
    
    let finalizar = prompt('Deseja finalizar? S / N');
    if(finalizar == 'S'){
        continuar = false;
    } else {
        continuar
    }
}
console.log(items);

console.log(arrayPrecos)

// Crear una cadena legible para mostrar los elementos del arreglo


let itemsTexto = '';

for (let i = 0; i < items.length; i++) {
    itemsTexto += `Produto: ${items[i].produto}, Preço: ${items[i].preco}\n`;
}

alert(`Os items são: \n ${itemsTexto}`);

//Mostrar valor total y quantidade de produtos.

let valorTotal = arrayPrecos.reduce((acumulador, preco) => acumulador + preco);

alert(`O valor total é ${valorTotal}`);

let quantidadeProdutos = arrayPrecos.length;

alert(`A quantidade de produtos é ${quantidadeProdutos}`)



