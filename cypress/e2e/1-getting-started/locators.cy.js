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

        cy.get("input").each((item, index,list)=>{
            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
    })

})
