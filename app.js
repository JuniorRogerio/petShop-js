
// Exemplo de Array de objeto
//let joe = {
// Quando inicia com chaves, é um objeto onde precisa possuir - atributo: valor
    //nome: "Joe",
    ////idade: 2,
    //raca: "pug",
    //tipo: "cachorro",
    //vacinado: true,
    //genero: "M",
    //servicos: ["banho", "tosa"]
//}

// console.log(joe) - imprimir a variável com as informações de Joe

const moment = require('moment');
const fs = require('fs'); // chamada do módulo 
const nomeArquivo = 'pets.json'; // transferência da lista no arquivo para uma variável
const nomePetshop = "*** Happy Dog ***";

let petsJSON = fs.readFileSync(nomeArquivo); // lê conteúdo do arquivo
let arquivoPets = JSON.parse(petsJSON); // converte para fomrato JS

//console.log(arquivoPets.pets);

const atualizarJson = () => {
    let listaJson = JSON.stringify(arquivoPets, null, 2); // converte o objeto literal para JSON (objeto para converter, null para não minificar, 2 para numero de linhas)
    fs.writeFileSync(nomeArquivo, listaJson, 'utf-8'); // escreve no arquivo (caminho arquivo, conteúdo novo, formato)
}

//console.log(nomePetshop) // imprime o nome do Pet Shop

//let pets = ;

// console.log(pets); - imprimir variável pets e abaixo com as informações de forma mais amigável

// Crie uma função chamada listarPets que imprima a lista de pets de forma mais amigável, ou seja, sem imprimir a sintaxe de código.
// Exemplo:
// Bob, 2 anos, cachorro, Pug, vacinado
// Snoopy, 4 anos, cachorro, Beagle, vacinado
// Ravena, 5 anos, gato, Siberiano, vacinado

// Declarando a função
//function listarPets(listaDePets) {
//    let vacinado
//    for (let i = 0; i < listaDePets.length; i++) {
//        if(listaDePets[i].vacinado == true){
//            vacinado = "vacinado"
//        } else{
//            vacinado = "não vacinado"
//        }
//    console.log(`${listaDePets[i].nome}, ${listaDePets[i].idade} anos, ${listaDePets[i].tipo}, ${vacinado}`)
    // Template string `` - uso de crase
//    }
//}

// Executando a função
//listarPets(pets) 

//console.log("\n") - quebra de linha

//console.log("\n") - quebra de linha

//Imprimir os nomes e informações dos pets de forma organizada

const listarPets = (listaDePets) => {
      for (let contador = 0; contador < listaDePets.length; contador++){
      
        console.log(`${listaDePets[contador].nome}, ${listaDePets[contador].idade} anos, ${listaDePets[contador].raca}, ${listaDePets[contador].tipo}, ${listaDePets[contador].vacinado ? "vacinado" : "não vacinado"}, ${listaDePets[contador].genero}, ${listaDePets[contador].servicos}`);
    
        for (let index = 0; index < listaDePets[contador].servicos.length; index++) {
            
            console.log(`${listaDePets[contador].servicos[index].data} - ${listaDePets[contador].servicos[index].nome}`);
        }
    }
};

// Inserir a informação de pet vanicnado para os pets não vacinados. Os que já foram vacinados indicar que já estão ok

const vacinarPet = (pet) =>{
    if (!pet.vacinado) {
        pet.vacinado = true;
        atualizarJson();
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`)
    }
};

// Realizar a vacinação de pets ainda não vacinados e indicar quantos foram vacinados na ação

const campanhaVacina = (listaPets) => {
    let totalVacinados = 0;
    for (let i = 0; i < listaPets.length; i++){
        if (!listaPets[i].vacinado) {
            listaPets[i].vacinado = true;
            totalVacinados++;
        }
    }
    atualizarJson();
    console.log(`Parabéns, ${totalVacinados} pets foram vacinados nessa campanha!`);
};

// incluir novos serviços realizados no pet

const darBanhoPet = (pet) => {
    pet.servicos.push({
        nome: 'banho',
        data: moment().format('DD-MM-YYYY')
    });
    atualizarJson();
    console.log(`${pet.nome} está cheiroso!`);
};

const tosarPet = (pet) =>{
    pet.servicos.push({
        nome: "tosa",
        data: moment().format("DD-MM-YYYY")
    });
    atualizarJson();
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhas = (pet) => {
 pet.servicos.push({
     nome: "Corte de unhas",
     data: moment().format("DD-MM-YYYY")
 });
    atualizarJson();
    console.log(`${pet.nome} está de unhas aparadas!`);
};

// Adicionar pet

const adicionarPet = (infoPet) => {
    arquivoPets.pets.push(infoPet);
    atualizarJson();

    console.log(`${infoPet.nome} está cadastrado no sistema!`);
}

// adicionarPet({
//     nome: "Costelinha",
//     idade: 12,
//     raca: "café",
//     tipo: "cachorro",
//     vacinado: false,
//     genero: "M",
//     servicos: [] 
// });

// Eliminar pet

const eliminarPet = (pet)=>{ 
    arquivoPets.pets.pop()
    atualizarJson()
};

const buscarPet = (nomePet) => {
    const petEncontrado = arquivoPets.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    console.log(petEncontrado ? petEncontrado : `Nenhum pet encontrado com esse nome ${nomePet}`);

}

const atenderCliente = (pet, servico) => {
    console.log (`Olá, ${pet.nome}!`);
    servico(pet);
    console.log('Até mais!');
}

const addInfoCastrado = () => {                 // const addInfoCastrado = () => {
    arquivoPets.pets = listaPets.map((pet) => { //     arquivoPets.pets = listaPets.map((pet) => {
        pet.castrado = true;                    //         pet.castrado = true;
        return pet;                             //         return pet;
    })                                          //     })
       atualizarJson();                         //     atualizarJson();
}                                               // }

const listarVacinados = () => {
    console.log ('**VACINADO**');

    let vacinados = arquivoPets.pets.filter((pet) => {
       return pet.vacinado;
    })

    console.log(vacinados);
    console.log(`Temos ${vacinados.length} pets vacinados!`);
}

//listarVacinados();

//addInfoCastrado();

// atenderCliente(arquivoPets.pets[4], darBanhoPet);
// console.log('---------------')
// atenderCliente(arquivoPets.pets[4], tosarPet);

//buscarPet('Bravo'); //chamar funçar buscarPet

//listarPets(arquivoPets.pets); // Listar a lista de pets

//vacinarPet(arquivoPets.pets[2]);
//darBanhoPet(arquivoPets.pets[3]);
//tosarPet(arquivoPets.pets[2]);
//apararUnhas(arquivoPets.pets[7]);

//vacinarPet(arquivoPets.pets[1]);
//vacinarPet(arquivoPets.pets[3]);
//vacinarPet(arquivoPets.pets[2]);
//vacinarPet(arquivoPets.pets[4]);

//eliminarPet(arquivoPets.pets[7]);

//campanhaVacina(arquivoPets.pets);

// Ciclos de repetição
// <, > ==
// function Loop(pets){
// //          contador;   limite/repetições / incrementar
//   for (let contador = 0; contador < pets.length; contador++) {
//     console.log(contador)
//     console.log(pets[contador])
//   }
// }
// Loop(pets),
//fim do projeto