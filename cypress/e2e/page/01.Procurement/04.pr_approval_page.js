/// <reference types="cypress" />

import purchase_request from "../../locators/02.Purchase_Request";

function openPRApprovalTab() {
    cy.contains("a", "PR Approval").click({ force: true });
}

function searchPRByCapturedNumber() {
    // Open Search Filter
    cy.xpath(purchase_request.Search_filter).should("be.visible").click();

    // NOTE: retained — this precedes an async cy.readFile(), not a chainable
    // element, so there is nothing to tie a should('be.visible') retry to.
    cy.wait(1000);

    // Read PR Number from fixture
    cy.readFile("cypress/fixtures/pr_data.json").then((data) => {
        cy.log("Pasting Copied PR Number: " + data.prNumber);

        cy.get(purchase_request.canclled_pr_number)
            .should("be.visible")
            .clear()
            .type(data.prNumber);
    });
}

function openViewAndApproveForFirstPR() {
    // Select PR
    cy.xpath(purchase_request.first_line).should("be.visible").click();

    // Open Action dropdown
    cy.get(purchase_request.Action_dropdown).should("be.visible").click();

    // View & Approve PR
    cy.contains("a", "View & Approve PR").should("be.visible").click();
}

function submitPRApproval() {
    // Approve PR
    cy.contains("button", "Approve PR").should("be.visible").click();

    // Approval Remark
    cy.xpath(purchase_request.verify_prremark).should("be.visible").type("approve_pr");

    // Confirm Approval
    cy.xpath(purchase_request.Approve_PR).should("be.visible").click();
}

const pr_approval_flow = {
    pr_approval: function () {
        openPRApprovalTab();
        searchPRByCapturedNumber();
        openViewAndApproveForFirstPR();
        submitPRApproval();
    }
};

export default pr_approval_flow;
