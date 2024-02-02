# kabeli-challenge

Este proyecto se realizo para la prueba tecnica de Kabeli.

## Instrucciones

- Para iniciar este proyecto se necesita la app "Expo Go" que se encuentra en tiendas. Esto porque se hizo directamente por expo.

Al ya tener el proyecto y la app, basta con correr los comandos:

```plaintext
    yarn install
    yarn start
```

Esto arrojara un codigo QR por la consola que al escanearlo con la aplicacion, abrira el proyecto.  


### Caso especial  
Si sale un error como:

```plaintext
 getaddrinfo ENOTFOUND exp.host
```

Es un error de expo, para correr la app se necesitaria correr

```plaintext
yarn start-offline
```

## Aplicacion

Esta es una aplicacion simple de una lista de cosas por hacer. Para ello se hizo
con react native usando directamente expo en vez de la CLI por temas de complejidad y tiempo. Basicamente se insancia una lista infinita que va cargando nuestros items, con la capacidad de cambiar su estado desde la lista o ingresar a ellos manteniendo un toque y editarlos o borrarlos desde una vista especifica. A su vez esta el boton que permite crear nuevos items.

### BD
Se utilizo Firestore (instancia no relacional de base de datos de google) donde solo se creo una coleccion simple para poder instanciar el crud de los items.

### Estado global
Se utilizo zustand para manejar el estado global. La app en si no tenia muchas instancias para su uso pero se utilizo para realizar un cache de la primera pagina de items que se cargan.

### Errores
Si ocurre un error debera lanzar un Toast o Alerta que indica que ocurrio un error pero para debugearlo de manera mas tecnica habria que agregar un log en esas instancias.

# Imagenes

![Eliminar](https://raw.githubusercontent.com/Jesquive/kabeli-challenge/main/readme/1.jpg)

![Editar](https://raw.githubusercontent.com/Jesquive/kabeli-challenge/main/readme/2.jpg)

![Crear](https://raw.githubusercontent.com/Jesquive/kabeli-challenge/main/readme/3.jpg)

![Home](https://raw.githubusercontent.com/Jesquive/kabeli-challenge/main/readme/4.jpg)