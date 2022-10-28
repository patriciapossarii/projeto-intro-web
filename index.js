
// ============================ BANCO DE DADOS DAS MOTOS ============================
const objeto0 = {
    motorcycleModel: "CLASSIC 350",
    motorcycleBrand: "Royal Enfield",
    motorcycleManufactureYear: 2021,
    motorcycleEngineCapacity: 249,
    motorcycleDocumentationIsOK: true,
    motorcycleDetails: ["Verde", "Corrente", "Partida Elétrica", "Peso 195 Kg"],
    motorcyclePhoto: "/Assets/royal.jpg",
}

const objeto1 = {
    motorcycleModel: "F800",
    motorcycleBrand: "BMW",
    motorcycleManufactureYear: 2015,
    motorcycleEngineCapacity: 798,
    motorcycleDocumentationIsOK: true,
    motorcycleDetails: ["Azul", "Corrente", "Partida Elétrica", "Peso 207 Kg"],
    motorcyclePhoto: "/Assets/f800.jpg",
}

const objeto2 = {
    motorcycleModel: "Tiger 800",
    motorcycleBrand: "Triumph",
    motorcycleManufactureYear: 2019,
    motorcycleEngineCapacity: 800,
    motorcycleDocumentationIsOK: false,
    motorcycleDetails: ["Preto", "Corrente", "Partida Eletrica", "Peso 213 Kg"],
    motorcyclePhoto:  "/Assets/tigger.jpg",
}

const objeto3 = {
    motorcycleModel: "V-Rod",
    motorcycleBrand: "Harley Davidson",
    motorcycleManufactureYear: 2016,
    motorcycleEngineCapacity: 1250,
    motorcycleDocumentationIsOK: true,
    motorcycleDetails: ["Laranja", "Peso 303"],
    motorcyclePhoto: "/Assets/v-road.jpg",
}

const objeto4 = {
    motorcycleModel: "1290  Super Duke R 2021",
    motorcycleBrand: "KTM",
    motorcycleManufactureYear: 2022,
    motorcycleEngineCapacity: 1301,
    motorcycleDocumentationIsOK: true,
    motorcycleDetails: ["Laranja e Branco", "Peso 189"],
    motorcyclePhoto: "/Assets/1290.png",
}

// ============================ MÉDIA DE ANO DAS MOTOS ============================
const averageManufactureYear = (objeto0.motorcycleManufactureYear + objeto1.motorcycleManufactureYear + objeto2.motorcycleManufactureYear + objeto3.motorcycleManufactureYear + objeto4.motorcycleManufactureYear) / 5
console.log(`A média do ano das motos é: ${Math.round(averageManufactureYear)}`)


// ============================ ARMAZENA MOTOS COM OS DOCUMENTOS OK ============================
armazenaObjetos = []

if(objeto0.motorcycleDocumentationIsOK === true) {
    armazenaObjetos.push(objeto0)
    console.log("Item adicionado com sucesso! Modelo:",objeto0.motorcycleModel)
}

if (objeto1.motorcycleDocumentationIsOK === true) {
    armazenaObjetos.push(objeto1)
    console.log("Item adicionado com sucesso! Modelo:",objeto1.motorcycleModel)
}

if (objeto2.motorcycleDocumentationIsOK === true) {
    armazenaObjetos.push(objeto2)
    console.log("Item adicionado com sucesso! Modelo:",objeto2.motorcycleModel)
}

if (objeto3.motorcycleDocumentationIsOK === true) {
    armazenaObjetos.push(objeto3)
    console.log("Item adicionado com sucesso! Modelo:",objeto3.motorcycleModel)
   }

   if (objeto4.motorcycleDocumentationIsOK === true) {
    armazenaObjetos.push(objeto4)
    console.log("Item adicionado com sucesso! Modelo:",objeto3.motorcycleModel)
   }
for (i = 0; i <= armazenaObjetos.length; i++) {
    console.log("Motocicletas armazenadas com os documentos ok: ", armazenaObjetos[i])
}
// ============================ FILTRA MARCA DE MOTOS ============================

const filtraMarca = (recObjeto, recString) => {
    const retornaObjeto = recObjeto.filter((brand) => {
        return brand.motorcycleBrand.toUpperCase() === recString

    })
    return retornaObjeto
}
const filtro = filtraMarca(armazenaObjetos, "BMW")

filtro.length != 0 ? console.log("Marca Filtrada", filtro) : alert("O item pesquisado nao existe")


//=========== DOM =========== DOM =========== DOM =========== DOM =========== DOM ===========

function generateListItems(arg) {
    let items = ''
    for (let i = 0; i < arg.length; i++) {
        items += `<div class="mc"><img src=${arg[i].motorcyclePhoto}>`;
        items += ` <ul><p>${arg[i].motorcycleBrand}</p>`;
        items += `<p>Modelo:  ${arg[i].motorcycleModel}</p>`;
        items += `<p>Ano de Fabricação: ${arg[i].motorcycleManufactureYear}</p>`;
        items += `<p>Capacidade do Motor: ${arg[i].motorcycleEngineCapacity} </p>`;
        items += `<p>Detalhes: ${arg[i].motorcycleDetails.toString()}</p></ul></div>`;
        console.log("passei")
    }
    return items;

}

// ============================ BUSCA ============================
function insereItem(event) {
    const inputUser = document.getElementById("meu-input").value.toUpperCase();
    console.log(inputUser)
    const filtroInputUser = filtraMarca(armazenaObjetos, inputUser)
    filtroInputUser.length !=0?  document.getElementById("lista").innerHTML = generateListItems(filtroInputUser): alert("Item não encontrado")
    inputUser.value = ""
   }

// ============================ LIMPAR BUSCA ============================
function limparBusca(event) {
    document.getElementById("lista").innerHTML = generateListItems(armazenaObjetos)
    const inputUser = document.getElementById("meu-input")
    inputUser.value = ""
   }


// ============================ MOTOS TELA É CARREGADA (INDEX) ============================
document.getElementById("lista").innerHTML = generateListItems(armazenaObjetos)