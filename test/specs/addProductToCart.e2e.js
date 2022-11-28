const HomePage = require("../pageobjects/home.page");

describe("Add product to cart", () => {

    it("should add a product to the cart", async () => {
        await HomePage.open();
        await HomePage.addProductToCart();
        expect(await HomePage.getProductAddedToCartMessage()).toBe("You added Radiant Tee to your shopping cart.");
    });
})