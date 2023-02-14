const books = document.getElementById("books").childNodes;
for (let i = 0; i < books.length; i++) {
    books[i].addEventListener("click", function() {
        toggleBook(books[i]);
    });
}
//for each book add event listener , call toggle show/hide



function toggleBook(book) {
    var expanded = book.getAttribute("aria-expanded");
    if (expanded ==="false") {
        book.classList.remove("hide");
        book.classList.add("show");
        book.setAttribute("aria-expanded", "true");

    } else {
        book.classList.remove("show");
        book.classList.add("hide")
        book.setAttribute("aria-expanded", "false");
    }
}




