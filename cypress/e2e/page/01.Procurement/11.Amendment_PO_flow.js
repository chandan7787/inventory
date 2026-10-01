import Amendment_PO_loc from "../../locators/04.Amendment_PO_loc";
import purchase_request from "../../locators/02.Purchase_Request";
import purchase_order_loc from "../../locators/03.purchase_order_loc";

const Amendment_PO_flows = {

    Amendment_PO: function () {

        // Navigate to PO Amendment
        cy.contains("a", "PO Amendment")
  .should("be.visible")
  .click({ force: true });

cy.wait(2000);

        // Open Approved PO
        cy.contains("a", "Approved PO")
            .should("be.visible")
            .click();

            cy.wait(2000);

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

        // Select PO
        cy.xpath(Amendment_PO_loc.first_line)
            .should("be.visible")
            .click();
         cy.wait(2000)
        // Open Action dropdown
        cy.get(Amendment_PO_loc.Action_dropdown)
            .should("be.visible")
            .click();

        // Create Amendment PO
        cy.contains("a", "Create Amendment PO")
            .should("be.visible")
            .click();
           
         cy.wait(2000)

        // Commit Amendment PO
        cy.contains("button", "Commit Amendment PO")
            .should("be.visible")
            .click();

         cy.wait(2000)

        // Navigate to Amendment PO Approval
        cy.contains("a", "PO Amendment Approval")
            .should("be.visible")
            .click();

         cy.wait(2000)

        // Select PO
        cy.xpath(Amendment_PO_loc.amendment_first_line)
            .should("be.visible")
            .click();
         cy.wait(2000)


        // Open Action dropdown
        cy.get(Amendment_PO_loc.Action_dropdown)
            .should("be.visible")
            .click();

        // Approve Amendment PO
        cy.contains("a", "Approve Amendment PO")
            .should("be.visible")
            .click();
         cy.wait(2000)


        // Approve PO
        cy.contains("button", "Approve PO")
            .should("be.visible")
            .click();

        // Enter Remarks
        cy.get(purchase_request.remark)
            .should("be.visible")
            .type("purchase_order_approval");

        // Final Approve
        cy.xpath(purchase_order_loc.Approve_PO)
            .should("be.visible")
            .click();
    }
};

export default Amendment_PO_flows;