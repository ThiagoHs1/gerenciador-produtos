<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-purple-700 mb-4 text-center">Adicionar Produto</h2>
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
        Adicionar
      </button>
    </form>
  </div>
</template>


<script>
import { createProduct } from '../services/api';

export default {
  data() {
    return {
      name: '',
      price: 0,
      description: '',
    };
  },
  methods: {
    async handleSubmit() {
      await createProduct(this.name, this.price, this.description);
      this.name = '';
      this.price = 0;
      this.description = '';
      this.$emit('product-added');
    },
  },
};
</script>
