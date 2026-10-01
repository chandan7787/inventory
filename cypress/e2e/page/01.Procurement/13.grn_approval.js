import purchase_request from "../../locators/02.Purchase_Request";
import grn_loc from "../../locators/05.grn_loc";

const Grn_approval_flow = {
  Grn_approval: function () {
    cy.contains("a", "GRN Approval").click();

    cy.xpath(purchase_request.Search_filter).should("be.visible").click();
    cy.wait(2000);

    // Search using captured PO Number
    cy.get("@grnNumber").then((grnNumber) => {
      expect(grnNumber).to.not.be.empty;

      cy.log("Searching grn Number: " + grnNumber);

      cy.get(grn_loc.past_grnnumber)
        .should("be.visible")
        .clear()
        .type(grnNumber);
    });

    // Search
    cy.contains("button", "Search").should("be.visible").click();
    cy.wait(1000)

    cy.xpath(grn_loc.first_line).click();
    cy.wait(1000)
    cy.get(grn_loc.Action_dropdown).click();

    cy.contains("a","Approve GRN").click()
    cy.get(grn_loc.remark).type('regular_grn_approval')
    cy.contains("button","Approve GRN").click();
    


  },
};
export default Grn_approval_flow;
