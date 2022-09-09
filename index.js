const motorcycleModel1 = "F800"
const motorcycleBrand1 = "BMW"
const motorcycleManufactureYear1 = 2015
const motorcycleEngineCapacity1 = 798
const motorcycleFlex1 = false
const motorcycleDetails1 = ["Azul","Corrente","Partida Elétrica", "Peso 207 Kg"]

const motorcycleModel2 = "Tiger 800"
const motorcycleBrand2 = "Triumph"
const motorcycleManufactureYear2 = 2019
const motorcycleEngineCapacity2 = 800
const motorcycleFlex2 = false
const motorcycleDetails2 = ["Preto", "Corrente", "Partida Eletrica", "Peso 213 Kg"]

const motorcycleModel3 = "V-Rod"
const motorcycleBrand3 = "Harley Davidson"
const motorcycleManufactureYear3 = 2016
const motorcycleEngineCapacity3 = 1250
const motorcycleFlex3 = false
const motorcycleDetails3 = ["Laranja", "Peso 303"]

const averageManufactureYear = (motorcycleManufactureYear1+motorcycleManufactureYear2+motorcycleManufactureYear3)/3
const checkFlex = motorcycleFlex1 && motorcycleFlex2 && motorcycleFlex3

console.log(`
Modelo: ${motorcycleModel1.toUpperCase()}
Fabricante: ${motorcycleBrand1}
Ano de Fabricação: ${motorcycleManufactureYear1}
Cilindrada: ${motorcycleEngineCapacity1}
Flex: ${motorcycleFlex1}
Detalhes: ${motorcycleDetails1}
`)

console.log(`
Modelo: ${motorcycleModel2.toLocaleUpperCase()}
Fabricante: ${motorcycleBrand2}
Ano de Fabricação: ${motorcycleManufactureYear2}
Cilindrada: ${motorcycleEngineCapacity2}
Flex: ${motorcycleFlex2}
Detalhes: ${motorcycleDetails2}
`)

console.log(`
Modelo: ${motorcycleModel3.toLocaleUpperCase()}
Fabricante: ${motorcycleBrand3}
Ano de Fabricação: ${motorcycleManufactureYear3}
Cilindrada: ${motorcycleEngineCapacity3}
Flex: ${motorcycleFlex3}
Detalhes: ${motorcycleDetails3}
`)

console.log(`
A média do ano das motos é: ${Math.round(averageManufactureYear)}
Contém motos flex: ${checkFlex}
`)






