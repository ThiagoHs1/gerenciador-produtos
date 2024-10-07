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
    async fetchProductsWithEffect() {
      await this.fetchProducts();
      this.applyProductEffect();
    },
    applyProductEffect() {
      const productItems = document.querySelectorAll('.product-item');
      productItems.forEach(item => {
        item.classList.add('fade-in');
        setTimeout(() => {
          item.classList.remove('fade-in');
        }, 500); // Duração do efeito em milissegundos
      });
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
       
        <AddProduct  @product-added="fetchProductsWithEffect"  />
        <ProductList :products="products" />
    </div>

</template>



<style>
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
