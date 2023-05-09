/// <reference types="cypress" />

describe("Context : My First Tests", () => {
    before(() => {
        //runs once before all test cases in this describe block,like beforeClass in TestNG
    })
    beforeEach(() => {
        //run before each test case,beforeMethod in TestNG
        cy.clearCookies();
    })
    after(() => {
        //similar to afterClass in TestNG,runs once after all tests finished
    })
    afterEach(() => {
        //similar to afterMethod in TestNG,run after each test case
    })

    it("Openning a web application", () => {
        cy.visit("/registration_form");
    })
    it("test2",()=>{
        expect(false).to.equal(false);
    })
    it("test3",()=>{
        expect(false).not.to.equal(true);
    })
    it("test4",()=>{
        expect(5).to.equal(5);
    })
    it("test5",()=>{
        expect(true).to.equal("5"==5);
    })
})
