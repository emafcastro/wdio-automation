const { timeouts } = require("../../utils/constants");
const Page = require("./page");

class SuccessPage extends Page {
    get confirmationTitle() {
        return $("//h1/span[contains(text(),'Thank you')]");
    }

    get orderIdText() {
        return $("div.checkout-success p span");
    }

    async isConfirmationTitleDisplayed() {
        await this.confirmationTitle.waitForDisplayed({ timeout: timeouts.short });
        return this.confirmationTitle.isDisplayed();
    }
}
module.exports = new SuccessPage();