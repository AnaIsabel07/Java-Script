// Trabajo realizado por: Ana Isabel López Durán 
// ---------------- Declaración de variables utilizando let y const -----------------------
// Const
const Dias_semana = 7;
const horas_dia = 24;
const Euler = 2.71828;
const velocidad_luz = 299792458 
const color_cielp = 'Azul'

// Let 
let ciudad = 'Medellín';
let dirección = 'Calle 112A #67-55';
let telefono = '5816981';
let color_carro = 'Rojo';
let horasTrabajo = 35;

// ----------------------- Función sin parámetros -----------------------------
const funcionSinParametros = () => {
    console.log("Esta es una función sin parámetros");
};
const obtenerHoraActual = () => {
    const fecha = new Date();
    console.log("La hora actual es: " + fecha.getHours() + ":" + fecha.getMinutes());
};
const mostrarMensaje = () => {
    alert("Este es un mensaje de alerta.");
};

// ----------------------- Función con un parámetro ------------------------
const convertirMayusculas = (texto) => {
    return texto.toUpperCase();
};
const verificarNumeroPrimo = (numero) => {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
};
const cuadrupleNumero = (x) => {
    return x * 4;
};

// ---------------------- Función con dos o más parámetros --------------------- 
const calcularDescuento = (monto, porcentaje) => {
    return monto - (monto * porcentaje / 100);
};
const calcularAreaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};
const concatenarPalabras = (palabra1, palabra2) => {
    return palabra1 + " " + palabra2;
};

// --------------------- Llamado a las funciones y mostrar resultados -----------------------
console.log(funcionSinParametros());
console.log(obtenerHoraActual());
console.log(mostrarMensaje());
console.log(convertirMayusculas("buenos días"));
console.log(verificarNumeroPrimo(37));
console.log(cuadrupleNumero(12));
console.log(calcularDescuento(100, 10));
console.log(calcularAreaTriangulo(5, 8));
console.log(concatenarPalabras("Que", "bendición"));

