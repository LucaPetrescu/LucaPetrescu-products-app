<template>
    <div class="container-fluid">
        <div class="text-center">
            <h1>All Products</h1>
        <div v-if="products.length === 0">
            <h2>"No products"</h2>
        </div>
    </div>

    <div class="">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="row">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price</th>
                    <th scope="col">Color</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr id="home-screen" v-for="product in products" :key="product._id">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.code}}</td>
                    <td>{{product.weight}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.color}}</td>
                    <td>
                        <div class="d-flex justify-content-between align-tems-center">
                            <router-link :to="{name: 'Edit', params: {id: product.id}}" class="btn btn-sm btn-outline-secondary"> Edit Product
                                <!-- <button class="btn btn-sm btn-outline-secondary" v-on:click="showModal">Edit Product</button> -->
                            </router-link>
                            <!-- <EditPopUp v-show="isModalVisible" @close="closeModal"><EditPopUpFields></EditPopUpFields></EditPopUp> -->
                            <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteProduct(product.id)">Delete Product</button>
                        </div>
                    </td>                    
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
<script>
    import {server} from '../helper';
    import axios from 'axios';
    // import EditPopUp from '../components/EditPopUp.vue'
    // import EditPopUpFields from '../components/EditPopUpFields.vue'
    export default {
        name: "home-screen",
        // components: { EditPopUp, EditPopUpFields },
        data(){
            return {
                isModalVisible: false ,
                products: []
            };
        },
        created(){
            this.fetchProducts();
        },
        methods: {
            async fetchProducts(){
                const data = await axios.get(`${server.baseURL}/produse/get-all-products`);
                this.products = data.data;
            },
            async deleteProduct(id){
                await axios.delete(`${server.baseURL}/produse/delete/${id}`);
                console.log(id);
                window.location.reload();
            },
            // showModal() {
            //     this.isModalVisible = true
            // },
            // closeModal() {
            //     this.isModalVisible = false
            // }
        }
    }
</script>