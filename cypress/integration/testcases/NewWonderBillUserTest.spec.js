Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import HomePageActions from '../../pageobjects/pageactions/HomePageActions';
import NewCustomerPageActions from '../../pageobjects/pageactions/NewCustomerPageActions';
import faker from 'faker';

describe('Create a new WonderBill account', () => {
  const homepage = new HomePageActions();

  const registerUser = new NewCustomerPageActions();

  const password = faker.internet.password();

  const name = faker.name.findName();

  const email = faker.internet.email();
  
  const invalidEmail = 'Clementina.Glover@gmail.comWJS4Hmhoi5jY6FG';
  
  function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

  beforeEach(() => {
    homepage.navigateToURL();
  });

  it('Validate title of the Page & Accepts Cookies', () => {
    homepage.validateTitle().should('contain', 'WonderBill');

    homepage.acceptCookie().click();

    homepage.createYourAccountBtn().click();
  });

  it('Creates a new WonderBill user', () => {
    homepage.acceptCookie().click();

    registerUser.newCustomerDetails(name, email, password);

    cy.contains('Nearly there...check your email');

    cy.url().should('include', '/register-success');
  });

  it('Fails to create a new WonderBill user', () => {
    homepage.acceptCookie().click();

    registerUser.newCustomerDetails(name, invalidEmail + randLetter(1), password);

    cy.contains('There was an error with this request: Bad Request');
  });
});
