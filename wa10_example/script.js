const bookButton = document.querySelector('#js-new-book');
const linkButton = document.querySelector('#js-link-button');

bookButton.addEventListener('click', newBook);

var descriptionText = document.querySelector('#js-book-description');
var bookCover = document.querySelector('#js-book-cover');

let bookLink = '';

async function newBook(){
    console.log("hey look it's a function");
    try{
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=TYF4V2I58xEFOuhDjf486l7OHsO6ojew');
        const object = await response.json();
        const bookList = object.results['books'];

        if(!response.ok){
            throw Error(resonse.statusText);
        }
        console.log(bookList);

        const book = bookList[Math.floor(Math.random()*bookList.length)];

        console.log(book);
        displayBook(book);

        console.log(book.buy_links[2].url);
        bookLink = book.buy_links[2].url;
        linkButton.setAttribute('href', bookLink);

    } catch (err){
        console.log(err);
        alert('nevermind, get fucked');
    }
} 

function displayBook(book){
    bookCover.setAttribute('src', book['book_image']);
    descriptionText.textContent = book['description'].toLowerCase();
}

newBook();