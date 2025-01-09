import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
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
    getProfile(req: any): Promise<{
        data: {
            id: any;
            full_name: any;
            email: any;
            username: any;
        };
    }>;
}
