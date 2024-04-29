## Control de flujo
### Ejecucion del condicional
```
let elNumero = Number(prompt("Elige un número"));
if (!Number.isNaN(elNumero)) {
    console.log("Tu número es la raíz cuadrada de " +
        elNumero * elNumero);
}
```
## Bucles while y do

Nos permite regresar a algún punto en el programa donde estábamos antes y repetirlo con nuestro estado actual.
```
let numero = 0;
while (numero <= 12) {
  console.log(numero);
  numero = numero + 2;
}
```
## Do while
```
let tuNombre;
do {
  tuNombre = prompt("¿Quién eres?");
} while (!tuNombre);
console.log("Hola " + tuNombre);
```
## Indentación
Le da claridad y legibilidad al programa

## Bucles for
```
for (let numero = 0; numero <= 12; numero = numero + 2) {
  console.log(numero);
}
```
La parte antes del primer punto y coma inicializa el bucle, generalmente definiendo una variable. La segunda parte es la expresión que verifica si el bucle debe continuar. La parte final actualiza el estado del bucle después de cada iteración.

## Saliendo de un bucle
La instrucción `break` permite salir del bucle que la contiene.
`continue` hace algo similar a `break`

## Actualización de enlaces

counter = counter + 1;
Es igual a:
counte += 1;

## Switch
```
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("Recuerda llevar un paraguas.");
    break;
  case "soleado":
    console.log("Vístete ligero.");
  case "nublado":
    console.log("Sal al exterior.");
    break;
  default:
    console.log("¡Tipo de clima desconocido!");
    break;
}
```
Se puede utilizar cualquier cantidad de `case` dentro del switch. Se debe utilizar break para salir, se puede omitir si se quiere reutilizar código, cómo en soleado que también recomienda salir al exterior. Pero no es recomendable.

## Comentarios
Fragmento de texto que forma parte de un programa pero que es completamente ignorado por la computadora.
Se pueden escribir como `//` para comentarios de una sola línea o con `/*  */` para comentar un bloque

## Resumen
Los enlaces se pueden usar para guardar fragmentos de datos bajo un nombre, y son útiles para hacer un seguimiento del estado en tu programa. El entorno es el conjunto de enlaces que están definidos. Los sistemas de JavaScript siempre colocan varios enlaces estándar útiles en tu entorno.