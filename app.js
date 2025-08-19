// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}


// Solo un registro en consola para nosotros
//console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
//funcion para convertir segun moneda a euro 
const fromAllToEuro = (value, type) =>{
    if(type === "JPY"){
        return value / oneEuroIs["JPY"]
    } else if(type === "USD"){
        return value / oneEuroIs["USD"]
    } else if (type === "GBP"){
        return value / oneEuroIs["GBP"]
    }
}




const fromEuroToDollar = (euro) =>{
    let valueInDollar = euro * oneEuroIs["USD"]
    return valueInDollar
}

const fromDollarToYen = (dollars) =>{
    let valueInYen = fromAllToEuro(dollars, "USD") * oneEuroIs["JPY"]
    return valueInYen
}

const fromYenToPound = (yen) =>{
    let valueInPound = fromAllToEuro(yen, "JPY") * oneEuroIs["GBP"]
    return valueInPound
}
    




// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum,  fromEuroToDollar, fromDollarToYen, fromYenToPound};