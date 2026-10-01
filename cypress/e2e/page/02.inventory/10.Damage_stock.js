/// <reference types="cypress" />

import stock_movement_loc from "../../locators/08.stock_movement";

// Items added to the damage/lost stock entry, in order.
// Items 1 & 2 pick an existing batch via the "select" dropdown; item 3 has no batch-select step.
const DAMAGE_ITEMS = [
    { name: 'DOLO 650.11 MG-KA11', itemIndex: 1, qtyIndex: 0, hasBatchSelect: true },
    { name: 'DOLO 650.1 MG-KA11', itemIndex: 2, qtyIndex: 1, hasBatchSelect: true },
    { name: 'DOLO 650.1 MG LESS-KA11', itemIndex: 3, qtyIndex: 2, hasBatchSelect: false }
];

function openNewDamageStock() {
    cy.contains("a", "Stock Movement").click();
    cy.contains("a", "Damaged/Lost Stock").click();
    cy.contains("button", "New ").click();
}

function selectSourceLocation() {
    cy.xpath(stock_movement_loc.From_StockArea).click();
    cy.get(stock_movement_loc.type_store).type("Healthcare Store");
    cy.contains("li", "Healthcare store").click();
}

function selectDamageReason() {
    cy.xpath(stock_movement_loc.reason).click();
    cy.get(stock_movement_loc.reason_type).should("be.visible").click().type("near-expiry");
    cy.contains("li", "Near-Expiry").click();
}

function addDamageItem({ name, itemIndex, qtyIndex, hasBatchSelect }) {
    cy.contains("button", "Add").should("be.visible").click();

    cy.get(stock_movement_loc.type_itemname).eq(itemIndex).type(name);
    cy.contains("tr", name).click();

    if (hasBatchSelect) {
        cy.contains("td", "select").click();
        cy.contains("li", "batch-1").click();
    }

    cy.xpath(stock_movement_loc.batch_qty).eq(qtyIndex).clear().type("5");
}

const Damage_stock_flow = {
    Damage_stock: function () {
        openNewDamageStock();
        selectSourceLocation();
        selectDamageReason();

        DAMAGE_ITEMS.forEach(addDamageItem);

        // Save
        cy.xpath('//button[.="Save"]').should("be.visible").click();
    }
};

export default Damage_stock_flow;
