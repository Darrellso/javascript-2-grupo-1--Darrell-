import Book from './Book.js'

class Comic extends Book {
    #illustrator;
    #publisher;
    #volume;
    constructor(
      title,
      autor,
      price,
      stock,
      year,
      illustrator,
      publisher,
      volume
    ) {
      super(title, autor, price, stock, year);
      this.#illustrator = illustrator;
      this.#publisher = publisher;
      this.#volume = volume;
    }
  
    getInfo() {
      const info = super.getInfo();
      return {
        ...info,
        illustrator: this.#illustrator,
        publisher: this.#publisher,
        volume: this.#volume,
      };
    }
  }
  
  export default Comic;