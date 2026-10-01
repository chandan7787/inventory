/// <reference types="cypress" />

import stock_movement_loc from "../../locators/08.stock_movement";

// New batch number for every test execution
function generateBatchNumber() {
    return `BATCH-${Date.now()}`;
}

// Expiry date is always one year from today; returns the day-of-month to pick on the datepicker
function calculateExpiryDay() {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    const expiryDay = expiryDate.getDate();
    const expiryMonth = expiryDate.getMonth();
    const expiryYear = expiryDate.getFullYear();

    cy.log(`Expiry Date: ${expiryDay}-${expiryMonth + 1}-${expiryYear}`);

    return expiryDay;
}

function openNewOpeningStock() {
    cy.contains("a", "Stock Movement").click();
    cy.contains("a", "Opening Stock").click();
    cy.contains("button", "Add New").click();
}

function selectDestinationLocation() {
    cy.xpath(stock_movement_loc.Destination_Location).click();
    cy.get(stock_movement_loc.type_store).type("Healthcare Store");
    cy.contains("li", "Healthcare store").click();
}

function selectTransportationType() {
    cy.xpath(stock_movement_loc.Transportation_Type).click();
    cy.contains("li", "BY PERSON").click();
}

// Moves the already-opened calendar 12 months forward and selects the matching expiry day
function selectExpiryDayOneYearAhead(expiryDay) {
    for (let i = 0; i < 12; i++) {
        cy.xpath(stock_movement_loc.forward_button).click();
    }

    cy.contains(
        ".p-datepicker-calendar td:not(.p-datepicker-other-month)",
        new RegExp(`^${expiryDay}$`)
    )
        .should("be.visible")
        .click();
}

function addItem1(batchNumber, expiryDay) {
    cy.contains("button", "Add").click();

    cy.get(stock_movement_loc.type_itemname).eq(0).type("DOLO 650.11 MG-KA11");
    cy.contains("tr", "DOLO 650.11 MG-KA11").click();

    // Batch
    cy.xpath(stock_movement_loc.addstock_batchname).eq(0).type(batchNumber);

    // Expiry Date
    cy.get(stock_movement_loc.exp_calender).click();
    selectExpiryDayOneYearAhead(expiryDay);

    // Quantity
    cy.xpath(stock_movement_loc.batch_qty).eq(0).clear().type("5");

    // UCP
    cy.xpath(stock_movement_loc.ucp_amt).eq(1).clear().type("10");

    // MRP
    cy.xpath(stock_movement_loc.unit_mrp).eq(2).clear().type("100");
}

function addItem2(batchNumber, expiryDay) {
    cy.contains("button", "Add").click();

    cy.get(stock_movement_loc.type_itemname).eq(1).type("DOLO 650.1 MG-KA11");
    cy.contains("tr", "DOLO 650.1 MG-KA11").click();

    // Batch
    cy.xpath(stock_movement_loc.addstock_batchname).eq(1).type(batchNumber);

    // Expiry Date
    cy.get(stock_movement_loc.exp_calender).eq(1).click();
    selectExpiryDayOneYearAhead(expiryDay);

    // Quantity
    cy.xpath(stock_movement_loc.batch_qty).eq(1).clear().type("5");

    // UCP
    cy.xpath(stock_movement_loc.ucp_amt).eq(7).clear().type("10");

    // MRP
    cy.xpath(stock_movement_loc.unit_mrp).eq(8).clear().type("100");
}

const Opening_stock_flow = {
    opening_stock: function () {
        const batchNumber = generateBatchNumber();
        const expiryDay = calculateExpiryDay();

        openNewOpeningStock();
        selectDestinationLocation();
        selectTransportationType();

        addItem1(batchNumber, expiryDay);
        addItem2(batchNumber, expiryDay);

        // Save
        cy.xpath('//button[.="Save"]').should("be.visible").click();
    }
};

export default Opening_stock_flow;
