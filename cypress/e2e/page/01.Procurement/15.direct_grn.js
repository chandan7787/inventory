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

// Items added to the Direct GRN, in order
const DIRECT_GRN_ITEMS = [
    'DOLO 650.11 MG-KA11',
    'DOLO 650.1 MG-KA11',
    'DOLO 650.1 MG LESS-KA11'
];

// Received qty / free qty / discount / cost price details per row.
// Row text whitespace below matches each field's original selector exactly.
// NOTE: the first entry's costPriceRow intentionally targets the "1 MG" row
// text, not the "1 MG LESS" row it is grouped under here - that mismatch is
// pre-existing in the original test and has been preserved as-is (see report).
const RECEIVED_ROW_DETAILS = [
    {
        receivedRow: ' DOLO 650.1 MG LESS-KA11 ',
        freeQtyRow: 'DOLO 650.1 MG LESS-KA11',
        disRow: 'DOLO 650.1 MG LESS-KA11',
        costPriceRow: ' DOLO 650.1 MG-KA11 '
    },
    {
        receivedRow: ' DOLO 650.1 MG-KA11 ',
        freeQtyRow: ' DOLO 650.1 MG-KA11 ',
        disRow: 'DOLO 650.1 MG-KA11',
        costPriceRow: 'DOLO 650.1 MG-KA11'
    },
    {
        receivedRow: ' DOLO 650.11 MG-KA11 ',
        freeQtyRow: ' DOLO 650.11 MG-KA11 ',
        disRow: 'DOLO 650.11 MG-KA11',
        costPriceRow: 'DOLO 650.11 MG-KA11'
    }
];

function openNewDirectGRN() {
    cy.contains("a", "Direct GRN").click();
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

function addItemToDirectGRN(itemName, index) {
    const itemNameInput = cy.get(grn_loc.item_name);

    if (index === 0) {
        itemNameInput.should("be.visible").type(itemName);
    } else {
        itemNameInput.clear().type(itemName);
    }

    cy.xpath(grn_loc.search_button).click();
    cy.xpath(grn_loc.item_check_box).should("be.visible").click();
}

function addItemsToDirectGRN(itemNames) {
    cy.contains("button", "Add Items").click();
    itemNames.forEach(addItemToDirectGRN);
    cy.contains("button", "Add Selected Items to Direct GRN").should("be.visible").click();
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
        .find(grn_loc.batch).type('BATCH-3');

    //batch enter
    cy.contains("tr", " DOLO 650.11 MG-KA11 ")
        .find(grn_loc.batch).should("be.visible").type('BATCH-3');
}

function fillReceivedRowDetails({ receivedRow, freeQtyRow, disRow, costPriceRow }) {
    //Received qty
    cy.contains("tr", receivedRow)
        .find(grn_loc.Received)
        .should("be.visible")
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
        .find(grn_loc.Directgrn_cost_price)
        .should("be.visible")
        .click()
        .clear()
        .clear()
        .type("100")
        .should("have.value", "100.00");
}

function captureGRNNumber() {
    cy.xpath('//div/p-table/div/div/table/tbody/tr[1]/td[1]')
        .should("be.visible")
        .invoke("text")
        .then((grnText) => {
            const copiedgrnNumber = grnText.trim();

            expect(copiedgrnNumber).to.not.be.empty;

            cy.wrap(copiedgrnNumber).as("grnNumber");

            cy.log("Copied grn Number: " + copiedgrnNumber);
        });
}

const Direct_grn_flow =
{
    Direct_grn: function ()
    {
        openNewDirectGRN();
        selectVendor();
        selectDestinationLocation();
        setModeOfTransportAndSave();

        addItemsToDirectGRN(DIRECT_GRN_ITEMS);

        setExcessReceivedQty();
        enterBatchNumbers();
        RECEIVED_ROW_DETAILS.forEach(fillReceivedRowDetails);

        cy.contains("button", "Save & Commit").click();

        captureGRNNumber();
    }
}
export default Direct_grn_flow;
