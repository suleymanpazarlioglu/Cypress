/// <reference types="cypress" />

describe("Context : My First Tests", () => {
   
    beforeEach(() => {
        //run before each test case,beforeMethod in TestNG
        cy.clearCookies();
        cy.visit("/multiple_buttons");
    })
    
    it("chech different button actions",()=>{
        //select a button with text
        cy.contains("Button 2").should("be.visible").click();
        cy.contains("Clicked on button two!").should("be.visible");
        
        //find element with class attribute and create a list then select 3rd element from the list
        cy.get("button").then(($buttons)=>{
            cy.wrap($buttons).eq(2).click();
            //in List Java,list.get(index)
            //assert the text
            cy.contains("Clicked on button three!").should("be.visible");
        })

        cy.get("button").each((element,index,list)=>{
            //assert length of the list,verify number of buttons
            expect(list).to.have.length(6);
            expect(element).to.have.attr("onclick");
        })

        //I will get all buttons like previous approach , get only the element then check for text of each element,if it is equal to Button 4,then click on it
        cy.get("button").each((element)=>{
            if(element.text()=="Button 4"){
                cy.log(element.text()); // this command write the text at the text console
                // element.click(); you cannot use cypress click function on jQuery element
                cy.wrap(element).click();
                expect(element).to.have.text("Button 4");
            }
        })
         
    })

    // npx cypress run --headless -b chrome
   
})
