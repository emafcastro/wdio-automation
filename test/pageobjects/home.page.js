const Page = require("./page");
const {timeouts} = require("../../utils/constants");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInLink() {
        return $("//header//a[contains(text(),'Sign In')]");
    }

    get welcomeUserText() {
        return $("//header//span[@class='logged-in'][contains(text(),'Welcome')]");
    }

    get productList() {
        return $$(".product-item-info");
    }

    get sizeProduct() {
        // This will get only the first size option in the first product
        return $("//li[@class='product-item'][1]//div[contains(@aria-describedby,'option-label-size')][1]");
    }

    get colorProduct() {
        // This will get only the first color in the first product
        return $("//li[@class='product-item'][1]//div[contains(@aria-describedby,'option-label-color')][1]");
    }

    get addToCartButton() {
        // This will get only the button in the first product
        return $("//li[@class='product-item'][1]//button");
    }

    get productAddedToCartMessage() {
        return $("//div[@role='alert']/div/div");
    }

    get cartItemsCounter() {
        return $("a.showcart span.counter");
    }

    get cartLink() {
        return $("//div[@data-block='minicart']/a");
    }

    get cartPopup() {
        return $("#ui-id-1");
    }

    get proceedToCheckoutButton() {
        return $("#top-cart-btn-checkout");
    }

    open() {
        return super.open();
    }

    async addProductToCart() {
        await this.sizeProduct.click();
        await this.colorProduct.click();
        await this.productList[0].moveTo();
        await this.addToCartButton.click();
    }

    async getProductAddedToCartMessage() {
        await this.productAddedToCartMessage.waitForDisplayed({ timeout: timeouts.short });
        return this.productAddedToCartMessage.getText();
    }

    async waitForProductAddedToCart() {
        await this.cartItemsCounter.waitForDisplayed({ timeout: timeouts.short });
    }

    async openCartPopup() {
        await this.cartLink.click();
        await this.cartPopup.waitForDisplayed({ timeout: timeouts.short });
    }

    async goToCheckoutPage(){
        await this.proceedToCheckoutButton.click();
    }
}

module.exports = new HomePage();
