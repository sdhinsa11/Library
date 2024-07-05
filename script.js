const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        if (this.read === true){
            console.log('${this.name} by ${this.author}, ${this.pages} pages, have read');
        }

        else if (this.read === false){
            console.log('${this.name} by ${this.author}, ${this.pages} pages, not read yet');
        }
    }
}

function addBookToLibrary(title, author, pages, read){
    // when a new book gets added use this
    const n_book = new Book(title, author, pages, read);
    myLibrary.push(n_book);
}


function allBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
    // this needs to display the books on screen for the users
}

function displayBooks(){
    // iterate through each book in the library list
    // get the div that the books are in, it should be an empty div in html
    //create a new bookcar 
    // add it
    // add to the html
    // configure html in css
    // add it to the div 


    //later on add steps 5/6

}



// Step 1. Display books 
// Step 2. do the add book
//Step 3. add button
//Step 4, read status (if clicked then swich it)
