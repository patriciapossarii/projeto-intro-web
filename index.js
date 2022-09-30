const objeto1 = {
    motorcycleModel: "F800",
    motorcycleBrand: "BMW",
    motorcycleManufactureYear: 2015,
    motorcycleEngineCapacity: 798,
    motorcycleDocumentationIsOK: true,
    motorcycleDetails: ["Azul", "Corrente", "Partida Elétrica", "Peso 207 Kg"],
    motorcyclePhoto:"foto",
}

const objeto2 = {
    motorcycleModel: "Tiger 800",
    motorcycleBrand: "Triumph",
    motorcycleManufactureYear: 2019,
    motorcycleEngineCapacity: 800,
    motorcycleDocumentationIsOK: false,
    motorcycleDetails: ["Preto", "Corrente", "Partida Eletrica", "Peso 213 Kg"],
    motorcyclePhoto:"foto",
}

const objeto3 = {
    motorcycleModel: "V-Rod",
    motorcycleBrand: "Harley Davidson",
    motorcycleManufactureYear: 2016,
    motorcycleEngineCapacity: 1250,
    motorcycleDocumentationIsOK: true,
    motorcycleDetails: ["Laranja", "Peso 303"],
    motorcyclePhoto:"foto",
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


for (i = 0; i <= armazenaObjetos.length; i++) {
    console.log("Itens adicionados com sucesso-!:", armazenaObjetos[i])
}
//console.log(`================= SEMANA 3 - ITEM 1 E 2 ===========================`)

for( let i of armazenaObjetos){
    console.log(`${i.motorcycleModel.toUpperCase()}
    Modelo: ${i.motorcycleBrand}
    Marca: ${i.motorcycleManufactureYear}
    Capacidade do motor: ${i.motorcycleEngineCapacity}
    A documentação estpa OK? ${i.motorcycleDocumentationIsOK}
    Detalhes: ${i.motorcycleDetails.toString()}`)
 }


console.log(armazenaObjetos)

console.log(`================= SEMANA 3 - ITEM 3 ===========================`)

const objetoParaString = (moto) => {
    let transformaString = moto.motorcycleModel + " " + moto.motorcycleBrand + " " + moto.motorcycleManufactureYear + " " + moto.motorcycleEngineCapacity + " " + moto.motorcycleDocumentationIsOK + " " + moto.motorcycleDetails
    console.log("Retona o Objeto como String: ", transformaString)
}
objetoParaString(objeto1)

console.log(`================= SEMANA 3 - ITEM 4 ===========================`)


const filtraMarca = (recObjeto,recString) =>{
    const retornaObjeto = recObjeto.filter((brand) => {
         return brand.motorcycleBrand === recString
     
     })
     return retornaObjeto
}
const filtro = filtraMarca(armazenaObjetos,"Harley Davidson")

filtro.length!=0? console.log("Marca Filtrada", filtro): alert("O item pesquisado nao existe")



console.log(`============================================`)


/*

-----


-----
${objeto3.motorcycleModel.toUpperCase()}
Modelo: ${objeto3.motorcycleBrand}
Marca: ${objeto3.motorcycleManufactureYear}
Capacidade do motor: ${objeto3.motorcycleEngineCapacity}
A documentação estpa OK? ${objeto3.motorcycleDocumentationIsOK}
Detalhes: ${objeto3.motorcycleDetails}

`)
*/

console.log(`============================================`)

console.log(`A média do ano das motos é: ${Math.round(averageManufactureYear)}`)