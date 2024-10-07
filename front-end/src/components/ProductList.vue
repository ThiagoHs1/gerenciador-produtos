<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-purple-700 mb-4 text-center">Lista de Produtos</h2>
    <ul class="space-y-4">
      <li v-for="product in products" :key="product.id" class="p-4 border border-gray-200 rounded-lg shadow-sm product-item">
        <h3 class="text-xl font-semibold text-purple-800">Produto: {{ product.name }}</h3>
        <p class="text-gray-700">{{ product.description }}</p>
        <p class="text-gray-900 font-semibold">Preço: R$ {{ product.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchProducts } from '../services/api';

export default {
  data() {
    return {
      products: [],
    };
  },
  async created() {
    this.products = await fetchProducts();
  },
};


</script>

<style>

</style>