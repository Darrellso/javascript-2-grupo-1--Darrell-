

class Book {
    #title;
    #autor;
    #price;
    #stock;
    #year;
  
    constructor(title, autor, price, stock, year) {
      this.#title = title;
      this.#autor = autor;
      this.#price = price;
      this.#stock = stock;
      this.#year = year;
    }
  
    getInfo() {
      return {
        title: this.#title,
        autor: this.#autor,
        price: this.#price,
        year: this.#year,
        stock: !this.#stock ? "No hay ejemplares disponibles" : this.#stock,
      };
    }
  
    // setters
    set setStock(stock) {
      this.#stock = stock;
    }
  
    set setYear(year) {
      this.#year = year;
    }
  }
  
  export default Book;