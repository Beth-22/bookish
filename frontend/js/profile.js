// // profile.js

// // Fetch user profile data
// export async function getUserProfile() {
//     const response = await fetch('/api/user/profile');
//     if (!response.ok) {
//         throw new Error('Failed to fetch user profile');
//     }
//     return await response.json();
// }


// import { getUserProfile } from './ts/profile.js';

// const usernameEl = document.getElementById('username');
// const emailEl = document.getElementById('email');
// const readBooksEl = document.getElementById('readBooks');
// const toReadBooksEl = document.getElementById('toReadBooks');
// const readingBooksEl = document.getElementById('readingBooks');
// const progressChartEl = document.getElementById('progressChart');

// getUserProfile().then(profile => {
//     // Update user details
//     usernameEl.textContent = `Username: ${profile.username}`;
//     emailEl.textContent = `Email: ${profile.email}`;
//     readBooksEl.textContent = `Read: ${profile.books.read}`;
//     toReadBooksEl.textContent = `To Read: ${profile.books.toRead}`;
//     readingBooksEl.textContent = `Reading: ${profile.books.reading}`;

//     // Create the pie chart
//     const ctx = progressChartEl.getContext('2d');
//     new Chart(ctx, {
//         type: 'pie',
//         data: {
//             labels: ['Read', 'To Read', 'Reading'],
//             datasets: [{
//                 label: 'Books Progress',
//                 data: [
//                     profile.books.read,
//                     profile.books.toRead,
//                     profile.books.reading
//                 ],
//                 backgroundColor: ['#28a745', '#ffc107', '#17a2b8'],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     position: 'top',
//                 },
//                 tooltip: {
//                     callbacks: {
//                         label: function (context) {
//                             const value = context.raw;
//                             return `${context.label}: ${value}`;
//                         }
//                     }
//                 }
//             }
//         }
//     });
// });
export function getUserProfile() {
    return Promise.resolve({
        username: 'John Doe',
        email: 'johndoe@example.com',
        books: {
            read: 5,
            toRead: 10,
            reading: 2
        }
    });
}


// Sample book data
const books = [
    { id: 1, title: "Book One", author: "Author A", status: "to-read" },
    { id: 2, title: "Book Two", author: "Author B", status: "reading" },
    { id: 3, title: "Book Three", author: "Author C", status: "read" },
    { id: 4, title: "Book Four", author: "Author D", status: "to-read" },
    { id: 5, title: "Book Five", author: "Author E", status: "reading" },
    { id: 6, title: "Book Six", author: "Author F", status: "read" },
];

// Utility to render books
function renderBooks() {
    const toReadList = document.getElementById("to-read-list");
    const readingList = document.getElementById("reading-list");
    const readList = document.getElementById("read-list");

    // Clear existing content
    toReadList.innerHTML = "";
    readingList.innerHTML = "";
    readList.innerHTML = "";

    books.forEach(book => {
        const bookCard = `
            <div class="col-md-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                    </div>
                </div>
            </div>
        `;

        if (book.status === "to-read") {
            toReadList.innerHTML += bookCard;
        } else if (book.status === "reading") {
            readingList.innerHTML += bookCard;
        } else if (book.status === "read") {
            readList.innerHTML += bookCard;
        }
    });
}

// Initialize book rendering
document.addEventListener("DOMContentLoaded", () => {
    renderBooks();
});

