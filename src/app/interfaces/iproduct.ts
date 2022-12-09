import { IRating } from "./irating";

export interface IProduct {
    id?: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: IRating;
}
