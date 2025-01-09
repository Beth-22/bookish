"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookService = class BookService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBook(user_id, createBookDto) {
        const { title, description, genre, pages, progress, author } = createBookDto;
        const book = await this.prisma.book.create({
            data: {
                user_id,
                title,
                description,
                genre,
                pages,
                progress,
                author,
            },
        });
        return {
            message: 'Book created successfully!',
            data: book,
        };
    }
    async getBooks(user_id) {
        const books = await this.prisma.book.findMany({
            where: { user_id },
        });
        return {
            data: books,
        };
    }
    ;
    async getBookByID(book_id) {
        const id = parseInt(book_id, 10);
        if (isNaN(id)) {
            throw new common_1.HttpException('Invalid Book ID', common_1.HttpStatus.BAD_REQUEST);
        }
        const book = await this.prisma.book.findFirst({
            where: { id }
        });
        if (!book) {
            throw new common_1.HttpException('Book not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: book
        };
    }
    ;
    async getLastReadBook(userID) {
        const user_id = parseInt(userID, 10);
        if (isNaN(user_id)) {
            throw new common_1.HttpException('Invalid User ID', common_1.HttpStatus.BAD_REQUEST);
        }
        const books = await this.getBooks(user_id);
        if (!books.data || books.data.length === 0) {
            throw new common_1.HttpException('No books found for this user', common_1.HttpStatus.NOT_FOUND);
        }
        const lastReadBook = books.data.reduce((latest, current) => {
            return new Date(latest.updatedAt) > new Date(current.updatedAt) ? latest : current;
        });
        return {
            data: lastReadBook
        };
    }
    async updateBook(book_id, updateBookDto) {
        const id = parseInt(book_id, 10);
        if (isNaN(id)) {
            throw new common_1.HttpException('Invalid Book ID', common_1.HttpStatus.BAD_REQUEST);
        }
        const existingBook = await this.prisma.book.findFirst({
            where: { id }
        });
        if (!existingBook) {
            throw new common_1.HttpException('Book not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updatedBook = await this.prisma.book.update({
            where: { id },
            data: updateBookDto,
        });
        return {
            message: "Book updated successfully",
            data: updatedBook,
        };
    }
    async deleteBook(book_id) {
        const id = parseInt(book_id, 10);
        if (isNaN(id)) {
            throw new common_1.HttpException('Invalid Book ID', common_1.HttpStatus.BAD_REQUEST);
        }
        const existingBook = await this.prisma.book.findFirst({
            where: { id }
        });
        if (!existingBook) {
            throw new common_1.HttpException('Book not found', common_1.HttpStatus.NOT_FOUND);
        }
        ;
        const deletedBook = await this.prisma.book.delete({
            where: { id }
        });
        return {
            message: "Book deleted successfully!",
            data: deletedBook
        };
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookService);
//# sourceMappingURL=book.service.js.map