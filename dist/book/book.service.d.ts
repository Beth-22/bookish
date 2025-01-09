import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createBook(user_id: number, createBookDto: CreateBookDto): Promise<{
        message: string;
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            author: string;
            genre: string;
            pages: number;
            progress: number;
            user_id: number;
        };
    }>;
    getBooks(user_id: number): Promise<{
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            author: string;
            genre: string;
            pages: number;
            progress: number;
            user_id: number;
        }[];
    }>;
    getBookByID(book_id: string): Promise<{
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            author: string;
            genre: string;
            pages: number;
            progress: number;
            user_id: number;
        };
    }>;
    getLastReadBook(userID: string): Promise<{
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            author: string;
            genre: string;
            pages: number;
            progress: number;
            user_id: number;
        };
    }>;
    updateBook(book_id: string, updateBookDto: UpdateBookDto): Promise<{
        message: string;
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            author: string;
            genre: string;
            pages: number;
            progress: number;
            user_id: number;
        };
    }>;
    deleteBook(book_id: string): Promise<{
        message: string;
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            author: string;
            genre: string;
            pages: number;
            progress: number;
            user_id: number;
        };
    }>;
}
