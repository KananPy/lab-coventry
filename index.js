const api_key = 'AIzaSyDpn4PUHc4COchINm4QS2d84lio4_-hR90'

const book = async (title) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${api_key}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    
}


book('Harry Potter')