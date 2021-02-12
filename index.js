function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(books) {
    const main = document.querySelector('main')
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
  });
}

//Total number of pages in all the books
// function renderBooks(books) {
//   const main = document.querySelector('main');
//   const h3 = document.createElement('h3');
//   let totalPages = 0;
//   books.forEach(book => {
//     totalPages = totalPages + book.numberOfPages;
//   })

//   h3.innerHTML = totalPages;
//   main.appendChild(h3);
// }

//This might be the 1031st character in the series:
// function renderBooks(books) {
//   const main = document.querySelector('main')
//   books.forEach(book => {
//     const h2 = document.createElement('h2')
//     if(book.characters[1030] != null)
//     h2.innerHTML = book.characters[1030];
//     main.appendChild(h2);
//   })
// }


//The is the fifth book in the series
// function renderBooks(books) {
//   const main = document.querySelector('main')
//   let fifth = document.createElement('h3');
//   main.appendChild(fifth);
//     fifth.innerHTML = books[4].name;
// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
