/*function bookInfo(title,author,pages,readStatus){
    this.bookTitle=title;
    this.bookAuthor=author;
    this.numofPages=pages;
    if(!readStatus){
        this.isRead='Not yet read';
    }
    else{
        this.isRead='already read';
    }
    

    this.info = `${this.bookTitle} is by ${this.bookAuthor}, ${this.numofPages} pages, ${this.isRead}.`;
}

const bookOne= new bookInfo('The Hobbit','J.R.R. Tolkien','295',true);

console.log(bookOne.info);*/

const grid = document.querySelector('.grid-container');
const sidebarMinimizeBtn = document.querySelector('.material-symbols-outlined');


sidebarMinimizeBtn.addEventListener('click',() =>{
    grid.style.gridTemplateColumns="85vw 10vw"
})

const titleBook = document.getElementById('book-title');
const authorBook = document.getElementById('book-author');
const pagesBook = document.getElementById('book-pages');
const checkBox = document.getElementById('isRead');
const submitBtn = document.getElementById('submit-button');

const tableOutput = document.querySelector('.output-table');

let bookStatus="not Read";


let myLibrary=[];

function Book(title, author,pages,readStatus){
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.isBookRead = readStatus;
}

function addBooktoLibrary(){
    myLibrary.push(Book(titleBook.value,authorBook.value,pagesBook.value,bookStatus))
}

sidebarMinimizeBtn.addEventListener('click',() =>{
    grid.style.gridTemplateColumns="85vw 10vw"
})
submitBtn.addEventListener('click',() => {
    addBooktoLibrary();
    var row = tableOutput.insertRow(-1);
    var bookTitle_table=row.insertCell(0);
    var bookAuthor_table=row.insertCell(1);
    var bookPages_table=row.insertCell(2);
    var isBookRead_table=row.insertCell(3);
    bookTitle_table.innerHTML=titleBook.value;
    bookAuthor_table.innerHTML=authorBook.value;
    bookPages_table.innerHTML=pagesBook.value;
    isBookRead_table.innerHTML=bookStatus;
})
checkBox.addEventListener('change',() => {
    if(checkBox.checked){
        bookStatus="Read";
    }
    else{
        bookStatus="not read";
    }
})


