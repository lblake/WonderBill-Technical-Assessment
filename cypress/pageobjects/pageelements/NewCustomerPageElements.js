const or = require('../../locators.json');

export default class NewCustomerPageElements {
  createAccountBtn() {
    return cy.get(or.newaccountpage.newAccountBtn);
  }

  nameField() {
    return cy.get(or.newaccountpage.name);
  }

  emailAddress() {
    return cy.get(or.newaccountpage.email);
  }

  passWord() {
    return cy.get(or.newaccountpage.password);
  }

  terms() {
    return cy.get(or.newaccountpage.terms);
  }

  signUpBtn() {
    return cy.get(or.newaccountpage.signUpBtn);
  }
}
