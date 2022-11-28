const HomePage = require("../pageobjects/home.page");
const CheckoutPage = require("../pageobjects/checkout.page");
const SuccessPage = require("../pageobjects/success.page");

describe("Checkout tests", () => {
    it("should be able to finish the checkout process", async () => {
        await HomePage.open();
        await HomePage.addProductToCart();
        await HomePage.waitForProductAddedToCart();
        await HomePage.openCartPopup();
        await HomePage.goToCheckoutPage();
        await CheckoutPage.completeCheckoutForm();
        await CheckoutPage.placeOrder();
        expect(await SuccessPage.isConfirmationTitleDisplayed()).toBeTrue();
    });
});
