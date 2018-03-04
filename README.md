![GitHub Logo](/public/recursos/logos/iconoApp.png)
Format: ![Alt Text](url)

[![NPM Version][npm-image]][npm-url]

### Indice de contenidos
* [¿Qué es BestBay?](#¿Qué es BestBay?)
* [Funcionamiento](#funcionamiento)
* [La base de BestBay](#La base de BestBay)
* [Desarrolladores](#desarrolladores)
## ¿Qué es BestBuy?

![GitHub Logo](/public/recursos/readme/whatis.png)
Format: ![Alt Text](url)

BestBay es una aplicación Web y Móvil que proporciona información y comparativa de los productos que se venden en dos grandes comercios digitales como son eBay y BestBuy. En esta primera versión _(v1.0)_ de la aplicación se pueden realizar búsquedas de: ***Todas***, ***Smartphones*** , ***TV y salud***, y ***Fitness and beauty***. Posee unos campos a modo de filtros para la búsqueda para así tener de esta un resultado más concreto y conciso. Desde ella también podremos acceder a la venta de los productos mediante un link directo a la página que lo posee. Por último, posee un apartado de fidelización mediantes cuentas de usuario a las que se puede acceder mediante redes sociales.
## Funcionamiento

![GitHub Logo](/public/recursos/readme/busqueda.png)
Format: ![Alt Text](url)

La aplicación posee una interfaz intuitiva y fácil de usar. Por un lado tenemos campos de rellenar, `<input>`:

:**Filtro** _(producto que deseamos buscar)_

![GitHub Logo](/public/recursos/readme/filtro.png)
Format: ![Alt Text](url)

:**Marca** _(marca del producto)_

![GitHub Logo](/public/recursos/readme/marca.png)
Format: ![Alt Text](url)

:**Precio** _(máximo y mínimo)_

![GitHub Logo](/public/recursos/readme/precio.png)
Format: ![Alt Text](url)

Por otro lado tenemos seleccionadores, `<select>`:

:**Categoría** _(Todas, Smartphones, TV y salud y Fitness and beauty)_

![GitHub Logo](/public/recursos/readme/categoria.png)
Format: ![Alt Text](url)

:**Moneda** _(EUR, USD, GBP y JPY)_

![GitHub Logo](/public/recursos/readme/moneda.png)
Format: ![Alt Text](url)

:**Orden** _(precio ascendente o descendente)_

![GitHub Logo](/public/recursos/readme/orden.png)
Format: ![Alt Text](url)

Por último tendríamos el propio botón de buscar, `<button>`:

:**Buscar** _(realizar la búsqueda)_  

![GitHub Logo](/public/recursos/readme/buscar.png)
Format: ![Alt Text](url)

Durante las llamadas a las APIs de ambas páginas, un `<spinner>` nos indicará que está realizando nuestra búsqueda y una vez esta se haya completado, éste desaparecerá para mostrarnos la información que aparecerá en la misma pantalla de búsqueda teniendo : 

![GitHub Logo](/public/recursos/readme/losdos.png)
Format: ![Alt Text](url)

:Lado izquierdo de resultados (**[eBay](https://www.ebay.es/ "eBay")**)
:Lado derecho de resultados (**[BestBuy](https://www.bestbuy.com/ "BestBuy")**)

Dentro de cada lista dispondremos una serie de resultados maquetados en `<div>` a modo de cajetines con la información del producto en venta: 
1. Foto
2. Nombre del producto
3. Precio
4. Información detallada

![GitHub Logo](/public/recursos/readme/carta1.png)
Format: ![Alt Text](url)

![GitHub Logo](/public/recursos/readme/carta2.png)
Format: ![Alt Text](url)

En la parte superior dispondremos de botones para loguearnos en nuestra web mediante redes sociales (_Facebook_, _Twitter_, _GitHub_, _Google_). En la parte inferior estarán los enlaces de interés que nos llevará a los repositorios de los desarrolladores.

## La base de BestBay

BestBay está basada y montada en varias tecnologías.
* (**[React](https://reactjs.org/ )**) (Mediante esta tecnología construimos dinámicamente y por bloques toda la interfaz gráfica de la aplicación. Con la creación de clases como  `Components` de React y los `render` de estos, efectuamos de forma de efectiva nuestro `virtual DOM`).

* (**[Ajax](https://developer.mozilla.org/es/docs/Web/Guide/AJAX )**) (Con Ajax realizamos las llamadas a las APIs. En la aplicación se usan tres: _API de eBay_, _API de BestBuy_ y _API de Forex_).
* (**[Materialize](http://materializecss.com/ )**) (Framework basado en Material Design de Google que nos permite darle un aspecto profesional, así como un diseño intuitivo y claro de los componentes a la aplicación).
* (**[Jquery](https://jquery.com/ )**) (Es la herramienta que permite operar sobre el `DOM` y aplicarle a los componentes del mismo los distintos `Events` y `Class`).
* (**[Firebase](https://firebase.google.com/ )**) (Librería de Google que nos permite realizar logins a nuestra aplicación mediante redes sociales de una forma sencilla y compacta. Gracias a esta librería podemos realizar los logins de las 4 R.R.S.S. ya mencionadas).

## Desarrolladores

**[Daniel Afonso Hernández](https://github.com/DanielAfons)**  
**[Luis José Sanfiel Orsini](https://github.com/Luischamo3)**  
**[Jesús David González Pascolo](https://github.com/jesdagonpas)**  
