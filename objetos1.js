/*Crie um objeto chamado pessoa com as seguintes propriedades:
Nome, idade, email e apresentarPessoa (método que exiba um alerta trazendo as
informações da pessoa)

Execute um console.log para exibir o nome, idade e email e também execute o método
apresentarPessoa para esse objeto*/

const pessoa = {
    nome: 'Eduardo',
    idade: 52,
    email: 'opticoedu@gmail.com',
    apresentarPessoa: function() {
        alert(`O meu nome é ${this.nome}, tenho ${this.idade} anos, meu email é ${this.email}`)
    }
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.email);
console.log(pessoa.apresentarPessoa());


/*Crie um objeto chamado programador com nome, idade e linguagens. A propriedade
linguagens deve receber um Array de strings contendo as linguagens que você já
estudou.*/

const programador = {
    nome: 'Juan',
    idade: 18,
    linguagens: ['Espanhol', 'Ingles', 'Portugueis']
}

console.log(programador.nome);
console.log(programador.idade);
console.log(programador.linguagens);

alert(`Meu nome e ${programador.nome}, tenho ${programador.idade}, e falo ${programador.linguagens[0]}, ${programador.linguagens[1]}, ${programador.linguagens[2]} }`)

/*segunda versão*/

const programador1 = {
    nome: 'Juan',
    idade: 18,
    linguagens: ['Javascript', 'Phython', 'HTML'],
    apresentação: function() {
        alert(`Meu nome é ${this.nome}, tenho ${this.idade}, e conheço as linguagens ${this.linguagens[0]}, ${this.linguagens[1]}, é ${this.linguagens[0] }`)
    }
}


console.log(programador1.nome);
console.log(programador1.idade);
console.log(programador1.linguagens);
console.log(programador1.apresentação());


/*Com base no objeto programador, crie um laço de repetição para exibir vários alertas
mostrando individualmente cada linguagem de programação que está no Array de
linguagens no seguinte formato:

Linguagem 1: JavaScript
Linguagem 2: HTML*/


const programador2 = {
    nome: 'Juan',
    idade: 18,
    linguagens: ['Javascript', 'Phython', 'HTML'],
    apresentação: function() {
        for(let i = 0; i < this.linguagens.length; i++) {
            alert(`Linguagem ${i+1}: ${this.linguagens[i]}`)
        }
    }
}

console.log(programador2.apresentação());

