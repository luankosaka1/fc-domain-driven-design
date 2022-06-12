import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "Luan");
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        let customer = new Customer("123", "Luan");
        customer.changeName("Kosaka");
        expect(customer.name).toBe("Kosaka");
    });

    it("should activate customer", () => {
        const customer = new Customer("123", "Luan");
        customer.Address = new Address("Street", 10, "Zip", "City");
        customer.activate();
        expect(customer.isActivate()).toBe(true);
    });

    it("should deactivate customer", () => {
        expect(() => {
            const customer = new Customer("123", "Luan");
            customer.activate();
        }).toThrowError("Address is required")
    });
});