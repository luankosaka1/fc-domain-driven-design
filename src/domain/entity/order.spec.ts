import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when id not exist", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "Produto", 10);
            const order = new Order("", "123", [orderItem]);
        }).toThrowError("Id is required");
    });

});