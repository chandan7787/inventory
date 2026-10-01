/// <reference types="cypress" />

import purchase_request from "../../locators/02.Purchase_Request";

const pr_approval_flow = {
    pr_approval: function () {

        cy.contains("a", "PR Approval").click({ force: true });
        cy.wait(1000)

        // Open Search Filter
        cy.xpath(purchase_request.Search_filter)
            .should("be.visible")
            .click();

        cy.wait(1000);

        // Read PR Number from fixture
        cy.readFile("cypress/fixtures/pr_data.json").then((data) => {

            cy.log("Pasting Copied PR Number: " + data.prNumber);

            cy.get(purchase_request.canclled_pr_number)
                .should("be.visible")
                .clear()
                .type(data.prNumber);
        });

        // Select PR
        cy.xpath(purchase_request.first_line)
            .should("be.visible")
            .click();

        cy.wait(1000);

        // Open Action dropdown
        cy.get(purchase_request.Action_dropdown)
            .should("be.visible")
            .click();

        // View & Approve PR
        cy.contains("a", "View & Approve PR")
            .should("be.visible")
            .click();

        cy.wait(2000);

        // Approve PR
        cy.contains("button", "Approve PR")
            .should("be.visible")
            .click();

        // Approval Remark
        cy.xpath(purchase_request.verify_prremark)
            .should("be.visible")
            .type("approve_pr");

        // Confirm Approval
        cy.xpath(purchase_request.Approve_PR)
            .should("be.visible")
            .click();
    }
};

export default pr_approval_flow;