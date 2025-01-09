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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async signup(data) {
        const { full_name, username, email, password } = data;
        const existingUser = await this.prisma.user.findFirst({
            where: { OR: [{ username }, { email }] }
        });
        if (existingUser) {
            const conflictField = existingUser.email === email ? 'Email' : 'Username';
            throw new common_1.HttpException(`${conflictField} is alread in use`, common_1.HttpStatus.CONFLICT);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.prisma.user.create({
            data: {
                username,
                full_name,
                email,
                password: hashedPassword
            },
        });
    }
    ;
    async login(data) {
        const { email_or_username, password } = data;
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [{ email: email_or_username }, { username: email_or_username }],
            },
        });
        if (!user) {
            throw new common_1.HttpException("Email or username is not resigtered!", common_1.HttpStatus.UNAUTHORIZED);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('Invalid email password combination', common_1.HttpStatus.UNAUTHORIZED);
        }
        const token = await this.generateToken(user.id, user.email, user.full_name, user.username);
        return {
            message: "Login successful!",
            data: {
                accessToken: token.accessToken,
                user: {
                    id: user.id,
                    email: user.email,
                    full_name: user.full_name,
                    username: user.username,
                },
            },
        };
    }
    async generateToken(user_id, email, full_name, username) {
        const payload = { id: user_id, email, full_name, username };
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map