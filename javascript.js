// styling of dialog, and coding of the buttons

const myLibrary = [];
const container = document.querySelector(".container")
console.log(myLibrary)
// create a dialog to add a new book
const dialog = document.querySelector("#add-book-dialog");
const addBookButton = document.querySelector(".addbook");
const closeDialogButton = document.querySelector(".close-dialog");
const submitBookButton = document.querySelector("#submit-book");
const deleteBookButton = document.querySelectorAll(".delete-button");

// this button opens up the dialog for user to add a new book to the library
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

// when user presses the submit button on the dialog, it will get the info of each input and create a new book object and add it to myLibrary array
submitBookButton.addEventListener("click", function(e) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    console.log(myLibrary)
    const book = new Book(title, author, pages);
    addBookToLibrary(book);
    displayBook();
    e.preventDefault();
    dialog.close();
})

// button that deletes a book from library
container.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-button")) {
        const bookId = e.target.id;
        const index = parseInt(bookId.slice(4, bookId.length)); 
        myLibrary.splice(index, 1); 
        displayBook(); 
    }
});



// book constructor function to create new book objects to be added to myLibrary array
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
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
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
        bookButtonDelete.setAttribute("class", "card-button delete-button");

        card.setAttribute("id", `book${i}`);
        bookButtonDelete.setAttribute("id", `book${i}`)
        bookButtonToggle.setAttribute("id", "book-toggle")
        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
        bookButtonDelete.textContent = "Delete"
        bookButtonToggle.textContent = "Read"

        cardButtons.appendChild(bookButtonToggle);
        cardButtons.appendChild(bookButtonDelete);
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(cardButtons);
        container.appendChild(card);
    
    }
}


