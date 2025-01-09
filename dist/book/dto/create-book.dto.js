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
exports.CreateBookDto = void 0;
const class_validator_1 = require("class-validator");
class CreateBookDto {
}
exports.CreateBookDto = CreateBookDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Genre is required' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "genre", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Pages must be an integer" }),
    (0, class_validator_1.Min)(1, { message: 'Pages must be at least 1' }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "pages", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Progress must be an integer" }),
    (0, class_validator_1.Min)(0, { message: 'Progress cannot be less than 0' }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "progress", void 0);
//# sourceMappingURL=create-book.dto.js.map