import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/graphql',
});

export const fetchProducts = async () => {
  const query = `
    query {
      getProducts {
        id
        name
        price
        description
      }
    }
  `;
  const response = await api.post('', { query });
  return response.data.data.getProducts;
};

export const createProduct = async (name, price, description) => {
  const mutation = `
    mutation {
      createProduct(name: "${name}", price: ${price}, description: "${description}") {
        id
        name
        price
        description
      }
    }
  `;
  const response = await api.post('', { query: mutation });
  return response.data.data.createProduct;
};

export const updateProduct = async (id, name, price, description) => {
  const mutation = `
    mutation {
      updateProduct(id: "${id}", name: "${name}", price: ${price}, description: "${description}") {
        id
        name
        price
        description
      }
    }
  `;
  const response = await api.post('', { query: mutation });
  return response.data.data.updateProduct;
};

export const deleteProduct = async (id) => {
  const mutation = `
    mutation {
      deleteProduct(id: "${id}")
    }
  `;
  const response = await api.post('', { query: mutation });
  return response.data.data.deleteProduct;
};
