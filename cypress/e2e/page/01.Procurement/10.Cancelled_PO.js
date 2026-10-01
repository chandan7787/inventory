import purchase_order_loc from "../../locators/03.purchase_order_loc";
import purchase_request from "../../locators/02.Purchase_Request";

const Cancelled_PO_flow=
{
    cancel_approvepo:function()
    {
        cy.wait(500)
        cy.contains("a", "Purchase Order Approval")
  .should("be.visible")
  .click();
cy.wait(2000)
cy.xpath(purchase_request.first_line)
  .should("be.visible")
  .click();
cy.wait(500)
cy.get(purchase_request.Action_dropdown)
  .should("be.visible")
  .click();
  cy.wait(500)

cy.contains("a", "Cancel PO")
  .should("be.visible")
  .click();

cy.contains("span", "Select a reason")
  .should("be.visible")
  .click();

cy.contains("li", "Rate Contract Revision")
  .should("be.visible")
  .click();

  cy.get(purchase_order_loc.canclled_poremarek).type("not required");

cy.contains("button", "Cancel PO")
  .should("be.visible")
  .click();

    },
    Cancelled_PO:function()
    {


        cy.contains("a","Cancelled Purchase Orders").click()
        
         cy.xpath(purchase_request.Search_filter)
            .should('be.visible')
            .click();
        cy.wait(1000);

        cy.get("@PONumber").then((poNumber) => 
            {

    cy.get(purchase_order_loc.past_ponumber)
        .should("be.visible")
        .clear()
        .type(poNumber);

});

        cy.wait(1000);

        cy.contains("button", "Search")
            .should('be.visible')
            .click();

    }



}
export default Cancelled_PO_flow;
