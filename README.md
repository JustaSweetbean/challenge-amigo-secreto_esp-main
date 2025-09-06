# Para el usuario

## Introducción
Es 14 de febrero y nuevamente no te llegó ningún regalo, no hay amigo secreto para ti. Eso puede cambiar, si en vez de esperar el regalo de alguien, nóminas a uno de tus amigos (de manera aleatoria) a ser tu amigo secreto. ¿Qué recibe él o ella a cambio? ¡Un regalo también! Es como un intercambio para dos, y lo mejor es que no es una decisión comprometedora pues se elegirá a alguien de manera random.

## ¿Cómo funciona?
1. Piensa en aquellos amigos que accederían a hacer esta actividad contigo (por favor, no digas que ninguno).
2. Ingresa sus nombres en la lista, escribe el nombre de tu amigo en la caja y da click en "añadir".
3. Tus amigos aparecerán debajo, en forma de lista; una vez que termines, da click en "sortear amigo".
4. ¡Listo! Comunica a tu amigo de la dinámica y disfruta tener un regalo en tu correo este San Valentín.

## ¿Se debe instalar algo previamente para usarlo?
Absolutamente no. Funciona como cualquier otra página web y no necesitas descargar nada. Además está disponible para Softwares como Windows, Linux y MacOs.

_________________________________________________________ 

# Para desarrolladores

Este programa funciona por medio de tres funciones principales
1. **agregarAmigo**. En ella obtienes el valor del input y se asegura de que el usuario haya metido un dato válido, lo cual signífica que no puede dejar el espacio de la caja vacío, de ser así, agrega el valor a la lista con .push
2. **mostrarNombres**. Funciona por medio de un bucle 'for' que recorre la lista. Se creón un elemento ligado al HTML para poder agregar los elementos del array en formato de lista.
3. **sortearAmigo**. Utiliza Math.random y Math.floor para generar un número aleatorio del array y nos arroja el resultado con el formato del HTML usando .innerHTML

Por el momento no se cuenta con un botón para volver al estado inicial de la página, por lo que para reinciar el "juego" hay que refrescar la página. 
