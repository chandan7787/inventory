import stock_movement_loc from "../../locators/08.stock_movement";

// Items added to the transfer, in order. Batch-selection behaviour differs per row
// (item 3 has no batch step) exactly as in the original flow.
const TRANSFER_ITEMS = [
    { name: 'DOLO 650.11 MG-KA11', batch: { locator: stock_movement_loc.batch_no, index: 0 } },
    { name: 'DOLO 650.1 MG-KA11', batch: { locator: stock_movement_loc.second_batch_no } },
    { name: 'DOLO 650.1 MG LESS-KA11' }
];

function selectStockArea(triggerLocator, searchText, optionText) {
    cy.xpath(triggerLocator).should('be.visible').click();
    cy.get(stock_movement_loc.type_store).should('be.visible').type(searchText);
    cy.contains('li', optionText).should('be.visible').click();
}

function selectModeOfTransport() {
    cy.xpath(stock_movement_loc.Mode_of_Transport).should('be.visible').click();
    cy.contains('li', 'BY PERSON').should('be.visible').click();
}

function addTransferItem({ name, batch }, index) {
    cy.contains('button', 'Add').should('be.visible').click();

    cy.get(stock_movement_loc.item_search).eq(index).should('be.visible').type(name);
    cy.contains('tr', name).should('be.visible').click();

    if (batch) {
        if (batch.index !== undefined) {
            cy.xpath(batch.locator).eq(batch.index).should('be.visible').click();
        } else {
            cy.xpath(batch.locator).should('be.visible').click();
        }
        cy.contains('li', 'batch-1').should('be.visible').click();
    }

    cy.get(stock_movement_loc.issue_qty).eq(index).should('be.visible').type('5');
}

function captureNewTransferNumber() {
    cy.xpath('//div/p-table/div/div[2]/table/tbody/tr[1]/td[1]')
        .should('be.visible')
        .invoke('text')
        .then((newTransferText) => {
            const newTransferNumber = newTransferText.trim();

            expect(newTransferNumber).to.not.be.empty;

            cy.wrap(newTransferNumber).as('newTransferNumber');

            cy.log(`Copied New Transfer Number: ${newTransferNumber}`);
        });
}

const new_transfer_flow = {
    newtransfer: function () {

        cy.contains('a', 'Stock Movement').should('be.visible').click();
        cy.contains('a', 'New Transfer').should('be.visible').click();
        cy.contains('button', 'New ').should('be.visible').click();

        selectStockArea(stock_movement_loc.From_StockArea, 'Healthcare Store', 'Healthcare store');
        selectStockArea(stock_movement_loc.To_StockArea, 'healthplus pharmacy', 'HealthPlus Pharmacy');
        selectModeOfTransport();

        TRANSFER_ITEMS.forEach(addTransferItem);

        cy.contains('button', 'Save').should('be.visible').click();
        cy.wait(2000);

        captureNewTransferNumber();
    }
}

export default new_transfer_flow
