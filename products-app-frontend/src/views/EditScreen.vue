<template>
    <div>
        <h4 class="text-center">
            <small>
                <button class="btn btn-succes" v-on:click="navigate()">View All Products</button>
            </small>
        </h4>
        <div class="col-md-12 form-wrapper">
            <h2>Edit Product</h2>
            <form id="create-post" @submit.prevent="editProduct">
                <div class="form-group col-md-12">
                    <label for="title">Name </label>
                    <input type="text" id="name" v-model="product.name" name="name" class="form-control" placeholder="Enter name">
                </div>
                <div class="form-group col-md-12">
                    <label for="title">Code </label>
                    <input type="text" id="code" v-model="product.code" name="code" class="form-control" placeholder="Enter code">
                </div>
                <div class="form-group col-md-12">
                    <label for="weight">Weight </label>
                    <input type="text" id="weight" v-model="product.weight" name="weight" class="form-control" placeholder="Weight">
                </div>
                <div class="form-group col-md-12">
                    <label for="price">Price </label>
                    <input type="text" id="price" v-model="product.price" name="price" class="form-control" placeholder="Price">
                </div>
                <div class="form-group col-md-12">
                    <label for="color">Color </label>
                    <input type="text" id="color" v-model="product.color" name="color" class="form-control" placeholder="Color">
                </div>
                <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Edit Product </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {server} from "../helper";
    import axios from "axios";
    import router from "../router";
    export default{
        data() {
            return {
                id: 0,
                product: {}
            };
        },
        created(){
            this.id = this.$route.params.id;
            this.getProduct();
        },
        methods: {
            async editProduct() {
                let productData = {
                    id: this.id,
                    name: this.product.name,
                    code: this.product.code,
                    weight: this.product.weight,
                    price: this.product.price,
                    color: this.product.color,
                };
                await axios.patch(`${server.baseURL}/produse/update-product/${this.id}`, productData);
                router.push({name: 'home'})
            },
            async getProduct() {
                const data = await axios.get(`${server.baseURL}/produse/get-product/${this.id}`);
                this.product = data.data;
            },
            navigate(){
                router.go(-1);
            }
        }
    }
</script>