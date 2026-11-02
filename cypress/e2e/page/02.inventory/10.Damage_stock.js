/// <reference types="cypress" />

import stock_movement_loc from "../../locators/08.stock_movement";

const Damage_stock_flow = {
    Damage_stock: function () {

        cy.contains("a", "Stock Movement").click();
        cy.contains("a", "Damaged/Lost Stock").click();
        cy.contains("button", "New ").click();

        // Source Location
        cy.xpath(stock_movement_loc.From_StockArea).click();

        cy.get(stock_movement_loc.type_store)
            .type("Healthcare Store");

        cy.contains("li", "Healthcare store").click();

        // Reason
        cy.xpath(stock_movement_loc.reason).click();
        cy.wait(1000)
        cy.get(stock_movement_loc.reason_type).click().type("near-expiry")
        cy.contains("li", "Near-Expiry").click();
        cy.wait(1000)

        // =========================
        // Item 1
        // =========================

        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(1)
            .type("DOLO 650.11 MG-KA11");

        cy.contains("tr", "DOLO 650.11 MG-KA11").click();

        cy.contains("td", "select").click();
        cy.contains("li", "batch-1").click();

        cy.xpath(stock_movement_loc.batch_qty)
            .eq(0)
            .clear()
            .type("5");

        // =========================
        // Item 2
        // =========================

        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(2)
            .type("DOLO 650.1 MG-KA11");

        cy.contains("tr", "DOLO 650.1 MG-KA11").click();

        cy.contains("td", "select").click();
        cy.contains("li", "batch-1").click();

        cy.xpath(stock_movement_loc.batch_qty)
            .eq(1)
            .clear()
            .type("5");

        // =========================
        // Item 3
        // =========================

        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(3)
            .type("DOLO 650.1 MG LESS-KA11");

        cy.contains("tr", "DOLO 650.1 MG LESS-KA11").click();

        cy.xpath(stock_movement_loc.batch_qty)
            .eq(2)
            .clear()
            .type("5");

        // =========================
        // Save
        // =========================

        cy.xpath('//button[.="Save"]')
            .should("be.visible")
            .click();

            //cy.contains("Item added successfully", { timeout: 10000 })
   // .should("be.visible");
    }
};

export default Damage_stock_flow;