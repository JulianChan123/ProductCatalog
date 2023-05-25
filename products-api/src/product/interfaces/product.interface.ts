import {Document} from 'mongoose'

export interface Product extends Document {
    name: string;
    description: string;
    imageURL: string;
    price: number;
    createdAt: Date
}