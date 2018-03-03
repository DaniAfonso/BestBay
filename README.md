# BestBay
### Indice de contenidos
* [¿Qué es BestBay?](#whatis)
* [Funcionamiento](#funcionamiento)
* [La base de BestBay](#base)
* [Desarrolladores](#desarrolladores)
## ¿Qué es BestBuy?
{#whatis}
BestBay es una aplicación Web y Móvil que proporciona información y comparativa de los productos que se venden en dos grandes comercios digitales como son eBay y BestBuy. En esta primera versión _(v1.0)_ de la aplicación se pueden realizar búsquedas de: ***Smartphones*** , ***TV y salud***, y ***Fitness and beauty***. Posee unos campos a modo de filtros para la búsqueda para así tener de esta un resultado más concreto y conciso. Desde ella también podremos acceder a la venta de los productos mediante un link directo a la página que lo posee. Por último, posee un apartado de fidelización mediantes cuentas de usuario a las que se puede acceder mediante redes sociales.
## Funcionamiento
{#funcionamiento}
La aplicación posee una interfaz intuitiva y fácil de usar. Por un lado tenemos campos de rellenar, `<input>`:

: **Filtro** _(producto que deseamos buscar)_
: **Precio** _(máximo y mínimo)_

Por otro lado tenemos seleccionadores, `<select>`:

: **Categoría** _(Smartphones, TV y salud y Fitness and beauty)_
: **Marca** _(LG,  Apple, Samsung)_
: **Moneda** _(EUR, USD, GBP y JPY)_

Por último tendríamos el propio botón de buscar, `<button>`:

: **Buscar** _(realizar la búsqueda)_  

Durante las llamadas a las APIs de ambas páginas, un `<spinner>` nos indicará que está realizando nuestra búsqueda y una vez esta se haya completado, éste desaparecerá para mostrarnos la información que aparecerá en la misma pantalla de búsqueda teniendo : 

: Lado izquierdo de resultados (**[eBay](https://www.ebay.es/ "eBay")**)
: Lado derecho de resultados (**[BestBuy](https://www.bestbuy.com/ "BestBuy")**)

Dentro de cada lista dispondremos una serie de resultados maquetados en `<div>` a modo de cajetines con la información del producto en venta: 
1. Foto
2. Nombre del producto
3. Precio
4. Información detallada

En la parte superior dispondremos de botones para loguearnos en nuestra web mediante redes sociales (_Facebook_, _Twitter_, _GitHub_, _Google_). En la parte inferior estarán los enlaces de interés que nos llevará a los repositorios de los desarrolladores.

## La base de BestBay
{#base}
BestBay está basada y montada en varias tecnologías.
* **React** (Mediante esta tecnología construimos dinámicamente y por bloques toda la interfaz gráfica de la aplicación. Con la creación de clases como  `Components` de React y los `render` de estos, efectuamos de forma de efectiva nuestro `virtual DOM`).

* **Ajax** (Con Ajax realizamos las llamadas a las APIs. En la aplicación se usan tres: _API de eBay_, _API de BestBuy_ y _API de Forex_).
* **Materialize** (Framework de Google que nos permite darle un aspecto profesional, así como un diseño intuitivo y claro de los componentes a la aplicación).
* **Jquery** (Es la herramienta que permite operar sobre el `DOM` y aplicarle a los componentes del mismo los distintos `Events` y `Class`).
* **Firebase** (Librería de Google que nos permite realizar logins a nuestra aplicación mediante redes sociales de una forma sencilla y compacta. Gracias a esta librería podemos realizar los logins de las 4 R.R.S.S. ya mencionadas).

## Desarrolladores
{#desarrolladores}
**[Daniel Afonso Hernández](https://github.com/DanielAfons)**
**[Luis José Sanfiel Orsini](https://github.com/Luischamo3)**
**[Jesús David González Pascolo](https://github.com/jesdagonpas)**
