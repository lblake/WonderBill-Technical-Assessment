import HomePageElements from '../pageelements/HomePageElements';

export default class HomePageActions {
  constructor() {
    this.element = new HomePageElements();
  }

  navigateToURL() {
    cy.visit('/');
  }

  validateTitle() {
    return cy.title();
  }

  acceptCookie() {
    return cy.get('#_evidon-accept-button');
  }

  createYourAccountBtn(){
      
    return cy.get('._2IjAf')
      
  }
}
