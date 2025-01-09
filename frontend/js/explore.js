// explore.js

// Fetch books from the backend
export async function fetchBooks(query = '', status = '') {
    const response = await fetch(`/api/books?query=${query}&status=${status}`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    return await response.json();
}

// Add a book to a specific pile
export async function addToPile(bookId, pile) {
    const response = await fetch(`/api/books/${bookId}/addToPile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pile }),
    });
    if (!response.ok) {
        throw new Error('Failed to add book to pile');
    }
    alert('Book added to ' + pile + ' pile successfully!');
}
