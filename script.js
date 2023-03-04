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
/*let removeBtn = document.createElement("button");
removeBtn.innerHTML="Remove book"
let editReadStatBtn = document.createElement("button");
editReadStatBtn.innerHTML="Edit Read Status"*/

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
    const newRow = document.createElement("tr");
    for(let i=0;i<5;i++){
        const cell = document.createElement("td");
        var cellContent;
        if(i==0){
            cellContent = document.createTextNode(`${myLibrary[myLibrary.length -  1 ].bookTitle}`)
            cell.appendChild(cellContent); 
        }
        if(i==1){
            cellContent = document.createTextNode(`${myLibrary[myLibrary.length -  1 ].bookAuthor}`)
            cell.appendChild(cellContent);
        }
        if(i==2){
            cellContent = document.createTextNode(`${myLibrary[myLibrary.length -  1 ].bookPages}`)
            cell.appendChild(cellContent);
        }
        if(i==3){
    
            const statbutton = document.createElement("button")
            statbutton.innerHTML = myLibrary[myLibrary.length -  1 ].isBookRead;
            statbutton.className = "changeStatus-btn";
            cell.appendChild(statbutton);
            statbutton.addEventListener('click',()=>{
                if(statbutton.innerHTML==="Read"){
                    statbutton.innerHTML = "Not Read"
                }
                else{
                    statbutton.innerHTML = "Read";
                }
            })
    
        }
        if(i==4){
            const rembtn = document.createElement("button")
            rembtn.innerHTML = "Remove Book";
            rembtn.className = "removeBook-btn";
            cell.appendChild(rembtn);
        }
        
        newRow.appendChild(cell);
    }
    tableOutput.appendChild(newRow)
}
    

sidebarMinimizeBtn.addEventListener('click',() =>{
    grid.style.gridTemplateColumns="85vw 10vw"
})
checkBox.addEventListener('change',() => {
    if(checkBox.checked){
        bookStatus="Read";
    }
    else{
        bookStatus="Not Read";
    }
})

bookForm.addEventListener('submit',(e) => {
    e.preventDefault();
    addBooktoLibrary();
    addBooktoTable();
    bookForm.reset(); 
    bookStatus="Not Read";
})

function changeStatus(classname,status){
    const changestat = document.querySelector(`.${classname}`)
    if(status === "Read"){
        changestat.innerHTML = "Not Read";
    }
    else{
        changestat.innerHTML = "Read";
    }
}

