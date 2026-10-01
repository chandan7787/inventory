import purchase_request from "../../locators/02.Purchase_Request";
import purchase_order_loc from "../../locators/03.purchase_order_loc";
import grn_loc from "../../locators/05.grn_loc";
import { faker } from "@faker-js/faker";

const invoiceNo =
  faker.number.int({ min: 100, max: 999 }) +
  faker.string.alpha({ length: 3, casing: "upper" });

const dcNo =
  faker.number.int({ min: 100, max: 999 }) +
  faker.string.alpha({ length: 3, casing: "upper" });

// Items added to the Emergency GRN, in order
const EMERGENCY_GRN_ITEMS = [
    'DOLO 650.11 MG-KA11',
    'DOLO 650.1 MG-KA11',
    'DOLO 650.1 MG LESS-KA11'
];

// Received qty / free qty / discount / cost price details per row.
// Row text whitespace below matches each field's original selector exactly.
const RECEIVED_ROW_DETAILS = [
    {
        receivedRow: ' DOLO 650.1 MG LESS-KA11 ',
        freeQtyRow: 'DOLO 650.1 MG LESS-KA11',
        disRow: 'DOLO 650.1 MG LESS-KA11',
        costPriceRow: 'DOLO 650.1 MG LESS-KA11'
    },
    {
        receivedRow: ' DOLO 650.1 MG-KA11 ',
        freeQtyRow: ' DOLO 650.1 MG-KA11 ',
        disRow: 'DOLO 650.1 MG-KA11',
        costPriceRow: ' DOLO 650.1 MG-KA11 '
    },
    {
        receivedRow: ' DOLO 650.11 MG-KA11 ',
        freeQtyRow: ' DOLO 650.11 MG-KA11 ',
        disRow: 'DOLO 650.11 MG-KA11',
        costPriceRow: ' DOLO 650.11 MG-KA11 '
    }
];

function openNewEmergencyGRN() {
    cy.contains("a", "Emergency GRN").click();
    cy.contains("button", "New GRN").click();
    cy.get(grn_loc.invoice).type(invoiceNo);
    cy.get(grn_loc.DC).type(dcNo);
}

function selectVendor() {
    cy.xpath(purchase_order_loc.vendor).should("be.visible").type("Chandu");
    cy.contains("li", "Chandu / CHA446").should("be.visible").click();
}

function selectDestinationLocation() {
    cy.xpath(grn_loc.Destination_Location).should("be.visible").click();
    cy.get(purchase_request.store_input).should("be.visible").type("Healthcare store");
    cy.xpath(purchase_request.Healthcare_store).should("be.visible").click();
}

function setModeOfTransportAndSave() {
    cy.xpath(grn_loc.Emr_Mode_Of_Transport).click();
    cy.contains("li", "By Person").click();
    cy.contains("button", "Save").click();
}

function addItemToEmergencyGRN(itemName, index) {
    const itemNameInput = cy.get(grn_loc.item_name);

    if (index === 0) {
        itemNameInput.should("be.visible").type(itemName);
    } else {
        itemNameInput.clear().type(itemName);
    }

    cy.xpath(grn_loc.search_button).click();
    cy.xpath(grn_loc.item_check_box).should("be.visible").click();
}

function addItemsToEmergencyGRN(itemNames) {
    cy.contains("button", "Add Items").click();
    itemNames.forEach(addItemToEmergencyGRN);
    cy.contains("button", "Add Selected Items to Emergency GRN").should("be.visible").click();
}

function setExcessReceivedQty() {
    cy.contains("tr", " DOLO 650.1 MG LESS-KA11 ")
        .find('[inputmode="decimal"]')
        .eq(0)
        .clear()
        .type('500');
}

function enterBatchNumbers() {
    //batch enter
    cy.contains("tr", " DOLO 650.1 MG-KA11 ")
        .find(grn_loc.batch).type('BATCH-2');

    //batch enter
    cy.contains("tr", " DOLO 650.11 MG-KA11 ")
        .find(grn_loc.batch).type('BATCH-2');
}

function fillReceivedRowDetails({ receivedRow, freeQtyRow, disRow, costPriceRow }) {
    //received qty
    cy.contains("tr", receivedRow)
        .find(grn_loc.Received)
        .clear()
        .type('5');

    //free qty
    cy.contains("tr", freeQtyRow)
        .should("be.visible")
        .within(() => {
            cy.get(grn_loc.free_qty)
                .eq(2)
                .clear()
                .type("2");
        });

    //dis
    cy.contains("tr", disRow)
        .find(grn_loc.dis)
        .should("be.visible")
        .clear()
        .type("5");

    //cost price
    cy.contains("tr", costPriceRow)
        .within(() => {
            cy.get(grn_loc.cost_price)
                .eq(1)
                .clear()
                .type("100");
        });
}

function captureGRNNumber() {
    cy.xpath('//div[2]/div/p-table/div/div/table/tbody/tr[1]/td[1]')
        .should("be.visible")
        .invoke("text")
        .then((grnText) => {
            const copiedgrnNumber = grnText.trim();

            expect(copiedgrnNumber).to.not.be.empty;

            cy.wrap(copiedgrnNumber).as("grnNumber");

            cy.log("Copied grn Number: " + copiedgrnNumber);
        });
}

const Emergency_Grn_flow =
{
    Emergency_grn: function ()
    {
        openNewEmergencyGRN();
        selectVendor();
        selectDestinationLocation();
        setModeOfTransportAndSave();

        addItemsToEmergencyGRN(EMERGENCY_GRN_ITEMS);

        setExcessReceivedQty();
        enterBatchNumbers();
        RECEIVED_ROW_DETAILS.forEach(fillReceivedRowDetails);

        cy.contains("button", "Save & Commit").click();

        captureGRNNumber();
    }
}
export default Emergency_Grn_flow;
