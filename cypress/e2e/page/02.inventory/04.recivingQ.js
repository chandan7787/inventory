import stock_movement_loc from "../../locators/08.stock_movement";

const recivingq_flow = {
    reciving: function () {

        cy.contains('a', 'Receiving Queue').should('be.visible').click();

        cy.xpath(stock_movement_loc.Search_filter)
            .should('be.visible')
            .click();

        cy.wait(2000);

        // Search using captured New Transfer Number
        cy.get('@newTransferNumber').then((newTransferNumber) => {

            expect(newTransferNumber).to.not.be.empty;

            cy.log('Searching New Transfer Number: ' + newTransferNumber);

            cy.get(stock_movement_loc.transaction_number)
                .should('be.visible')
                .clear()
                .type(newTransferNumber);
        });

        // Search
        cy.contains('button', 'Search')
            .should('be.visible')
            .click();

        // Receive
        cy.contains('button', 'Receive').should('be.visible').click();

        // Enter receipt quantity for each of the three items added to the transfer
        [0, 1, 2].forEach((index) => {
            cy.get(stock_movement_loc.issue_qty)
                .eq(index)
                .should('be.visible')
                .clear()
                .type('3');
        });

        // Confirm
        cy.contains('button', 'Confirm').should('be.visible').click();

        cy.get('.p-toast-message-error').should('not.exist');

        // Assert Green Success Toast appears with exact success message
        cy.get('.p-toast-message-success')
            .should('be.visible')
            .and('contain.text', 'Items Received Successfully');
    }
};

export default recivingq_flow;
