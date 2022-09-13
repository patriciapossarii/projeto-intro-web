const objeto1 = {
    motorcycleModel: "F800",
    motorcycleBrand: "BMW",
    motorcycleManufactureYear: 2015,
    motorcycleEngineCapacity1: 798,
    motorcycleDocumentationIsOK: true,
    motorcycleDetails: ["Azul", "Corrente", "Partida Elétrica", "Peso 207 Kg"],
}

const objeto2 = {
    motorcycleModel: "Tiger 800",
    motorcycleBrand: "Triumph",
    motorcycleManufactureYear: 2019,
    motorcycleEngineCapacity: 800,
    motorcycleDocumentationIsOK: false,
    motorcycleDetails: ["Preto", "Corrente", "Partida Eletrica", "Peso 213 Kg"],
}

const objeto3 = {
    motorcycleModel: "V-Rod",
    motorcycleBrand: "Harley Davidson",
    motorcycleManufactureYear: 2016,
    motorcycleEngineCapacity: 1250,
    motorcycleDocumentationIsOK: true,
    motorcycleDetails: ["Laranja", "Peso 303"],
}

const averageManufactureYear = (objeto1.motorcycleManufactureYear + objeto2.motorcycleManufactureYear + objeto3.motorcycleManufactureYear) / 3

armazenaObjetos = []

if (objeto1.motorcycleDocumentationIsOK === true) {
    armazenaObjetos.push(objeto1)
    console.log("Item adicionado com sucesso!")
}
else {
    alert("Item NÃO adicionado! Favor verificar com o setor de cadastro")
}
if (objeto2.motorcycleDocumentationIsOK === true) {
    armazenaObjetos.push(objeto2)
    console.log("Item adicionado com sucesso!")
}
else {
    alert("Item NÃO adicionado! Favor verificar com o setor de cadastro")
}
if (objeto3.motorcycleDocumentationIsOK === true) {
    armazenaObjetos.push(objeto3)
    console.log("Item adicionado com sucesso!")
}
else {
    alert("Item NÃO adicionado! Favor verificar com o setor de cadastro")
}

console.log(armazenaObjetos)

console.log(`
A média do ano das motos é: ${Math.round(averageManufactureYear)}
`)