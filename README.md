Al interior de las carpetas se encuentran los códigos utilizados para montar la página web
Se utilizó gitignore para impedir que se suban las dependecias de node

<-------------------------------------------SERVIDOR------------------------------------------->
-  En la carpeta SERVIDOR se encuentra el archivo db-mysql.js, este permite configurar la BD y crear el objeto de conexión.
-  El archivo index.js Importa los enrutadores y crea el objeto de aplicación estableciendo las dependencias que usará
-  Al interior de la carpeta "routes" se encuentran cada una de las rutas disponibles en la página, y se invocan las funciones
   que consultan a la BD y se adiciona un control de errores para evitar que la página caiga.
-  Dentro de la carpeta models se encuentra el controlador referente a las 3 rutas, allí están las funciones para consultar
   a la BD dependiendo de las peticiones y rutas en las que el usuario esté.

<-------------------------------------------CLIENTE-------------------------------------------->    
- En la carpeta CLIENTE\dashboard buses se tiene:
- Archivo index.html para definir las directivas correspondientes al estilo de página y la el script que se usará ("main.js")
- main.js importa las librerías y/o dependencias necesarias, de igual manera crea el objeto de aplicación y hace su levantamiento
- El archivo App.vue importa el componente de enrutamiento que contiene las vistas de cada sección.
- Al interior de la carpeta router se encuentra el archivo index.js este archivo importa el enrutador de vue y cada una de las
  vistas de la página, luego las asocia a una ruta específica.
- Dentro de la carpeta views se encuentran definidas todas las vistas que tendrá la página, cada una de ellas importa los componentes
  que se mostraran en esta ruta y los renderiza en el orden definido.
- Por último se tiene la carpeta components donde se almacenan todos los componentes que se renderizaran en la página, notese que el
  componente NavBar.vue, es un componente de barra de navegación y este se encuentra en todas las vistas.
