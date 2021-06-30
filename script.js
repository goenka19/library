//Library array creates
var library = [];
if(localStorage.getItem('library'))
{
    library = JSON.parse(localStorage.getItem('library'));
}
else
{
    console.log('hello');
}
//constructor for new book object 
function bookDetails(title,author,number,read)
{
    this.title = title;
    this.author = author;
    this.number = number;
    this.read = read;
}

//DOM manipulations
var bookinformation = document.querySelector('#bookinformation');

var button = document.querySelector('#submit');

librarydata();

button.addEventListener('click', ()=>
{
    
    var book_title = document.querySelector('#title').value;
    var book_author = document.querySelector('#author').value;
    var book_number = document.querySelector('#number').value;
    var book_dropdown = document.querySelector('#dropdown').value;
    let newbook = new bookDetails(book_title,book_author,book_number,book_dropdown)
    
    library.push(newbook);

    deletegrid(bookinformation);

    //function to iterate over the book details
    librarydata();
})

//to delete previous list of books
function deletegrid(container)
{
    var cells = container.lastElementChild;
    while(cells)
    {
        container.removeChild(cells);
        cells = container.lastElementChild;
    }
}



function librarydata()
{
    var index = 0;
    library.forEach((book => 
    {
        let details = document.createElement("h3");
        details.textContent =  book.title + " " + book.author + " " + book.number + " "+ book.read + "   ";
    
        var deletebook = document.createElement('button')
        deletebook.classList.add('delete');
        deletebook.innerHTML = 'Delete Book';
        deletebook.setAttribute('value', index);
        deletebook.addEventListener('click', ()=>
        {
            console.log(parseInt(deletebook.value));
            library.splice(parseInt(deletebook.value), 1);
            console.log(library);
            deletegrid(bookinformation);
            librarydata();
        })

        var editbook = document.createElement('button');
        editbook.classList.add('edit');
        editbook.innerHTML = 'Change Read Status';
        editbook.setAttribute('value', index);
        editbook.addEventListener('click', ()=>
        {
            console.log(book.read);
            if(book.read == 'Yes')
                book.read = 'No';
            else
                book.read = 'Yes';
            
            console.log('Changed to ' + book.read);
            deletegrid(bookinformation);
            librarydata();
        })
        
        details.appendChild(editbook);
        details.appendChild(deletebook);
        
        bookinformation.appendChild(details);
        
        index++;
    }))
    localStorage.setItem('library', JSON.stringify(library));
    //console.log(JSON.parse(localStorage.getItem('library')));
    //console.log(library);

}