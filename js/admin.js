import { db, getDocs, addDoc, collection } from "./firebase.js";


const api_key = 'AIzaSyDpn4PUHc4COchINm4QS2d84lio4_-hR90'

const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const searchResults = document.getElementById('searchResults')
const bookForm = document.getElementById('bookForm')

searchBtn.addEventListener('click', async () => {
    const title = searchInput.value
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${api_key}`
    const response = await fetch(url)
    const data = await response.json()
    displayResults(data.items)
   
})

const displayResults = (books) => {
    searchResults.innerHTML = ''
    books.forEach(book => {
        console.log('====================================');
        console.log(book);
        console.log('====================================');
        const bookDiv = document.createElement('div')
        bookDiv.innerHTML = `
            <h2>${book.volumeInfo.title}</h2>
            <p>${book.volumeInfo.authors}</p>
            <img src="${book.volumeInfo.imageLinks.thumbnail}">
        `
        searchResults.appendChild(bookDiv)
        fillForm(book.volumeInfo.title, book.volumeInfo.authors[0], book.volumeInfo.publishedDate, book.volumeInfo.description)
    })
}

const fillForm = (title, authors, publishDate, description) => {


    document.getElementById('title').value = title
    document.getElementById('author').value = authors
    document.getElementById('publishDate').value = publishDate
    document.getElementById('description').value = description
}

bookForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const publishDate = document.getElementById('publishDate').value
    const description = document.getElementById('description').value
   try {
    const docRef = await addDoc(collection(db, "books"), {
        title,
        author,
        publishDate,
        description
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
    bookForm.reset()
})