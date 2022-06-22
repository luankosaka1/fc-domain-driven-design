import { Sequelize } from "sequelize-typescript";
import Product from "../../domain/entity/product";
import ProductModel from "../db/sequelize/model/product.model";
import ProductRepository from "./product.repository";

describe("Product repostiroy test", () => {

    let sequileze: Sequelize;

    beforeEach(async () => {
        sequileze = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: {force: true}
        });

        sequileze.addModels([ProductModel]);
        await sequileze.sync();
    });

    afterEach(async () => {
        await sequileze.close();
    });

    it("should create a product", async() => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({where: {id: "1"}});

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100
        });
    });

    it("shold update a product", async() => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await productRepository.create(product);
        const productModel = await ProductModel.findOne({where: {id: "1"}});

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100
        });

        product.changeName("Product New 1");
        product.changePrice(200);

        await productRepository.update(product);
        const productModel2 = await ProductModel.findOne({where: {id: "1"}});

        expect(productModel2.toJSON()).toStrictEqual({
            id: "1",
            name: "Product New 1",
            price: 200
        });
    });
});