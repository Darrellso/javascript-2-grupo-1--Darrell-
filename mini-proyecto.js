//Crear un programa que simule una librería. Debe tener las siguientes características:
//1. Debe tener una clase Libreria que tenga las siguientes propiedades:
//     1.1 Nombre
//     1.2. Dirección
//     1.3. Libros // lista de libros
//     1.4. Comics // lista de comics
//     1.5. Debe contar un método que permita agregar libros y comics a la librería.

class librería {
  constructor(nombre, direccion, libros, comics) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.libros = libros || [];
    this.comics = comics || [];
  }
  agregarlibros(libros) {
    this.libros.push(libros);
  }
  agregarcomics(comics) {
    this.libros.push(comics);
  }
}
const libross = new librería("magnus chase", "la casa de el");
const comicss = new librería("civil war", "new york ");

console.log(libross.agregarlibros);
console.log(comicss.agregarcomics);

//2. Debe tener una clase Libro que represente un libro y tenga las siguientes propiedades: título, autor, precio, cantidad y año.

class libro {
  constructor(título, autor, precio, cantidad, año) {
    this.título = título;
    this.autor = autor;
    this.precio = precio;
    this.cantidad = cantidad;
    this.año = año;
  }
}

//3. Debe tener una clase Comic que herede de Libro y tenga las siguientes propiedades extras: dibujante, editorial, volumen.
class comic extends libro {
  constructor(
    título,
    autor,
    precio,
    cantidad,
    año,
    dibujante,
    editorial,
    volumen
  ) {
    super(título, autor, precio, cantidad, año);
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }
}

//4. ** Los usuarios no pueden modificar datos de los libros o comics, pero sí pueden modificar la cantidad de libros disponibles, o el año, de igual forma deben ser propiedades privadas
// ** tener en cuenta que para poder acceder y modificar las propiedades privadas debe usar getters y setters


//5. Debe haber un método que permita obtener la información completa de un libro o comic, este debe llamarse "getInfo".

//6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga "No hay ejemplares disponibles".

