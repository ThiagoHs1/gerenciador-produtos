<script>
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
    async applyProductRemovalEffect(id) {
      const productItem = document.querySelector(`.product-item[data-id="${id}"]`);
      if (productItem) {
        productItem.classList.add('fade-out');
        setTimeout(() => {
          this.fetchProductsWithEffect();
        }, 500); // Duração do efeito antes de atualizar a lista
      }
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <AddProduct @product-added="fetchProductsWithEffect" />
    <ProductList 
      :products="products" 
      @product-deleted="applyProductRemovalEffect" 
      @product-updated="fetchProductsWithEffect" 
    />
  </div>
</template>

<style>
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

.fade-out {
  animation: fadeOut 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
