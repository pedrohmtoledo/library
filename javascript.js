const myLibrary = [];
const container = document.querySelector(".container")

// create a dialog to add a new book
const dialog = document.querySelector("#add-book-dialog");
const addBookButton = document.querySelector(".addbook");
const closeDialogButton = document.querySelector(".close-dialog");
const submitBookButton = document.querySelector("#submit-book")
addBookButton.addEventListener("click", () => {
    dialog.show()
})

closeDialogButton.addEventListener("click", () => {
    dialog.close()
})

submitBookButton.addEventListener("click", function(e) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    console.log(typeof(title))
    const book = new Book(title, author, pages, status);
    addBookToLibrary(book);
    displayBook();
    e.preventDefault();
    dialog.close();
})


function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status; // create a toggle function for read and not read
    this.info = () => {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.status}`

    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}
// let book1 = new Book("harry potter", "jk rowling", 333, "not read")
// let book2 = new Book("harry potter 2", "jk rowling", 333, "not read")
// addBookToLibrary(book1)
// addBookToLibrary(book2)
console.log(myLibrary)

// display book in cards. first, create a div with class card, loop through library, add the information of the book into the card, push it to the dom.
// each card has to have their own id


function displayBook(){
    const length = myLibrary.length;
    for (let i = 0; i < length; i++){
        const card = document.createElement("div");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        card.setAttribute("class", "card");
        card.setAttribute("id", `book${i}`);
        card.textContent = myLibrary[i].info();
        container.appendChild(div);
    
    }
}
// create button to add new book

