const grid = document.querySelector('.grid-container');
const sidebarMinimizeBtn = document.querySelector('.material-symbols-outlined');


sidebarMinimizeBtn.addEventListener('click',() =>{
    grid.style.gridTemplateColumns="85vw 10vw"
})

const bookForm = document.getElementById('book-form')
const checkBox = document.getElementById('isRead');
const tableWhole = document.getElementById('lib-table');

let bookStatus="Not Read";
let myLibrary=[];
let headers = ["Title","Author","Pages","Status"];
/*let removeBtn = document.createElement("button");
removeBtn.innerHTML="Remove book"
let editReadStatBtn = document.createElement("button");
editReadStatBtn.innerHTML="Edit Read Status"*/

function Book(title, author,pages,readStatus){
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Status = readStatus;
}

function addBooktoLibrary(){
    const titleBook = bookForm.elements['book-title'].value;
    const authorBook = bookForm.elements['book-author'].value;
    const pagesBook = bookForm.elements['book-pages'].value;
    const newBook = new Book(titleBook,authorBook,pagesBook,bookStatus);
    myLibrary.push(newBook)
}

/*function addBooktoTable(){
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
            rembtn.addEventListener('click',()=>{
                rembtn.closest("tr").remove();
                myLibrary.splice(i,1);
                console.log(myLibrary)
            })
        }
        
        newRow.appendChild(cell);
    }
    tableOutput.appendChild(newRow)
}*/

function addBooktoTable(){
    if(document.getElementById('lib-content')){
        document.getElementById('lib-content').remove();
    }
    let newTableContent = document.createElement("tbody");
    newTableContent.id="lib-content";

    for(let i=0;i<= myLibrary.length;i++){
        let newRow = document.createElement("tr");
        
        headers.forEach(function(header,index){
            let bookCell = document.createElement("td");
            bookCell.innerHTML = myLibrary[i][header];
            bookCell.classList.add("box"+ (index + 1));
            newRow.appendChild(bookCell);
        })

        let remBtnCell = document.createElement("td");
        let remBtn = document.createElement("button");
        remBtn.innerHTML = "Remove Book";
        remBtn.classList.add("remove-btn");
        remBtn.addEventListener("click", () =>{
            myLibrary.splice(i,1);
            remBtn.closest("tr").remove();
            console.log(myLibrary);
        })

        remBtnCell.appendChild(remBtn);
        newRow.appendChild(remBtnCell);
        newTableContent.appendChild(newRow);
        tableWhole.appendChild(newTableContent);
     
    }
    
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
    bookForm.reset(); 
    addBooktoTable();
    
    bookStatus="Not Read";
})


