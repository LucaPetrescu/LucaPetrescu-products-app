import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    name: String,
    code: Number,
    weight: Number,
    price: Number,
    color: String,
    isDeleted: Boolean,
})

export interface Product extends mongoose.Document{
    [x: string]: any;
    id: string;
    name: string;
    code: number;
    weight: number;
    price: number;
    color: string;
    isDeleted: boolean;
}
