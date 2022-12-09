import { IProduct } from "./iproduct";

export interface ICart {
    products: IProduct[];
    total: number;
    quantity: number;
}
