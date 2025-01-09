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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfileService = class ProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updateProfile(user_id, data) {
        const id = parseInt(user_id, 10);
        if (isNaN(id)) {
            throw new common_1.HttpException('Invalid Book ID', common_1.HttpStatus.BAD_REQUEST);
        }
        ;
        const { username, email } = data;
        if (email) {
            const existingEmail = await this.prisma.user.findUnique({
                where: { email }
            });
            if (existingEmail && existingEmail.id !== id) {
                throw new common_1.HttpException('Email aleready in user', common_1.HttpStatus.CONFLICT);
            }
        }
        if (username) {
            const existingUsername = await this.prisma.user.findUnique({
                where: { username },
            });
            if (existingUsername && existingUsername.id !== id) {
                throw new common_1.HttpException('Username already in use', common_1.HttpStatus.CONFLICT);
            }
        }
        const updateUser = await this.prisma.user.update({
            where: { id },
            data,
        });
        return {
            message: 'Profile updated successfully',
            data: updateUser,
        };
    }
    async deleteBook(user_id) {
        const id = parseInt(user_id, 10);
        if (isNaN(id)) {
            throw new common_1.HttpException('Invalid Book ID', common_1.HttpStatus.BAD_REQUEST);
        }
        ;
        const deletedUser = await this.prisma.user.delete({
            where: { id }
        });
        return {
            message: "User deleted successfully!",
            data: deletedUser,
        };
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map