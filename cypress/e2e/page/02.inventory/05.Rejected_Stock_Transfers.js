import stock_movement_loc from "../../locators/08.stock_movement";

const Rejected_stock_flow = {
    Rejected_transfer: function () {

        cy.contains('a', 'Rejected Stock Transfers').should('be.visible').click();

        cy.xpath(stock_movement_loc.rejected_firstline).should('be.visible').click();

        cy.get(stock_movement_loc.Action_dropdown).should('be.visible').click();

        cy.contains('a', 'Accept').should('be.visible').click();

        cy.contains('button', 'Commit Request').should('be.visible').click();
    }
};

export default Rejected_stock_flow;
