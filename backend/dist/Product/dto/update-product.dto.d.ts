import { ProductCategory } from './enum/ProductCategory';
export declare class UpdateProductDto {
    id?: string;
    name?: string;
    category?: ProductCategory;
    image?: string;
    oldPrice?: number;
    newPrice?: number;
    quantity?: number;
}
