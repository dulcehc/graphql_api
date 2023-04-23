const { prisma } = require("./database.js");

const Query = {
    getAllProducts: async (parent, args) => {
        return prisma.product.findMany()
    }
};

const Mutation = {
    addProduct: (parent, args) => {
        const { code, position, quantity, price, image, description } = args

        return prisma.product.create({
            data: {
                code, position, quantity, price, image, description
            },
        });
    },
};

const resolvers = { Query, Mutation };

module.exports = {
  resolvers,
};