let books = [];

function addBook(Book){
    let table = $("#bookTable tbody");
    table.append(`
    <tr id="${book.id}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.totalPages}</td>
        <td>${book.genre}</td>
        <td>${book.quantity}</td>
        <td>
        <button class="btn btn-sm btn-warning editbtn" data-id="${book.id}">
        Edit
        </button>
       
        <button class="btn btn-sm btn-danger deletebtn" data-id="${book.id}">
        Delete
        </button>
        </td>
    `);
}

function clearForm(){
    $("#bookTitle").val("");
    $("#author").val("");
    $("#totalPages").val("");
    $("#genre").val("");
    $("#quantity").val("");
    // $('input[name=readStatus]').prop('checked',false);
    // $("#status").val("");
}

function generateId(){
    return Math.floor(Math.random() * 1000000);
}

$(document).on("click", "#clearbtn", function(){
    clearForm();
});

$("#bookForm").submit(function(e){
    e.preventDefault();

    let book = {
        id: generateId(),
        title:$("#bookTitle").val(),
        author:$("#author").val(),
        totalPages:$("#totalPages").val(),
        genre:$("#genre").val(),
        quantity:$("#quantity").val(),
        // status:$("#status").val(),
    };

    books.push(book);
    addBook(Book);

    clearForm();
});

// let myLibrary = [];

// function Book(title, author, totalPages, status){
//     this.title = title;
//     this.author = author;
//     this.totalPages = totalPages;
//     this.status = status;

// }

// function addBookToLibrary(){

//     let title = document.getElementById("#bookTitle").value;
//     let author = document.getElementById("#author").value;
//     let totalPages = document.getElementById("#totalPages").value;
//     let status = document.getElementById("#status").checked;

// }

// let newBookBtn = document.querySelector("#addbtn");
// newBookBtn.addEventListener("click", function(){
//     let newBookTable = document.querySelector("#bookTable");
//     newBookTable.style.display = "block";
// })