const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    getAllProducts: [Product]
    findProductByCode(code: String!): Product
  }

  type Product {
    id: ID!
    code: String!
    position: Int!
    quantity: Int!
    price: Float!
    image: String
    description: String
  }

  type Mutation {
    addProduct(
      code: String!
      position: Int!
      quantity: Int!
      price: Float!
      image: String
      description: String
    ): Product

    deleteProductByCode(code: String!) : Product

    updateProduct(
      code: String!
      position: Int
      quantity: Int
      price: Float
      image: String
      description: String
    ) : Product
  }
`
module.exports = {
  typeDefs,
}