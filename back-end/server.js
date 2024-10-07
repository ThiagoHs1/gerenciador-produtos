const express = require('express');
const { buildSchema } = require('graphql');
const { sequelize } = require('./config/db');
const Product = require('./models/Product');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');


const app = express();

app.use(cors());

// Definir o schema GraphQL
const schema = buildSchema(`
    type Product {
      id: ID!
      name: String!
      price: Float!
      description: String
    }
  
    type Query {
      getProducts: [Product]
    }
  
    type Mutation {
      createProduct(name: String!, price: Float!, description: String): Product
    }
  `);

  // Definir os resolvers
const root = {
    getProducts: async () => {
      return await Product.findAll();
    },
    createProduct: async ({ name, price, description }) => {
      const product = await Product.create({ name, price, description });
      return product;
    },
  };

// Middleware GraphQL
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

  // Conectar ao banco e iniciar o servidor
sequelize.sync().then(() => {
    app.listen(4000, () => {
      console.log('Servidor rodando em http://localhost:4000/graphql');
    });
  });