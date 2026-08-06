/**
 * EJERCICIOS DE PRÁCTICA: OPERADORES Y LÓGICA EN JAVASCRIPT
 * Basado en los archivos: 01-Aritmeticos a 08-Ternario
 */

// --- 1. El Validador de Precios (Basado en 01 y 02) ---
// Tienes una variable 'precioBase' con valor 100 y una variable 'impuesto' de 0.21 (21%).
// Crea un código que:
// a) Sume el impuesto al precio usando un operador de asignación compuesta (+= o *=).
// b) Aplique un descuento de 10 unidades usando decremento o asignación compuesta.
// c) Calcule cuánto costaría si quisiéramos comprar 3 unidades de ese producto final.


// --- 2. Comparación de Tipos (Basado en 03) ---
// Dadas las siguientes variables:
// let v1 = "25";
// let v2 = 25;
// Escribe tres comparaciones que devuelvan 'true' y tres que devuelvan 'false' 
// sin cambiar el valor de las variables, jugando con la igualdad estricta y relacionales.


// --- 3. Sistema de Acceso Multinivel (Basado en 04 y 08) ---
// Crea un sistema para un club que verifique lo siguiente:
// - El usuario debe ser mayor de 18 años.
// - Debe tener una invitación (booleano) O ser un cliente VIP (booleano).
// Usa una sola línea de código con el operador ternario para asignar a una variable 
// 'puedeEntrar' el mensaje "Acceso concedido" o "Acceso denegado".


// --- 4. El Valor por Defecto (Basado en 05 - Falsy) ---
// Tienes una variable 'inputUsuario' que puede venir como "", null, 0 o un nombre.
// Usando el comportamiento de cortocircuito (short-circuit), asigna a una variable 
// 'nombreVisible' el valor de 'inputUsuario', pero si este es falsy, debe mostrar "Invitado".
// Prueba tu código cambiando el valor de 'inputUsuario' por cada caso falsy.


// --- 5. La Precedencia Inversa (Basado en 07) ---
// Escribe una expresión matemática que use suma, multiplicación y paréntesis.
// El objetivo es que, aunque la multiplicación normalmente se hace primero, 
// logres que la suma se ejecute antes para obtener un resultado de 50. 
// Usa los números 2, 3 y 10.


// --- 6. El Interruptor Lógico (Basado en 04 - NOT) ---
// Tienes una variable 'estaLloviendo' (true).
// Crea una variable 'plan' que use un operador ternario. 
// Si NO está lloviendo, el plan es "Ir al parque", si está lloviendo es "Quedarse en casa". 
// Obligatorio: Usa el operador NOT (!) dentro de la condición del ternario.


// --- 7. Módulo y Paridad (Basado en 01) ---
// Dado un número cualquiera en una variable 'n', escribe una expresión 
// que devuelva 0 si el número es par y 1 si es impar, usando solo el operador de módulo.


// --- 8. Asignación Exponencial (Basado en 01 y 02) ---
// Declara una variable 'base' con valor 2. 
// Usando únicamente operadores de asignación (sin usar Math.pow), 
// transforma ese 2 en un 16 en la menor cantidad de líneas posible.