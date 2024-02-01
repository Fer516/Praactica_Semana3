function calcularVelocidad() {
    var distancia = parseFloat(document.getElementById('distancia').value);
    var tiempo = parseFloat(document.getElementById('tiempo').value);

    var velocidad = (distancia * 1000) / (tiempo * 60); // convirtiendo km a metros y minutos a segundos
    document.getElementById('resultadoVelocidad').innerText = "La velocidad es: " + velocidad.toFixed(2) + " m/s";
}

function clasificarTriangulo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById('resultadoTriangulo').innerText = "El triángulo es equilátero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        document.getElementById('resultadoTriangulo').innerText = "El triángulo es isósceles.";
    } else {
        document.getElementById('resultadoTriangulo').innerText = "El triángulo es escaleno.";
    }
}

function calcularOperacion(operador) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operador no válido";
    }

    document.getElementById('resultadoOperacion').innerText = "El resultado es: " + resultado;
}

function verificarPrimo() {
    var numero = parseInt(document.getElementById('numeroPrimo').value);
    var esPrimo = true;

    if (numero <= 1) {
        esPrimo = false;
    } else {
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        document.getElementById('resultadoPrimo').innerText = numero + " es un número primo.";
    } else {
        document.getElementById('resultadoPrimo').innerText = numero + " no es un número primo.";
    }
}
