/// <reference types="cypress" />

describe("Fint or get elements by using different locators", () => {

    beforeEach(() => {
        //run before each test case,beforeMethod in TestNG
        cy.clearCookies();
        cy.visit("/login");
    })

    it("Check different locator strategies", () => {
        // By CSS locator
        cy.get("input[name='username']").type("CydeoStudent"); //every statement creates an object to be interacted, and next comment makes operation to the object created at the previous statement
        cy.get("[name='password']").type("12345");
        cy.get("[name='password']").clear(); // clear what is typed
        cy.get("[name='password']").type("654321");

        //tagName
        cy.get("input").each((item, index, list) => {
            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })

        //attributeName
        cy.get("[type]");

        //by className
        cy.get('.btn.btn-primary');

        //by id
        cy.get("#wooden_spoon");

        //if I want to use text: no xpath in cypress,but it still possible with a different approach
        cy.get("button").should("contain", "Login").click();
    })

    it("Check finding elements by travelling through DOM", () => {
        //travel to find the login button: locate username box - go to form -then find button
        cy.get("input[name='username']").parents("form").find("button").should("contain", "Login").click();

    })

    it("check different type of assertions", () => {
        //cypress itself bumdles assertions provided by chai,sinon and jquery libraries
        //should assertions: does the assertion directly on the object itself
        cy.get("#wooden_spoon").should("contain", "Login").and("have.class", "btn btn-primary");

        //expect assertion: creates a subject of our test,then you implement different actions
        cy.get("#wooden_spoon").then((buttonElement) => {
            expect(buttonElement).to.have.text("Login");
            expect(buttonElement).to.have.class("btn btn-primary");
        })
    })



})
