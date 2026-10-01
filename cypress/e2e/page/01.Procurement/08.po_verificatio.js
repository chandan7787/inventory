import purchase_order_loc from "../../locators/03.purchase_order_loc";
import purchase_request from "../../locators/02.Purchase_Request";




 const po_verificatio_flow=
 {
    po_verificatio: function()
    {
        cy.contains("a","PO Verification").click()

        // Open Search Filter
        cy.xpath(purchase_request.Search_filter)
            .should("be.visible")
            .click();
             cy.wait(2000);

        // Search using captured PO Number
        cy.get("@PONumber").then((poNumber) => {

            expect(poNumber).to.not.be.empty;

            cy.log("Searching PO Number: " + poNumber);

            cy.get(purchase_order_loc.past_ponumber)
                .should("be.visible")
                .clear()
                .type(poNumber);
        });

        // Search
        cy.contains("button", "Search")
            .should("be.visible")
            .click();
cy.wait(1500)
            //-------------------------
         cy.xpath(purchase_request.first_line).click()
            cy.get(purchase_request.Action_dropdown).click();
            
            cy.contains("a","Verify PO").click();
            cy.wait(1000)
            cy.contains("button","Verify PO").click()
            cy.wait(3000);
  

    }
 }
 export default po_verificatio_flow;