/// <reference types="cypress" />

import stock_movement_loc from "../../locators/08.stock_movement";

const Opening_stock_flow = {
    opening_stock: function () {

        // New batch number for every test execution
        const batchNumber = `BATCH-${Date.now()}`;

        // =========================
        // Calculate Expiry Date
        // =========================

        const expiryDate = new Date();

        expiryDate.setFullYear(
            expiryDate.getFullYear() + 1
        );

        const expiryDay = expiryDate.getDate();
        const expiryMonth = expiryDate.getMonth();
        const expiryYear = expiryDate.getFullYear();

        cy.log(
            `Expiry Date: ${expiryDay}-${expiryMonth + 1}-${expiryYear}`
        );

        // =========================
        // Opening Stock
        // =========================

        cy.contains("a", "Stock Movement").click();

        cy.contains("a", "Opening Stock").click();

        cy.contains("button", "Add New").click();

        // =========================
        // Destination Location
        // =========================

        cy.xpath(stock_movement_loc.Destination_Location).click();

        cy.get(stock_movement_loc.type_store)
            .type("Healthcare Store");

        cy.contains("li", "Healthcare store").click();

        // =========================
        // Transportation Type
        // =========================

        cy.xpath(stock_movement_loc.Transportation_Type).click();

        cy.contains("li", "BY PERSON").click();


        // =====================================================
        // ITEM 1
        // =====================================================

        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(0)
            .type("DOLO 650.11 MG-KA11");

        cy.contains("tr", "DOLO 650.11 MG-KA11")
            .click();

        // Batch
        cy.xpath(stock_movement_loc.addstock_batchname)
            .eq(0)
            .type(batchNumber);

        // Expiry Date
        cy.get(stock_movement_loc.exp_calender)
            .click();

        // Move calendar 12 months forward
        for (let i = 0; i < 12; i++) {
            cy.xpath(stock_movement_loc.forward_button)
                .click();
        }

        // Select expiry day
        cy.contains(
            ".p-datepicker-calendar td:not(.p-datepicker-other-month)",
            new RegExp(`^${expiryDay}$`)
        )
            .should("be.visible")
            .click();

        // Quantity
        cy.xpath(stock_movement_loc.batch_qty)
            .eq(0)
            .clear()
            .type("5");

        // UCP
        cy.xpath(stock_movement_loc.ucp_amt)
            .eq(1)
            .clear()
            .type("10");

        // MRP
        cy.xpath(stock_movement_loc.unit_mrp)
            .eq(2)
            .clear()
            .type("100");


        // =====================================================
        // ITEM 2
        // =====================================================

        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(1)
            .type("DOLO 650.1 MG-KA11");

        cy.contains("tr", "DOLO 650.1 MG-KA11")
            .click();

        // Batch
        cy.xpath(stock_movement_loc.addstock_batchname)
            .eq(1)
            .type(batchNumber);

        // Expiry Date
        cy.get(stock_movement_loc.exp_calender)
        .eq(1)
            .click();

        // Move calendar 12 months forward
        for (let i = 0; i < 12; i++) {
            cy.xpath(stock_movement_loc.forward_button)
                .click();
        }

        // Select expiry day
        cy.contains(
            ".p-datepicker-calendar td:not(.p-datepicker-other-month)",
            new RegExp(`^${expiryDay}$`)
        )
            .should("be.visible")
            .click();

        // Quantity
        cy.xpath(stock_movement_loc.batch_qty)
            .eq(1)
            .clear()
            .type("5");

        // UCP
        cy.xpath(stock_movement_loc.ucp_amt)
            .eq(7)
            .clear()
            .type("10");

        // MRP
        cy.xpath(stock_movement_loc.unit_mrp)
            .eq(8)
            .clear()
            .type("100");

            // Save
        cy.xpath('//button[.="Save"]')
            .should("be.visible")
            .click();
    }
};

export default Opening_stock_flow;