<template>
    <div v-if="product" class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-purple-700 mb-4 text-center">Editar Produto</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input 
          v-model="name" 
          placeholder="Nome do produto" 
          required 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input 
          v-model="price" 
          type="number" 
          placeholder="Preço" 
          required 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <textarea 
          v-model="description" 
          placeholder="Descrição" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></textarea>
        <button 
          type="submit" 
          class="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
        >
          Salvar
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { updateProduct } from '../services/api';
  
  export default {
    props: {
      product: Object,
    },
    data() {
      return {
        name: this.product.name,
        price: this.product.price,
        description: this.product.description,
      };
    },
    methods: {
      async handleSubmit() {
        await updateProduct(this.product.id, this.name, this.price, this.description);
        this.$emit('product-updated');
      },
    },
  };
  </script>
  