import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    createBook(req: any, createBookDto: CreateBookDto): Promise<{
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
    getBooksByUser(req: any): Promise<{
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
    getLastReadBook(req: any): Promise<{
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
    getBookByID(req: any): Promise<{
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
    updateBook(req: any, updateBookDto: UpdateBookDto): Promise<{
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
    deleteBook(req: any): Promise<{
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
