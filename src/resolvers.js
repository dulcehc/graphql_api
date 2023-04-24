const { prisma } = require("./db/database.js");

const Query = {
    getAllProducts: async (parent, args) => {
        return prisma.product.findMany();
    },
    findProductByCode: (parent, args) => {
        return prisma.product.findFirst({
            where: { code: String(args.code) },
        });
    },
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
    deleteProductByCode:  (parent, args) => {
        return prisma.product.delete({
            where: { code: String(args.code) },
        })
    },

    updateProduct: (parent, args) => {
        const { code, position, quantity, price, image, description } = args

        return  prisma.product.update({
            where: {
                code
            },
            data: {
                code, position, quantity, price, image, description
            },
        })
    },
};

const resolvers = { Query, Mutation };

module.exports = {
    resolvers,
};