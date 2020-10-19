const nav = window.getComputedStyle(document.querySelector('nav'));
const recBooksSection = window.getComputedStyle(document.querySelector('#recommended-books'));
let screenHeight = window.innerHeight;
let booksListSectionHeight = (screenHeight - (parseInt(recBooksSection.height, 10) + parseInt(nav.height, 10))) - 25;

document.querySelector('#books-list').style.height = booksListSectionHeight + 'px';
