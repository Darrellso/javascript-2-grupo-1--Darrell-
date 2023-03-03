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
  agregarlibros(libro) {
    this.libros.push(libro);
  }
  agregarcomics(comic) {
    this.comics.push(comic);
  }
}
//const libross = new librería("magnus chase", "la casa de el");
//const comicss = new librería("civil war", "new york ");

//console.log(libross.agregarlibros);
//console.log(comicss.agregarcomics);

//2. Debe tener una clase Libro que represente un libro y tenga las siguientes propiedades: título, autor, precio, cantidad y año.

class libro {
  #titulo;
  #autor;
  #precio;
  #cantidad;
  #año;
  constructor(titulo, autor, precio, cantidad, año) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#precio = precio;
    this.#cantidad = cantidad;
    this.#año = año;
  }
  set cambioCantidad(nuevaCantidad){
    if (nuevaCantida < 0) {
      nuevaCantidad = 0
    }
    this.#cantidad = nuevaCantidad
  }
  set cambioAño(nuevaCantida){
    this.#año = nuevaCantida
  }
  //4. ** Los usuarios no pueden modificar datos de los libros o comics, pero sí pueden modificar la cantidad de libros disponibles,
// o el año, de igual forma deben ser propiedades privadas

  get titulo(){
    return this.#titulo
  }
  set titulo(titulo){
    this.#titulo = titulo
  }
  get autor(){
    return this.#autor
  }
  set autor(autor){
    this.#autor = autor
  }
  get precio(){
    return this.#precio
  }
  set precio(precio){
    this.#precio = precio
  }
  get cantidad(){
    return this.#cantidad
  }
  set cantidad(cantidad){
    this.#cantidad = cantidad
  }
   //Debe haber un método que permita obtener la información completa de un libro o comic, este debe llamarse "getInfo"
  getinfo() {
    let Info = 
    `titulo es ${this.#titulo}, 
    escrito por : ${this.#autor}, 
    su precio es: ${this.#precio},
    disponibles: ${this.#cantidad},
    año: ${this.#año}`;
    if (this.#cantidad <= 0) {
      Info = "No hay ejemplares disponibles";
    }
    return Info;
  }
}

//3. Debe tener una clase Comic que herede de Libro y tenga las siguientes propiedades extras: dibujante, editorial, volumen.
class comic extends libro {
  
  constructor(
    titulo,
    autor,
    precio,
    cantidad,
    año,
    dibujante,
    editorial,
    volumen
  ) {
    super(titulo, autor, precio, cantidad, año);
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }
  getinfo() {
    let Info =
    `Elcomic es ${this.titulo}, 
    autor : ${this.autor}, 
    precio : ${this.precio},
    disponibles: ${this.cantidad},
    año: ${this.año},
    artista es: ${this.dibujante},
    editorial es: ${this.editorial}, 
    volumen: ${this.volumen}`;
    if (this.cantidad <= 0) {
      Info = "No hay ejemplares disponibles";
    }
    return Info;
  }
}
const primerlibro = new libro( "magnus chase","rick riordan",1300,0,2013)
primerlibro.cantidad = 6;
primerlibro.año = 2023;
console.log(primerlibro.getinfo())
const primercomic = new comic( "civil war","stan lee",2000,150,2010,"yo","mi casa","alto")
console.log(primercomic.getinfo())

// ** tener en cuenta que para poder acceder y modificar las propiedades privadas debe usar getters y setters
//
//console.log(`${primerlibro.cantidad}`)





//6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga "No hay ejemplares disponibles".
