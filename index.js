
let container = document.querySelector('#container')

let bookForm = document.querySelector('#book-form')  

let disposal = document.querySelector('#disposal')

let bookArr = [];

bookForm.addEventListener('submit', (e)=>{
e.preventDefault()
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let titleInput = document.querySelector('#title');
let title = document.querySelector('#title').value
let author = document.querySelector('#author').value
let pages = document.querySelector('#pages').value
let read = document.querySelector('input[name="read"]:checked').value







storeNewBook(bookArr, title, author, pages,read)

if(titleInput.value != ''){
    addCard(bookArr)
} else (
    window.alert("Please enter the book's title") 
)




authorInput.value=''
pagesInput.value= ''
titleInput.value=''
    })



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function (){
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    console.log("Pages: " + this.pages);
    console.log("Read? " + this.read);
  };
}

function storeNewBook(arr, title, author, pages,read) {
  arr.push(new Book(title, author, pages, read));
}

function addCard(arr){
        let item = arr[arr.length - 1];
        let containerDiv = document.createElement("div")
        let title = document.createElement("h1")
        let author = document.createElement('h2')
        let pages = document.createElement('h3')
        let read = document.createElement('h4')
        let cardId = arr.length - 1;
        let deleteButton = document.createElement('button');
        let toggleReadButton = document.createElement('button');
        let readContainer = document.createElement('div');
        let deleteButtonContainer = document.createElement('div')

        deleteButtonContainer.setAttribute('id', 'delete-button-container')
        containerDiv.appendChild(deleteButtonContainer)

        deleteButton.classList.add('delete-btn');
        deleteButtonContainer.appendChild(deleteButton);

        containerDiv.classList.add('card')
        containerDiv.setAttribute('draggable', 'true')
        
        title.textContent = item.title
        containerDiv.appendChild(title)
        
        author.textContent = item.author
        containerDiv.appendChild(author)
        
        pages.textContent = item.pages + " Pages";
        containerDiv.appendChild(pages)
        document.getElementById('container').appendChild(containerDiv);

        readContainer.setAttribute('id', 'read-container')
        containerDiv.appendChild(readContainer)

        read.textContent = `${item.read === 'true' ? 'read' : 'to be read'}`
        readContainer.appendChild(read)
        
        readContainer.appendChild(toggleReadButton)

        toggleReadButton.textContent = `${item.read === 'true' ? 'unread' : 'read'}`

        toggleReadButton.setAttribute('id', 'toggle-read')
        toggleReadButton.addEventListener('click', function() {
            read.textContent === 'read' ? read.textContent='to be read' : read.textContent='read';
            toggleReadButton.textContent == 'unread' ? toggleReadButton.textContent = 'read' : toggleReadButton.textContent = 'unread';
        })


        containerDiv.setAttribute('id', cardId);
        
        deleteButton.textContent="X";

        deleteButton.addEventListener('click', function(){
            arr.splice(cardId, 1);
            containerDiv.remove();
        })
        
}


