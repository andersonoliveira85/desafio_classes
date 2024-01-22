class Heroi{
    constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade
    this.tipo = tipo
    }

    atacar(tipo){
        if(tipo == "mago"){
        console.log(`o ${tipo} atacou usando Magia`)
        }else if(tipo === "guerreiro"){
            console.log(`o ${tipo} atacou usando Espada`)
            }if(tipo === "monge"){
                console.log(`o ${tipo} atacou usando Artes Marciais`)
                }if(tipo === "ninja"){  
                    console.log(`o ${tipo} atacou usando Shuriken`)
                    }
    }
}
let heroi = new Heroi("Anderson", 39, "mago");
heroi.atacar(heroi.tipo);


