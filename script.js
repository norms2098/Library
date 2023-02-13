function bookInfo(title,author,pages,readStatus){
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

console.log(bookOne.info);