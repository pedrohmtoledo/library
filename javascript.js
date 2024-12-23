const myLibrary = [];
const container = document.querySelector(".container")
let book1 = new Book("harry potter", "jk rowling", 333, "not read")
let book2 = new Book("harry potter 2", "jk rowling", 333, "not read")
addBookToLibrary(book1)
addBookToLibrary(book2)
// create a dialog to add a new book
const dialog = document.querySelector("#add-book-dialog");
const addBookButton = document.querySelector(".addbook");
const closeDialogButton = document.querySelector(".close-dialog");
const submitBookButton = document.querySelector("#submit-book")
addBookButton.addEventListener("click", () => {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    title.value = "";
    author.value = "";
    pages.value = "";
    dialog.show()
})

closeDialogButton.addEventListener("click", () => {
    dialog.close()
})

submitBookButton.addEventListener("click", function(e) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    console.log(myLibrary)
    const book = new Book(title, author, pages);
    addBookToLibrary(book);
    container.innerHTML = ""
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


// display book in cards. first, create a div with class card, loop through library, add the information of the book into the card, push it to the dom.
// each card has to have their own id


function displayBook(){
    const length = myLibrary.length;
    for (let i = 0; i < length; i++){
        const card = document.createElement("div");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookButtonToggle = document.createElement("button");
        const bookButtonDelete = document.createElement("button");
        const cardButtons = document.createElement("div");

        card.setAttribute("class", "card");
        cardButtons.setAttribute("class", "card-buttons");
        bookTitle.setAttribute("class", "book-title");
        bookAuthor.setAttribute("class", "book-author");
        bookPages.setAttribute("class", "book-pages");
        bookButtonToggle.setAttribute("class", "card-button");
        bookButtonDelete.setAttribute("class", "card-button");

        card.setAttribute("id", `book${i}`);
        bookButtonDelete.setAttribute("id", "book-delete")
        bookButtonToggle.setAttribute("id", "book-toggle")
        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
        bookButtonDelete.textContent = "Delete"
        bookButtonToggle.textContent = "Read"

        cardButtons.appendChild(bookButtonDelete);
        cardButtons.appendChild(bookButtonToggle);
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(cardButtons);
        container.appendChild(card);
    
    }
}
// create button to add new book

