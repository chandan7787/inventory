/// <reference types="cypress" />

import stock_movement_loc from "../../locators/08.stock_movement";

// Items added to the stock addition, in order. Item 3 has no batch-name step
// (matches the original flow, where that step was commented out).
const STOCK_ITEMS = [
    { name: 'DOLO 650.11 MG-KA11', batchName: 'batch-1', qty: '5', costPrice: '100' },
    { name: 'DOLO 650.1 MG-KA11', batchName: 'batch-1', qty: '5', costPrice: '100' },
    { name: 'DOLO 650.1 MG LESS-KA11', qty: '5', costPrice: '100' }
];

function selectSourceStockArea() {
    cy.xpath(stock_movement_loc.From_StockArea).should('be.visible').click();
    cy.get(stock_movement_loc.type_store).should('be.visible').type('Healthcare Store');
    cy.contains('li', 'Healthcare store').should('be.visible').click();
}

function selectTransportationType() {
    cy.xpath(stock_movement_loc.Transportation_Type).should('be.visible').click();
    cy.contains('li', 'BY PERSON').should('be.visible').click();
}

function addStockItem({ name, batchName, qty, costPrice }, index) {
    cy.contains('button', 'Add').should('be.visible').click();

    cy.get(stock_movement_loc.type_itemname).eq(index).should('be.visible').type(name);
    cy.contains('tr', name).should('be.visible').click();

    if (batchName) {
        cy.xpath(stock_movement_loc.addstock_batchname).eq(index).should('be.visible').type(batchName);
    }

    cy.xpath(stock_movement_loc.batch_qty).eq(index).should('be.visible').clear().type(qty);
    cy.xpath(stock_movement_loc.cost_price).eq(index).should('be.visible').clear().type(costPrice);
}

const stock_addtion_flow = {
    stock_addtion: function () {

        cy.contains('a', 'Stock Movement').should('be.visible').click();
        cy.contains('a', 'Stock Addition').should('be.visible').click();
        cy.contains('button', 'New ').should('be.visible').click();

        selectSourceStockArea();
        selectTransportationType();

        STOCK_ITEMS.forEach(addStockItem);

        // MRP
        cy.xpath(stock_movement_loc.lessitem_mrp).should('be.visible').type('500');

        // Save
        cy.xpath('//button[.="Save"]')
            .should('be.visible')
            .click();
    }
};

export default stock_addtion_flow;
