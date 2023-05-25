import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import {Product} from './interfaces/product.interface'
import { CreateProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    getProducts(){

    }

    getProduct(){

    }
    
    createProduct(){
        
    }

    updateProduct(){
        
    }
}
