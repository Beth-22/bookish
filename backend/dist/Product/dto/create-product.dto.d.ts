import { ProductCategory } from './enum/ProductCategory';
export declare class CreateProductDto {
    name: string;
    category: ProductCategory;
    image: string;
    oldPrice: number;
    newPrice: number;
    quantity: number;
}
