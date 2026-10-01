import purchase_request from "../../locators/02.Purchase_Request";

const purchase_request_verificatio=
{
    pr_verification:function()
    {
        cy.contains("a","PR Verfication").click();
        cy.wait(3000)

        cy.xpath(purchase_request.Search_filter)
            .should('be.visible')
            .click();
        cy.wait(1000);

        // Read the exact copied PR number from file and paste it into the search box
        cy.readFile('cypress/fixtures/pr_data.json').then((data) => {
            cy.log("Pasting Copied PR Number: " + data.prNumber);

            cy.get(purchase_request.canclled_pr_number)
                .should('exist')
                .clear({ force: true })
                .type(data.prNumber, { force: true });

                cy. contains("button","Search").click();
        });
    cy.wait(1000);
            cy.xpath(purchase_request.first_line)
  .should("be.visible")
  .click();
  cy.wait(1000);

cy.get(purchase_request.Action_dropdown)
  .should("be.visible")
  .click();
  cy.wait(1000);

cy.contains("a", "View & Verify Items")
  .should("be.visible")
  .click();
  cy.wait(2000);

cy.contains("button", "Verify PR")
  .should("be.visible")
  .click();
  cy.wait(1000)

cy.xpath(purchase_request.verify_prremark)
  .should("be.visible")
  .clear()
  .type("verify pr");

cy.xpath(purchase_request.Verify_PR)
  .should("be.visible")
  .click();
  cy.wait(1000);

    
        //cy.contains("button", "Verify PR").click();

cy.get(".p-toast-message-success")
  .should("be.visible")
  .within(() => {
    cy.get(".p-toast-summary").should("have.text", "Success Message");
    cy.get(".p-toast-detail").should("have.text", "PR Verified successfully.");
    cy.wait(1000);
  });

    }

}
export default purchase_request_verificatio;