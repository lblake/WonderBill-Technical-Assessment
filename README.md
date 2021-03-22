# WonderBill-Technical-Assessment

I used Cypress (https://www.cypress.io/) automated testing framework to complete the assessment

To run the tests you will need the following Prerequisite:

install Node if not already installed on your computer

After installing node you will need to do the following:

1: Clone the repository 

2: After installing node open your IDE or Terminal or Git bash in the cloned directory and run the following command npm install to install the project dependencies 

3: There are a number of ways you can run the tests from the command-line:

A: 'npx cypress open' command will open the 'Cypress test runner' select “NewWonderBillUserTest.spec.js” this will open a new Chrome browser and start running the tests

B: 'npx cypress run' this will run the test in ‘headless’ mode (no browser).  If you want to view the test run(s) you can do so via mp4 recordings which are located in 'cypress/videos/testcases' folder 

PLEASE NOTE: I used faker.js package (https://www.npmjs.com/package/faker) to generate fake users, email addresses and passwords. Which allows the test to be run multiple times without user registration issues.



# Requirements

A: Runnable through the command line. COMPLETED

B: One test that successfully creates a new WonderBill user (up to requiring email confirmation). COMPLETED

C: One test that fails (on purpose!) and will provide useful data for debug (think logs, screenshots, videos, etc.). COMPLETED

PLEASE NOTE:  That the test failed (point C).  However, I tested that the test generated the expected error message which allowed the overall test run to pass.  

D: Written in JavaScript/TypeScript. COMPLETED 


When running the failed test (Point C) I took some screen shots of the failure to provide further evidence and information on the failure.  These screens are as follows: 



