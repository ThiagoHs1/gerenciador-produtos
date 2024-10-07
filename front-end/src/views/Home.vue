<script  >
import Navbar from '@/components/Navbar.vue';
import AddProduct from '@/components/AddProduct.vue';
import ProductList from '@/components/ProductList.vue';

import { fetchProducts } from '../services/api';

export default {
  components: {
    ProductList,
    AddProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      this.products = await fetchProducts();
    },
  },
  created() {
    this.fetchProducts();
  },
};

</script>


<template>
    <div id="app" >
        <navbar />
        <AddProduct  @product-added="fetchProducts"  />
        <ProductList :products="products" />
    </div>

</template>



<style>

</style>
