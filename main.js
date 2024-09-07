// Crie um pequeno sistema onde vc pode adicionar diferentes tipos de funcionarios e gerenciar suas atividades 

// Iniciando a classe usando constructor e dando parametros - nome e salario 
class funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    addAtividades() { // metodo 

    }
}

class medico extends funcionario { // Herança 
    constructor(nome, salario) {
        super(nome, salario) // inicia as propriedades da função base funcionario 
    }

    addAtividades() { // Poliformismo
        console.log(`${this.nome} está realizando uma cirurgia`); // 
    }
}

class enfermeiro extends funcionario { // Herança 
    constructor(nome, salario) {
        super(nome, salario) // inicia as propriedades da função base funcionario 
    }

    addAtividades() { // Poliformismo
        console.log(`${this.nome} está cuidando de pacientes`); // 
    }
}

// fazendo a iteração 
let m1 = new medico ('Sabrina', 11000); // defini o nome e salario
m1.addAtividades() // chamei o metodo que imprime o nome do medico e a atividade que o mesmo está desempenhando/desempenha 

// criei uma nova instancia
let e1 = new enfermeiro ('Carolina', 6100); 
e1.addAtividades() // chama o metodo e imprime Carolina está cuidando de pacientes 
