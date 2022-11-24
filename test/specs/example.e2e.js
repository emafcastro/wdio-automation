const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HomePage.open();
        await HomePage.signInLink.click();

        await LoginPage.login('h9r8kr49n1@paperpapyrus.com', 'Automation!');
        await expect(HomePage.welcomeUserText).toBeExisting();
        await expect(HomePage.welcomeUserText).toHaveTextContaining(
            'Welcome, Test Automation!');
    });
});


