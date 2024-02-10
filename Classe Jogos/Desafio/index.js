// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque = "";
        
        // Determinando o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque padrão";
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Criando uma instância da classe Heroi
let heroiExemplo = new Heroi("Aragorn", 30, "guerreiro");

// Chamando o método de ataque da instância
heroiExemplo.atacar();
