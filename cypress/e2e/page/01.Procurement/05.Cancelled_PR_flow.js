import purchase_request from "../../locators/02.Purchase_Request";

const Cancelled_PR_flow = {
  Cancelled_PR: function () {
    cy.contains("a", "PR Approval")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
    cy.xpath(purchase_request.first_line).should("be.visible").click();
    cy.wait(2000);
    cy.get(purchase_request.Action_dropdown).should("be.visible").click();
    cy.wait(2000);

    cy.contains("a", "Reject PR").should("be.visible").click();

    cy.get(purchase_request.remark)
      .should("be.visible")
      .type("not required items");

    cy.contains("button", "Cancel PR").should("be.visible").click();

    cy.get(".p-toast-message-success").should("be.visible");

    cy.get(".p-toast-detail").should("have.text", "PR Cancelled successfully.");

    cy.contains("a", "Cancelled Purchase Requests")
      .should("be.visible")
      .click();

    cy.xpath(purchase_request.Search_filter).should("be.visible").click();
    cy.wait(1000);

    // Read the exact copied PR number from file and paste it into the search box
    cy.readFile("cypress/fixtures/pr_data.json").then((data) => {
      cy.log("Pasting Copied PR Number: " + data.prNumber);

      cy.get(purchase_request.canclled_pr_number)
        .should("exist")
        .clear({ force: true })
        .type(data.prNumber, { force: true });
    });

    cy.wait(1000);

    cy.contains("button", "Search").should("be.visible").click();
  },
};

export default Cancelled_PR_flow;
