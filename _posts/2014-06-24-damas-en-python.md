---
layout: post
title: Damas en Python
---

![alt tag](http://es.tinypic.com?ref=2u7my6r)

Buenas, os presento el juego de Damas que he creado junto con Adri�n Calvo. Las reglas no son exactamente las originales, ya que ha sido una pr�ctica para la universidad, por lo que hemos tenido que seguir las reglas que nos ped�a el profesor y no las que nosotros habr�amos preferido.

La principal diferencia frente a unas damas cl�sicas reside en que se puede mover hacia atr�s y no hay prioridad de movimiento, es decir, no es obligatorio comer en el caso de que se pueda. Adem�s en lugar de seleccionar la casilla donde quedar�a la ficha despu�s de haber comido, se selecciona la casilla de la ficha que se quiere comer.


  > El juego ha sido desarrollado en Python, es la primera vez que usamos este lenguaje, tanto mi compa�ero como yo.

La interfaz gr�fica ha sido creada con la librer�a PyGtk3. Todav�a queda mucho por mejorar, y muchas cosas por a�adir, pero creo que ya es una cosa que se puede ense�ar.

Algunas de las funcionalidades que se han implementado son las siguientes:

* Comida m�ltiple de fichas autom�ticamente (se busca el camino m�s largo en el caso de que haya m�s de una posibilidad).
* Posibilidad de deshacer movimientos.
* Poder cargar y guardar partidas en un fichero.
* Empezar nueva partida sin necesidad de volver a abrir el juego.

El c�digo del proyecto ha sido alojado en GitHub, para acceder a �l pulsa [aqu�](https://href.li/?https://github.com/AdriSergio/DamasPyhonGtk3).


