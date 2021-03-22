import NewCustomerPageElements from '../pageelements/NewCustomerPageElements';

export default class NewCustomerPageActions {
  constructor() {
    this.element = new NewCustomerPageElements();
  }

  newCustomerDetails(name, email, password) {
    this.element.createAccountBtn().click();
    this.element.nameField().type(name);
    this.element.emailAddress().type(email);
    this.element.passWord().type(password);
    this.element.terms().click({ force: true });
    this.element.signUpBtn().click({ force: true });
  }

  emailConfirmation() {
    this.element
      .emailAddress()
      .should('contain', 'Nearly there...check your email.');
  }
}
