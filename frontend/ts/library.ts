// explore.ts

export interface Book {
    id: string;
    title: string;
    author: string;
    status: 'read' | 'to-read' | 'reading';
}

// Fetch books from the backend
export async function fetchBooks(query: string = '', status: string = ''): Promise<Book[]> {
    const response = await fetch(`/api/books?query=${query}&status=${status}`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    return await response.json();
}

// Add a book to a specific pile
export async function addToPile(bookId: string, pile: 'read' | 'to-read' | 'reading'): Promise<void> {
    const response = await fetch(`/api/books/${bookId}/addToPile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pile }),
    });
    if (!response.ok) {
        throw new Error('Failed to add book to pile');
    }
    alert(`Book added to ${pile} pile successfully!`);
}
