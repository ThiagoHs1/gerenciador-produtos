<template>
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>Preço: {{ product.price }}</p>
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