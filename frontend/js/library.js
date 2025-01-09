// // explore.js

// // Fetch books from the backend
// export async function fetchBooks(query = '', status = '') {
//     const response = await fetch(`/api/books?query=${query}&status=${status}`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch books');
//     }
//     return await response.json();
// }

// // Add a book to a specific pile
// export async function addToPile(bookId, pile) {
//     const response = await fetch(`/api/books/${bookId}/addToPile`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ pile }),
//     });
//     if (!response.ok) {
//         throw new Error('Failed to add book to pile');
//     }
//     alert('Book added to ' + pile + ' pile successfully!');
// }
import { fetchBooks } from './ts/library.js';

const searchBar = document.getElementById('searchBar');
const filterSection = document.getElementById('filterSection');
const toReadList = document.getElementById('to-read-list');
const readingList = document.getElementById('reading-list');
const readList = document.getElementById('read-list');

let books = []; // Store all books in memory

// Render books into the appropriate section
function renderBooks() {
    toReadList.innerHTML = '';
    readingList.innerHTML = '';
    readList.innerHTML = '';

    const query = searchBar.value.toLowerCase();
    const selectedSection = filterSection.value;

    books.forEach(book => {
        if (
            (query && !book.title.toLowerCase().includes(query) && !book.author.toLowerCase().includes(query)) ||
            (selectedSection !== 'all' && book.status !== selectedSection)
        ) {
            return;
        }

        const bookHTML = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                        <div>
                            <button class="btn btn-primary" onclick="changeBookStatus('${book.id}', 'to-read')">To Read</button>
                            <button class="btn btn-success" onclick="changeBookStatus('${book.id}', 'reading')">Reading</button>
                            <button class="btn btn-info" onclick="changeBookStatus('${book.id}', 'read')">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        if (book.status === 'to-read') {
            toReadList.innerHTML += bookHTML;
        } else if (book.status === 'reading') {
            readingList.innerHTML += bookHTML;
        } else if (book.status === 'read') {
            readList.innerHTML += bookHTML;
        }
    });
}

// Fetch books and initialize the library
 fetchBooks().then(fetchedBooks => {
    books = fetchedBooks;
     renderBooks();
 });
// Mock function to fetch sample books
export function fetchBooks(query = '', status = '') {
    const sampleBooks = [
        { id: '1', title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'to-read' },
        { id: '2', title: '1984', author: 'George Orwell', status: 'reading' },
        { id: '3', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'read' },
        { id: '4', title: 'Pride and Prejudice', author: 'Jane Austen', status: 'to-read' },
        { id: '5', title: 'The Catcher in the Rye', author: 'J.D. Salinger', status: 'reading' },
        { id: '6', title: 'Moby Dick', author: 'Herman Melville', status: 'read' }
    ];

    return new Promise(resolve => {
        let filteredBooks = sampleBooks;

        if (query) {
            filteredBooks = filteredBooks.filter(book =>
                book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
            );
        }

        if (status) {
            filteredBooks = filteredBooks.filter(book => book.status === status);
        }

        resolve(filteredBooks);
    });
}

// Update book status
window.changeBookStatus = (id, status) => {
    const book = books.find(b => b.id === id);
    if (book) {
        book.status = status;
        renderBooks();
    }
};

// Filter books based on search or section
searchBar.addEventListener('input', renderBooks);
filterSection.addEventListener('change', renderBooks);
