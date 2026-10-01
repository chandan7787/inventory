import purchase_request from "../../locators/02.Purchase_Request";
import purchase_order_loc from "../../locators/03.purchase_order_loc";

const purchase_order_approval = {
  po_approval: function () {
    cy.contains("a", "Purchase Order Approval")
      .should("be.visible")
      .click();

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

    cy.xpath(purchase_request.first_line)
      .should("exist")
      .should("be.visible")
      .click();

    cy.get(purchase_request.Action_dropdown)
      .should("be.visible")
      .click();

    cy.contains("a", "Approve PO")
      .should("be.visible")
      .click();

    cy.contains("button", "Approve PO")
      .should("be.visible")
      .click();

    cy.get(purchase_request.remark)
      .should("be.visible")
      .clear()
      .type("purchase_order_approval");

    cy.xpath(purchase_order_loc.Approve_PO)
      .should("be.visible")
      .click();
    cy.wait(3000);
  },
};
export default purchase_order_approval;
