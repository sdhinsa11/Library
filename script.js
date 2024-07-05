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

Book.prototype.toggleStatus = function(){
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read){
    // when a new book gets added use this
    const n_book = new Book(title, author, pages, read);
    myLibrary.push(n_book);
    displayBooks();
}


function displayBooks(){

    const books = document.querySelector(".books");
    books.innerHTML="";

    myLibrary.forEach((book, index) => {
        const book_c = document.createElement('div');
        book_c.classList.add('book-card');

        book_c.dataset.index = index;
        book_c.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <div class = "btns">
                <button class= "removeButton">Remove Book</button>
                <button class="readButton">${book.read ? 'Unread' : 'Read'}</button>
            </div>     
        `;
        
        books.appendChild(book_c);

        const removeB = book_c.querySelector(".removeButton");
        const readB = book_c.querySelector(".readButton");


        removeB.addEventListener("click", () => {
            remove(index);
        });

        readB.addEventListener("click", () => toggleRead(index));
    });
}

function remove(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index){
    myLibrary[index].toggleStatus();
    displayBooks();
}



// Adding a book

const dialog = document.getElementById("addbookdialog");

const newBookB = document.getElementById("newButton");
const cancelButton = document.getElementById("cancelButton");
const addButton = document.getElementById("add");
const form = document.getElementById("addBookForm");


//opening dialog
newBookB.addEventListener("click", () =>{
    dialog.showModal();
});

//closing dialog
cancelButton.addEventListener("click", () =>{
    dialog.close();
})

form.addEventListener("submit", (e) =>{  //add it to the actual form
    e.preventDefault();

    const t = document.getElementById("title").value;
    const au = document.getElementById("author").value;
    const pa = document.getElementById("pages").value;
    const rea = document.getElementById("read").checked;


    addBookToLibrary(t, au, pa, rea);

    dialog.close();
});



addBookToLibrary("Harry Potter", "JK.Rowling", 876, true);
addBookToLibrary(" Potter", ".owling", 76, true);

addBookToLibrary("tter", "Jling", 9076, true);
displayBooks();



