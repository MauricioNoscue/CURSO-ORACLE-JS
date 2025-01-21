# Amigo Secreto App

Este es un proyecto simple en JavaScript que permite a los usuarios agregar nombres de amigos a una lista y luego sortear un "amigo secreto" de manera aleatoria. La aplicación está diseñada para ser utilizada en un entorno web.

## Funcionalidades

- **Agregar Amigos**: Permite al usuario ingresar nombres de amigos y agregarlos a una lista.
- **Actualizar Lista**: Muestra la lista actualizada de amigos en la interfaz.
- **Limpiar Caja**: Limpia el campo de entrada después de agregar un nombre.
- **Sortear Amigo**: Selecciona un amigo al azar de la lista y lo muestra como el "amigo secreto".

## Cómo Usar

### Agregar Amigos

1. Ingresa el nombre de un amigo en el campo de texto.
2. Haz clic en el botón "Agregar" para añadir el nombre a la lista.
3. Si el campo está vacío, se mostrará una alerta pidiendo que ingreses un nombre.

### Sortear Amigo

1. Una vez que hayas agregado varios amigos a la lista, haz clic en el botón "Sortear" para seleccionar un amigo secreto al azar.
2. El nombre del amigo seleccionado se mostrará en la pantalla.

## Estructura del Código

### Variables Globales

- `let amigos = [];`: Almacena la lista de amigos.
- `let resultado = '';`: Almacena el HTML generado para la lista de amigos.

### Funciones

- `agregarAmigo()`: Agrega un nombre a la lista de amigos y actualiza la lista en la interfaz.
- `actualizarLista([amigos])`: Genera el HTML para la lista de amigos y lo muestra en la página.
- `limpiarCaja()`: Limpia el campo de entrada después de agregar un nombre.
- `sortearAmigo()`: Selecciona un amigo al azar de la lista y lo muestra como el "amigo secreto".

## Requisitos

- Un navegador web moderno que soporte JavaScript.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para comenzar a usar la aplicación.