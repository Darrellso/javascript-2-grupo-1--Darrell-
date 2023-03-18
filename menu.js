import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';

(function () {
  const bookstore1 = new Bookstore('Libreria 1', 'Calle 1');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content')
  const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  }
  
  const printBookstoreName = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title">
      <img class= "logo" src="./img/2738307_compare_law_libra_icon.svg" alt="">
        ${bookstore1.getName}
      </h2>`
    )
  }
  
  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-item"> 
   
      <a href="#" id="${index}">${elem}</a>
      </li>`
    });
  
    return menuHtml;
  }
  
  const displayMenu = () => {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
  }
  
  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        // e.stopPropagation(); // esto es para evitar que el evento se extienda/propague al los elementos padres
        event.preventDefault(); // esto es para evitar que se recargue la página cuando se hace click en el elemento, en este al elemeto li del menu
  
        const { id } = event.target
  
        switch (id) {
          case '0':
            showBooks();
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('That option does not exist');
            break;
        }
      });
    });
  }
  
  
  const showBooks = () => {
    const books = bookstore1.getBooks;
    let booksHtml = '';
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      booksHtml += `
        <div class="book-item">
          <h3> tu libro es: ${book.title}</h3>
          <p> el autor es: ${book.autor}</p>
          <p> el Price es : ${book.price}</p>
          <p> su cantidad de Stock es: ${book.stock}</p>
          <p> su año de salida es: ${book.year}</p>
        </div>
      `;
    }
    content.innerHTML = `<div class="book-grid">${booksHtml}</div>`;
  }
  
  const showComics = () => {
    const comics = bookstore1.getComics;
    let comicsHtml = '';
    for (let i = 0; i < comics.length; i++) {
      const comic = comics[i];
      comicsHtml += `
        <div class="comic-item">
          <h3> tu comic es ${comic.title}</h3>
          <p >el autor es: ${comic.autor}</p>
          <p> el precio total ${comic.price}</p>
          <p> la cantidad es Stock: ${comic.stock}</p>
          <p>su año es ${comic.year}</p>
          <p>su lustrator es: ${comic.illustrator}</p>
          <p> su es Publisher: ${comic.publisher}</p>
          <p> Volume: ${comic.volume}</p>
        </div>
      `;
    }
    content.innerHTML = `<div class="comic-grid">${comicsHtml}</div>`;
  }
  const addBooks = () => {
    const title = prompt('Title');
    if (!title) {
      alert('Title is required');
      return;
    }

    const autor = prompt('autor');
    if (!autor) {
      alert('autor is required');
      return;
    }

    const price = prompt('Price');
    if (!price || isNaN(price)) {
      alert('Price is required and must be a number');
      return;
    }

    const stock = prompt('Stock');
    if (!stock || isNaN(stock)) {
      alert('Stock is required and must be a number');
      return;
    }

    const year = prompt('Year');
    if (!year || isNaN(year)) {
      alert('Year is required and must be a number');
      return;
    }

    const book = new Book(title, autor, price, stock, year);
    bookstore1.setBooks = book.getInfo();
  }
  


  
  const addComics = () => {
    const title = prompt('Title');
    if (!title) {
      alert('Title is required');
      return;
    }

    const autor = prompt('autor');
    if (!autor) {
      alert('autor is required');
      return;
    }

    const price = prompt('Price');
    if (!price || isNaN(price)) {
      alert('Price is required and must be a number');
      return;
    }

    const stock = prompt('Stock');
    if (!stock || isNaN(stock)) {
      alert('Stock is required and must be a number');
      return;
    }

    const year = prompt('Year');
    if (!year || isNaN(year)) {
      alert('Year is required and must be a number');
      return;
    }

    const illustrator = prompt('Illustrator');
    if (!illustrator) {
      alert('Illustrator is required');
      return;
    }

    const publisher = prompt('Publisher');
    if (!publisher) {
      alert('Publisher is required');
      return;
    }

    const volume = prompt('Volume');
    if (!volume || isNaN(volume)) {
      alert('Volume is required and must be a number');
      return;
    }

    const comic = new Comic(title, autor, price, stock, year, illustrator, publisher, volume);
    bookstore1.setComics = comic.getInfo();
  }
  initialize();
})();