import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateProfile(user_id: string, data: UpdateProfileDto): Promise<{
        message: string;
        data: {
            full_name: string;
            username: string | null;
            email: string;
            password: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    deleteBook(user_id: string): Promise<{
        message: string;
        data: {
            full_name: string;
            username: string | null;
            email: string;
            password: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
