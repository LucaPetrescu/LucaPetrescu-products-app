import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Product} from './product.model';

@Injectable()
export class ProductsService{

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {

    }

    async insertProduct(name: string, code: number, weight: number, price: number, color: string, isDeleted: boolean) { 
        try{
            const newProduct = new this.productModel({ name: name, code: code, weight: weight, price: price, color: color, isDeleted: isDeleted});
        await newProduct.save();
        }catch(error){
            throw new Error(error);
        }
    }

    async getProducts(){
        const products = await this.productModel.find();
        return products.map(prod => ({
            id: prod.id,
            name: prod.name,
            code: prod.code,
            weight: prod.weight,
            price: prod.price,
            color: prod.color,
            isDeleted: prod.isDeleted
        }));
    }

    async getSingleProduct(productId: string){
        const product = await this.findProduct(productId);
        return {
                id: product.id,
                name: product.name,
                code: product.code,
                weight: product.weight,
                price: product.price,
                color: product.color
            }
    }

    async updateProduct(prodId: string, name: string, code: number, weight: number, price: number, color: string){

        const updatedProduct = await this.findProduct(prodId);

        if(name){
            updatedProduct.name = name
        }
        if(code){
            updatedProduct.code = code
        }
        if(weight){
            updatedProduct.weight = weight
        }
        if(price){
            updatedProduct.price = price
        }
        if(color){
            updatedProduct.color = color
        }
        updatedProduct.save();
        return updatedProduct
    }

    async deleteProduct(prodId: string){
        await this.productModel.deleteOne({_id: prodId});
    }

     private async findProduct(id: string): Promise<Product> {
         let product;
         try{
            product = await this.productModel.findOne({_id: id})
         }catch(error){
            throw new NotFoundException();
         }
        if(!product){
            throw new NotFoundException();
        }
        return product;
    }
}