function addBookFormComplete() {
    getLatestAddFormValues();
    return title.trim() != '' && author.trim() != '' && pages > 0 && desc.trim() != '';
}

function addBookToList(book) {
    const libraryItemDiv = document.createElement('div');
    libraryItemDiv.setAttribute('class', 'recommended-book-item library-item');
    libraryItemDiv.className = 'recommended-book-item library-item';
    
    const relativeDiv = document.createElement('div');
    const bookImg = document.createElement('img');
    bookImg.className = 'rec-thumb';
    bookImg.src = 'https://picsum.photos/100/150';
    relativeDiv.className = 'relative';
    relativeDiv.appendChild(bookImg);
    
    const infoDiv = document.createElement('div');
    const titleHeader = document.createElement('h4');
    titleHeader.textContent = book.title;
    const authorElem = document.createElement('p');
    authorElem.textContent = book.author + ' - ' + book.pages;
    authorElem.className = 'rec-book-title';
    const descElem = document.createElement('p');
    descElem.textContent = book.desc;
    descElem.className = 'rec-book-desc';
    
    const lineBreak = document.createElement('br');
    
    infoDiv.appendChild(titleHeader);
    infoDiv.appendChild(lineBreak);
    infoDiv.appendChild(authorElem);
    infoDiv.appendChild(descElem);
    
    libraryItemDiv.appendChild(relativeDiv);
    libraryItemDiv.appendChild(infoDiv);
    document.querySelector('#books-list-inner-container').appendChild(libraryItemDiv);
}

function addBook() {
    if (addBookFormComplete()) {
        getLatestAddFormValues();      
        let hasBeenRead = false;
        
        if (hasBeenReadButton.checked) {
            hasBeenRead = true;
        }

        const book = new Book(title, author, pages, hasBeenRead, desc);
        emptyLibraryMsgObj.style.display = 'none';
        booksListContainer.style.display = 'block';  
        addBookToList(book);
        
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = 0;
        document.querySelector('#desc').value = '';
        document.querySelector('#yes').checked = false;  
        document.querySelector('#no').checked = true;          

        alert("New book added successfully");
    } else {
        alert("Please complete the add book form.");
    }
}

function Book(title, author, pages, hasBeenRead, desc) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;
    this.desc = desc;
}

function getLatestAddFormValues() {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    desc = document.querySelector('#desc').value;
    hasBeenReadButton = document.querySelector('#yes');    
}

let title = document.querySelector('#title').value;
let author = document.querySelector('#author').value;
let pages = document.querySelector('#pages').value;
let desc = document.querySelector('#desc').value;
let hasBeenReadButton = document.querySelector('#yes');

const nav = window.getComputedStyle(document.querySelector('nav'));
const recBooksSection = window.getComputedStyle(document.querySelector('#recommended-books'));
let screenHeight = window.innerHeight;
let booksListSectionHeight = (screenHeight - (parseInt(recBooksSection.height, 10) + parseInt(nav.height, 10))) - 25;
let emptyLibraryMsgObj = document.querySelector('#empty-list-msg');
let booksListContainer = document.querySelector('#books-list-outer-container');

//document.querySelector('#books-list').style.height = booksListSectionHeight + 'px';


const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', addBook);