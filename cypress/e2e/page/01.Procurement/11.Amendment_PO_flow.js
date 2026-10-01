import Amendment_PO_loc from "../../locators/04.Amendment_PO_loc";
import purchase_request from "../../locators/02.Purchase_Request";
import purchase_order_loc from "../../locators/03.purchase_order_loc";

function openApprovedPO() {
    cy.contains("a", "PO Amendment")
        .should("be.visible")
        .click({ force: true });

    cy.contains("a", "Approved PO")
        .should("be.visible")
        .click();
}

function searchApprovedPOByNumber() {
    cy.xpath(purchase_request.Search_filter)
        .should("be.visible")
        .click();
    cy.wait(2000);

    cy.get("@PONumber").then((poNumber) => {

        expect(poNumber).to.not.be.empty;

        cy.log("Searching PO Number: " + poNumber);

        cy.get(purchase_order_loc.past_ponumber)
            .should("be.visible")
            .clear()
            .type(poNumber);
    });

    cy.contains("button", "Search")
        .should("be.visible")
        .click();
}

function createAmendmentPO() {
    cy.xpath(Amendment_PO_loc.first_line)
        .should("be.visible")
        .click();

    cy.get(Amendment_PO_loc.Action_dropdown)
        .should("be.visible")
        .click();

    cy.contains("a", "Create Amendment PO")
        .should("be.visible")
        .click();

    cy.contains("button", "Commit Amendment PO")
        .should("be.visible")
        .click();
}

function approveAmendmentPO() {
    cy.contains("a", "PO Amendment Approval")
        .should("be.visible")
        .click();

    cy.xpath(Amendment_PO_loc.amendment_first_line)
        .should("be.visible")
        .click();

    cy.get(Amendment_PO_loc.Action_dropdown)
        .should("be.visible")
        .click();

    cy.contains("a", "Approve Amendment PO")
        .should("be.visible")
        .click();

    cy.contains("button", "Approve PO")
        .should("be.visible")
        .click();

    cy.get(purchase_request.remark)
        .should("be.visible")
        .type("purchase_order_approval");

    cy.xpath(purchase_order_loc.Approve_PO)
        .should("be.visible")
        .click();
}

const Amendment_PO_flows = {

    Amendment_PO: function () {
        openApprovedPO();
        searchApprovedPOByNumber();
        createAmendmentPO();
        approveAmendmentPO();
    }
};

export default Amendment_PO_flows;
