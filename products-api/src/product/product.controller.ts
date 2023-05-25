import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body} from '@nestjs/common';
import {CreateProductDTO} from './dto/product.dto';
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO ) {

        const product = await this.productService.createProduct(createProductDTO)

        return res.status(HttpStatus.OK).json({
            message: 'received',
            product: product
        });
    }
    
}
