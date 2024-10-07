<template>
  <div>
    <h2>Adicionar Produto</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="name" placeholder="Nome do produto" required />
      <input v-model="price" type="number" placeholder="Preço" required />
      <textarea v-model="description" placeholder="Descrição"></textarea>
      <button type="submit">Adicionar</button>
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
