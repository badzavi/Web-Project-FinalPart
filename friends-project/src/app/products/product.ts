import { Comment } from "../interfaces/comment";
export interface Product {
    id: number,
    name: string,
    description: string,
    category: string,
    categoryId: number,
    price: number,
    img: string,
    comments: Comment[]
}