import stock_movement_loc from "../../locators/08.stock_movement";

const Rejected_stock_flow = {
    Rejected_transfer: function () {

        cy.contains("a", "Rejected Stock Transfers").click();

        cy.xpath(stock_movement_loc.rejected_firstline).click();

        cy.get(stock_movement_loc.Action_dropdown).click();

        cy.contains("a", "Accept").click();

        cy.contains("button", "Commit Request").click();
    }
};

export default Rejected_stock_flow;