const Page = require("./page");

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

    get welcomeUserText(){
        return $("//header//span[@class='logged-in'][contains(text(),'Welcome')]");
    }

    open(){
        return super.open();
    }
}

module.exports = new HomePage();
