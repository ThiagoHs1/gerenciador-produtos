<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-purple-700 mb-4 text-center">Lista de Produtos</h2>
    <ul class="space-y-4">
      <li v-for="product in products" :key="product.id" class="p-4 border border-gray-200 rounded-lg shadow-sm product-item">
        <h3 class="text-xl font-semibold text-purple-800">Produto: {{ product.name }}</h3>
        <p class="text-gray-700">{{ product.description }}</p>
        <p class="text-gray-900 font-semibold">Preço: R$ {{ product.price }}</p>
        <button @click="editProduct(product)" class="w-100 bg-purple-700 text-white p-1 mr-5 rounded-lg font-semibold hover:bg-purple-800 transition-colors" >Editar</button>
        <button @click="deleteProduct(product.id)" class="w-100 bg-red-700 text-white p-1 mr-5 rounded-lg font-semibold hover:bg-red-800 transition-colors" >Excluir</button>
      </li>
    </ul>
    <EditProduct v-if="selectedProduct" :product="selectedProduct" @product-updated="$emit('product-updated')" />
  </div>
</template>

<script>
import EditProduct from './EditProduct.vue';
import { deleteProduct } from '../services/api';

export default {
  components: {
    EditProduct,
  },
  props: {
    products: Array, // Use 'products' apenas como prop
  },
  data() {
    return {
      selectedProduct: null,
    };
  },
  methods: {
    async deleteProduct(id) {
      await deleteProduct(id);
      this.$emit('product-deleted');
    },
    editProduct(product) {
      this.selectedProduct = product;
    },
  },
};
</script>

<style>
</style>
