function addBook() {
    emptyLibraryMsgObj.style.display = 'none';
    booksListContainer.style.display = 'block';
    
}

const nav = window.getComputedStyle(document.querySelector('nav'));
const recBooksSection = window.getComputedStyle(document.querySelector('#recommended-books'));
let screenHeight = window.innerHeight;
let booksListSectionHeight = (screenHeight - (parseInt(recBooksSection.height, 10) + parseInt(nav.height, 10))) - 25;
let emptyLibraryMsgObj = document.querySelector('#empty-list-msg');
let booksListContainer = document.querySelector('#books-list-outer-container');

document.querySelector('#books-list').style.height = booksListSectionHeight + 'px';


const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', addBook);