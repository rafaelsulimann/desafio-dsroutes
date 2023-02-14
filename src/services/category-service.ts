import { Category } from "../models/category";

export function getCategories(){
    return categories;
}

let categories : Category[] = [
    {
        id: 1,
        name: "Computadores"
    },
    {
        id: 2,
        name: "Eletrônicos"
    },
    {
        id: 3,
        name: "Livros"
    }
]