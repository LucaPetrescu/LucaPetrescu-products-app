import {Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';

import {ProductsService} from './products.service';

@Controller('produse')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Post('/create')
    addProduct(
        @Body('name') prodName: string, 
        @Body('code') prodCode: number, 
        @Body('weight') prodWeight: number, 
        @Body('price') prodPrice: number,
        @Body('color') prodColor: string,
        @Body('isDeleted') prodIsDeleted: boolean = false,
        ): any {
        this.productsService.insertProduct(prodName, prodCode, prodWeight, prodPrice, prodColor, prodIsDeleted);
    }

    @Get('/get-all-products')
    async getAllProducts() {
        return await this.productsService.getProducts();
    }

    @Get('/get-product/:id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch('/update-product/:id')
    async updateProduct(@Param('id') prodId: string, 
    @Body('name') prodName: string, 
    @Body('code') prodCode: number, 
    @Body('weight') prodWeight: number, 
    @Body('price') prodPrice: number,
    @Body('color') prodColor: string,){
        await this.productsService.updateProduct(prodId, prodName, prodCode, prodWeight, prodPrice, prodColor);
    }

    @Delete('/delete/:id')
    async removeProduct(@Param('id') prodId: string){
        await this.productsService.deleteProduct(prodId);
        return null;
    }
}