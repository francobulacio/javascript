
//Cotizar de dolares a pesos y pesos a dolares

let dolarHoy = 291;

const select = () => "Elegir opción:  1 - PESOS A DOLARES  2 -  DOLARES A PESOS   3 - Salir del simulador"

let seleccionar =  parseInt (prompt(select()));

//función que convierte de pesos a dólares
const pesosADolar = pesos => dolarHoy / pesos

//función que convierte de dólares a pesos
const dolarAPesos = dolares => dolarHoy / dolares


// bucle hasta que el cliente opte por la opción de salir del simulador (seleccionar === 3)
while (seleccionar !== 3){ 

    let valor= parseInt (prompt ("Ingrese valor"))

    if (seleccionar === 1) {

        alert("El precio en pesos es de: $" + pesosADolar(valor))

    } else if (seleccionar === 2){

        alert("El precio en dolares es de: U$D" + dolarAPesos(valor))

    } else {

        alert("Por favor elija la opción 1 o 2")

    }
    seleccionar =  parseInt (prompt(select()))
}

alert("Gracias por utilizar el simulardor")
