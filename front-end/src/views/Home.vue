<script  >


import AddProduct from '@/components/AddProduct.vue';
import ProductList from '@/components/ProductList.vue';
import Navbar from '@/components/Navbar.vue';
import { fetchProducts } from '../services/api';

export default {
  components: {
    ProductList,
    AddProduct,
    Navbar,
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
        <Navbar />
       
        <AddProduct  @product-added="fetchProducts"  />
        <ProductList :products="products" />
    </div>

</template>



<style>

</style>
