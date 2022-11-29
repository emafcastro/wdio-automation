const { timeouts } = require("../../utils/constants");
const Page = require("./page");

class CheckoutPage extends Page {
    get emailAddressInput() {
        return $("#customer-email-fieldset input[name='username']");
    }

    get firstNameInput() {
        return $("#shipping-new-address-form input[name='firstname']");
    }

    get lastNameInput() {
        return $("#shipping-new-address-form input[name='lastname']");
    }

    get streetAddressInput() {
        return $("#shipping-new-address-form input[name='street[0]']");
    }

    get cityInput() {
        return $("#shipping-new-address-form input[name='city']");
    }

    get stateDropdown() {
        return $("#shipping-new-address-form select[name='region_id']");
    }

    get zipCodeInput() {
        return $("#shipping-new-address-form input[name='postcode']");
    }

    get countryDropdown() {
        return $("#shipping-new-address-form select[name='country_id']");
    }

    get phoneNumberInput() {
        return $("#shipping-new-address-form input[name='telephone']");
    }

    get shippingMethods() {
        return $$("//input[@type='radio']");
    }

    get nextButton() {
        return $("//button/span[text()='Next']");
    }

    get loadingScreen() {
        return $("#checkout-loader");
    }

    get placeOrderButton() {
        return $("//button[@type='submit']/span[text()='Place Order']");
    }

    async completeCheckoutForm() {
        await this.loadingScreen.waitForDisplayed({ timeout: timeouts.short, reverse: true });
        await this.emailAddressInput.setValue("sarasa@email.com");
        await this.firstNameInput.setValue("Test");
        await this.lastNameInput.setValue("Test");
        await this.streetAddressInput.setValue("Test");
        await this.cityInput.setValue("Test");
        await this.stateDropdown.selectByIndex(1);
        await this.zipCodeInput.setValue("20000");
        await this.countryDropdown.selectByVisibleText("United States");
        await this.phoneNumberInput.setValue("3333333333");
        await this.shippingMethods[0].click();
        await this.nextButton.click();
    }

    async placeOrder() {
        await this.placeOrderButton.waitForClickable({ timeout: timeouts.short });
        await this.placeOrderButton.click();
    }
}
module.exports = new CheckoutPage();
