const myLibrary = [];
let button = document.querySelector("header");
let dialog = document.querySelector("dialog");

button.onclick = addBookToLibrary;

function Book(
  title = "Unknown",
  author = "Unknown",
  pages = "Unknown",
  read = "Unknown"
) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
}


function addBookToLibrary() {
  dialog.showModal();
}