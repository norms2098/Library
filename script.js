const grid = document.querySelector('.grid-container');
const sidebarMinimizeBtn = document.querySelector('.material-symbols-outlined');


sidebarMinimizeBtn.addEventListener('click',() =>{
    grid.style.gridTemplateColumns="85vw 10vw"
})

const bookForm = document.getElementById('book-form')
const checkBox = document.getElementById('isRead');
const tableOutput = document.getElementById('lib-table');

let bookStatus="not Read";
let myLibrary=[];
let removeBtn = document.createElement("button");
removeBtn.innerHTML="Remove book"
let addRemoveBtn = document.tableOutput.appendChild(removeBtn)
function Book(title, author,pages,readStatus){
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.isBookRead = readStatus;
}

function addBooktoLibrary(){
    const titleBook = bookForm.elements['book-title'].value;
    const authorBook = bookForm.elements['book-author'].value;
    const pagesBook = bookForm.elements['book-pages'].value;
    const newBook = new Book(titleBook,authorBook,pagesBook,bookStatus);
    myLibrary.push(newBook)
}

function addBooktoTable(){
    tableOutput.innerHTML += `<tr>
    <td> ${myLibrary[myLibrary.length -  1 ].bookTitle} </td>
    <td> ${myLibrary[myLibrary.length -  1 ].bookAuthor} </td>
    <td> ${myLibrary[myLibrary.length -  1 ].bookPages} </td>
    <td> ${myLibrary[myLibrary.length -  1 ].isBookRead} </td>
    <td> ${addRemoveBtn}</td>
    </tr>`
}

sidebarMinimizeBtn.addEventListener('click',() =>{
    grid.style.gridTemplateColumns="85vw 10vw"
})
checkBox.addEventListener('change',() => {
    if(checkBox.checked){
        bookStatus="Read";
    }
    else{
        bookStatus="not read";
    }
})

bookForm.addEventListener('submit',(e) => {
    e.preventDefault();
    addBooktoLibrary();
    addBooktoTable();
    bookForm.reset(); 
})


