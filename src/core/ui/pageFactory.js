
const LoginPage = require('../../tests/ui/loginPage');
const HomePage = require('../../tests/ui/homePage');

class PageFactory {
  constructor(page) {
    this.page = page;
  }

  getPage(pageName) {
    switch (pageName) {
      case 'login':
        return new LoginPage(this.page);
      case 'home':
        return new HomePage(this.page);
      default:
        throw new Error(`Page ${pageName} not recognized`);
    }
  }
}

module.exports = PageFactory;
  