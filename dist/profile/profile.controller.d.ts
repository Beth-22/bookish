import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    updateProfile(req: any, updateProfileDto: UpdateProfileDto): Promise<{
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
    deleteBook(req: any): Promise<{
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
