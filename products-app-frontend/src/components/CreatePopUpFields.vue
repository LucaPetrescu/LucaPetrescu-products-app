<template>
    <div>
      <div class="col-md-12 form-wrapper">
          <h2>Add a product</h2>
          <form id="create-post-form" @submit.prevent="createProduct">
            <div class="form-group col-md-12">
                <label for="name">Name </label>
                <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Name">
            </div>
            <div class="form-group col-md-12">
                <label for="code">Code </label>
                <input type="text" id="code" v-model="code" name="code" class="form-control" placeholder="Code">
            </div>
            <div class="form-group col-md-12">
                <label for="weight">Weight </label>
                <input type="text" id="weight" v-model="weight" name="weight" class="form-control" placeholder="Weight">
            </div>
            <div class="form-group col-md-12">
                <label for="price">Price </label>
                <input type="text" id="price" v-model="price" name="price" class="form-control" placeholder="Price">
            </div>
            <div class="form-group col-md-12">
                <label for="color">Color </label>
                <input type="text" id="color" v-model="color" name="color" class="form-control" placeholder="Color">
            </div>
            <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Product </button>
            </div>  
          </form>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import axios from 'axios';
import {server} from "../helper";
import router from "../router";

export default {
    name: 'CreateScreen',
    data() {
        return {
            name: "",
            code: "",
            weight: "",
            price: "",
            color: "",
        };
    },
    methods: {
        createProduct() {
            let productData = {
                name: this.name,
                code: this.code,
                weight: this.weight,
                price: this.price,
                color: this.color
            };
            this.submitToServer(productData);
        },
        async submitToServer(data){
            const newProduct = await axios.post(`${server.baseURL}/produse/create`, data)
            window.location.reload();
        }
    }
}

</script>
