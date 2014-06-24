---
layout: post
title: Damas en Python
---

![alt tag](http://es.tinypic.com?ref=2u7my6r)

Buenas, os presento el juego de Damas que he creado junto con Adrián Calvo. Las reglas no son exactamente las originales, ya que ha sido una práctica para la universidad, por lo que hemos tenido que seguir las reglas que nos pedía el profesor y no las que nosotros habríamos preferido.

La principal diferencia frente a unas damas clásicas reside en que se puede mover hacia atrás y no hay prioridad de movimiento, es decir, no es obligatorio comer en el caso de que se pueda. Además en lugar de seleccionar la casilla donde quedaría la ficha después de haber comido, se selecciona la casilla de la ficha que se quiere comer.


  > El juego ha sido desarrollado en Python, es la primera vez que usamos este lenguaje, tanto mi compañero como yo.

La interfaz gráfica ha sido creada con la librería PyGtk3. Todavía queda mucho por mejorar, y muchas cosas por añadir, pero creo que ya es una cosa que se puede enseñar.

Algunas de las funcionalidades que se han implementado son las siguientes:

* Comida múltiple de fichas automáticamente (se busca el camino más largo en el caso de que haya más de una posibilidad).
* Posibilidad de deshacer movimientos.
* Poder cargar y guardar partidas en un fichero.
* Empezar nueva partida sin necesidad de volver a abrir el juego.

El código del proyecto ha sido alojado en GitHub, para acceder a él pulsa [aquí](https://href.li/?https://github.com/AdriSergio/DamasPyhonGtk3).


