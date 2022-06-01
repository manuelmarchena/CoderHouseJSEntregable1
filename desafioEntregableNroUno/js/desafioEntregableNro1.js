//Variable
let Preguntacontinuar = confirm("A través de estas alertas podra calcular los numero primos dentro de un intervalo ¿desea iniciar?")
let numeroIngresado1
let numeroIngresado2
let contadorDeMultiplos = 0
let matrizDePrimos = []
let limiteInferior
let limiteSuperior

//Salida rapida del proceso 
if (Preguntacontinuar) {
    // Solicita los valores dentro del intervalo
    numeroIngresado1 = prompt("Por favor ingrese el intervalo inferior")
    numeroIngresado2 = prompt("Ingrese el intervalo superior")
    debugger
    //Verifica que el número ingresado sea valido 
    while (isNaN(numeroIngresado1) || numeroIngresado1 == "0") {
        numeroIngresado1 = prompt("introdujo un numero invalido para el intervalo inferior, por favor vuelva ingresarlo")
    }

    while (isNaN(numeroIngresado2) || numeroIngresado2 == "0") {
        numeroIngresado2 = prompt("introdujo un numero invalido para el intervalo superior, por favor vuelva ingresarlo")
    }
    // Convierte en numero el valor ingresado por prompt
    // Si el usuario ingresa decimales solamente va a conservar el entero
    numeroIngresado1 = parseInt(numeroIngresado1)
    numeroIngresado2 = parseInt(numeroIngresado2)
    limiteInferior = numeroIngresado1
    limiteSuperior = numeroIngresado2
        //Verifica que el intervalo se conserve dentro de los positivos
    if (numeroIngresado1 < numeroIngresado2) {
        for (i = numeroIngresado1; i <= numeroIngresado2; i++) {
            for (j = 0; j < numeroIngresado2; j++) {
                modulo = numeroIngresado1 % j
                    //Determina si es multiplo
                if (modulo == 0) {
                    contadorDeMultiplos++
                    //console.log("para ", numeroIngresado1, "contador de multiplos ", contadorDeMultiplos, "j ", j)
                }
            }
            // "Solamente puede ser divisible por si mismo y la unidad"
            if (contadorDeMultiplos <= 2) {
                // console.log("primo ", numeroIngresado1)
                matrizDePrimos.push(numeroIngresado1)
            }
            //Reinicia las variables antes de iterar nuevamente
            j = 0
            contadorDeMultiplos = 0
            numeroIngresado1++
        }

    } else {
        alert("Refresh y vuelva a introducir los valores, el menor primero, y el mayor despues")
    }
}
//Imprime tabla con los numeros primos dentro del intervalo seleccionado
console.log("Los valores introducidos para el intervalo fueron [", limiteInferior, "] y [", limiteSuperior, "]")
console.table(matrizDePrimos)