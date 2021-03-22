const or = require('../../locators.json')

export default class HomePageElements {

    createYourAccountBtn(){

        return cy.get(or.homepage.createYourAccountBtn)
    }

}