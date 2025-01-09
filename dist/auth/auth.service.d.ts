import { PrismaService } from '../prisma/prisma.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signup(data: SignupDto): Promise<{
        full_name: string;
        username: string | null;
        email: string;
        password: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(data: LoginDto): Promise<{
        message: string;
        data: {
            accessToken: string;
            user: {
                id: number;
                email: string;
                full_name: string;
                username: string;
            };
        };
    }>;
    private generateToken;
}
