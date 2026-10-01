import purchase_request from "../../locators/02.Purchase_Request";

function openPRApprovalTab() {
    cy.contains("a", "PR Approval").should('be.visible').click();
}

function openCancelPRActionForFirstPR() {
    cy.xpath(purchase_request.first_line).should('be.visible').click();
    cy.get(purchase_request.Action_dropdown).should('be.visible').click();
    cy.contains("a", "Cancel PR").should('be.visible').click();
}

function submitPRCancellation() {
    cy.get(purchase_request.remark).should('be.visible').type("not required items");
    cy.contains("button", "Cancel PR").should('be.visible').click();
}

function searchCancelledPRByCapturedNumber() {
    cy.contains("a", "Cancelled Purchase Requests").should('be.visible').click();

    cy.xpath(purchase_request.Search_filter).should('be.visible').click();

    // NOTE: retained — this precedes an async cy.readFile(), not a chainable
    // element, so there is nothing to tie a should('be.visible') retry to.
    cy.wait(1000);

    // Read the exact copied PR number from file and paste it into the search box
    cy.readFile('cypress/fixtures/pr_data.json').then((data) => {
        cy.log("Pasting Copied PR Number: " + data.prNumber);

        cy.get(purchase_request.canclled_pr_number)
            .should('exist')
            .clear({ force: true })
            .type(data.prNumber, { force: true });
    });

    cy.contains("button", "Search").should('be.visible').click();
}

const Cancelled_PR_flow = {
    Cancelled_PR: function () {
        openPRApprovalTab();
        openCancelPRActionForFirstPR();
        submitPRCancellation();
        searchCancelledPRByCapturedNumber();
    }
};

export default Cancelled_PR_flow;
