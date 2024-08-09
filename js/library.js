import { db, getDocs, collection } from "./firebase.js";

const library = document.getElementById('books')

const fetchBooks = async () => {
    const books = await getDocs(collection(db, 'books'))
    console.log(books);
    books.forEach(book => {
        
        console.log(book.data());
        
        
        library.innerHTML += `
            <h2>${book.data().title}</h2>
            <p>${book.data().author}</p>
            <p>${book.data().publishDate}</p>
            <p>${book.data().description}</p>
        `
    })
}

fetchBooks()