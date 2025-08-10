// Importar el módulo readline para leer datos desde la consola (Importante para Node.js):
const readline = require('readline');

// Crear interfaz para leer desde la consola con un una entrada y salida:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular Fibonacci:
function fibonacci(n) {
    if (n < 0) return "No existe Fibonacci para números negativos";
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Función que devuelve una promesa para leer datos: 
function leerNumero(pregunta) {
    return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
            resolve(parseInt(respuesta));
        });
    });
}

// Función principal usando async/await:
async function main() {
    try {
    const numero = await leerNumero("Ingrese un número para calcular Fibonacci: ");
    if (isNaN(numero)) {
        console.log("Por favor ingrese un número válido.");
    } else {
        console.log(`Fibonacci(${numero}) = ${fibonacci(numero)}`);
    }
    } catch (error) {
        console.error("Ocurrió un error:", error);
    } finally {
        rl.close();
    }
}

// Ejecutar el programa
main();
