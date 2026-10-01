import purchase_order_loc from "../../locators/03.purchase_order_loc";
import purchase_request from "../../locators/02.Purchase_Request";

// Items added to every PO via Direct Search, in order.
const PO_ITEMS = [
    'DOLO 650.11 MG-KA11',
    'DOLO 650.1 MG-KA11',
    'DOLO 650.1 MG LESS-KA11'
];

// Row text used to find each item's row when setting quantities.
// Note: for the first item, the row-text used to locate the qty field has
// different spacing than the row-text used for the other three number
// fields on that same row - preserved exactly as in the original rather
// than normalized, since it reflects the app's actual rendered text.
const PO_ITEM_ROWS = [
    { qtyRowText: ' DOLO 650.11 MG-KA11 ', otherRowText: 'DOLO 650.11 MG-KA11' },
    { qtyRowText: ' DOLO 650.1 MG-KA11 ', otherRowText: ' DOLO 650.1 MG-KA11 ' },
    { qtyRowText: ' DOLO 650.1 MG LESS-KA11 ', otherRowText: ' DOLO 650.1 MG LESS-KA11 ' }
];

function createNewPurchaseOrder() {
    cy.contains("a", "Create Purchase Order")
        .should("be.visible")
        .click();

    cy.contains("button", "New PO")
        .should("be.visible")
        .click();
}

function selectRequestingStore() {
    cy.xpath(purchase_request.Requesting_Store)
        .should("be.visible")
        .click();

    cy.get(purchase_request.store_input)
        .should("be.visible")
        .type("Healthcare store");

    cy.xpath(purchase_request.Healthcare_store)
        .should("be.visible")
        .click();
}

function selectVendor() {
    cy.xpath(purchase_order_loc.vendor)
        .should("be.visible")
        .type("Chandu");

    cy.contains("li", "Chandu / CHA446")
        .should("be.visible")
        .click();
}

function selectPurchasingStore() {
    cy.xpath(purchase_order_loc.Purchasing_Store)
        .should("be.visible")
        .click();

    cy.get(purchase_request.store_input)
        .should("be.visible")
        .type("HealthPlus Pharmacy");

    cy.xpath(purchase_request.HealthPlus_Pharmacy)
        .should("be.visible")
        .click();
}

function setRequiredOnDateToToday() {
    cy.xpath('//input[@placeholder="DD/MM/YYYY" and @role="combobox"]')
        .should("be.visible")
        .click();

    cy.get(".p-datepicker-today span")
        .first()
        .should("be.visible")
        .click();
}

function addItemByDirectSearch(itemName, index) {
    if (index === 0) {
        cy.get(purchase_request.item_name)
            .should("be.visible")
            .type(itemName);
    } else {
        cy.get(purchase_request.item_name)
            .clear()
            .type(itemName);
    }

    cy.xpath(purchase_order_loc.po_search_button).click();
    cy.xpath(purchase_order_loc.item_check_box).click();
}

function addItemsToPO() {
    cy.xpath(purchase_order_loc.po_additems)
        .should("be.visible")
        .click();

    cy.contains("a", "From Direct Search")
        .should("be.visible")
        .click();

    PO_ITEMS.forEach(addItemByDirectSearch);

    cy.xpath(purchase_order_loc.Add_Selected_Items_to_PO)
        .should("be.visible")
        .click();
}

function setItemRowQuantities({ qtyRowText, otherRowText }) {
    cy.contains('tr', qtyRowText)
        .find(purchase_order_loc.po_qty)
        .clear()
        .type('5');

    cy.contains('tr', otherRowText)
        .find('input[type="number"][min="0"]')
        .eq(1)
        .clear()
        .type('1');

    cy.contains('tr', otherRowText)
        .find('input[type="number"][min="0"]')
        .eq(2)
        .clear()
        .type('100');

    cy.contains('tr', otherRowText)
        .find('input[type="number"][min="0"]')
        .eq(3)
        .clear()
        .type('5');
}

function setAllItemQuantities() {
    PO_ITEM_ROWS.forEach(setItemRowQuantities);
}

function buildPurchaseOrder() {
    createNewPurchaseOrder();
    selectRequestingStore();
    selectVendor();
    selectPurchasingStore();
    setRequiredOnDateToToday();
    addItemsToPO();
    setAllItemQuantities();
}

function capturePONumber() {
    cy.xpath(purchase_order_loc.po_number)
        .should("be.visible")
        .invoke("text")
        .then((poText) => {

            const copiedPoNumber = poText.trim();

            expect(copiedPoNumber).to.not.be.empty;

            cy.wrap(copiedPoNumber).as("PONumber");

            cy.log("Copied PO Number: " + copiedPoNumber);
        });
}

const purchase_order_flow = {

    purchase_order: function () {
        buildPurchaseOrder();

        cy.contains("button", "Commit").click();
        cy.wait(3000);

        capturePONumber();
    },

    other_charges: function () {
        buildPurchaseOrder();

        cy.contains("li", "Other Charges").click();
        cy.contains("button", "Commit").click();
        cy.wait(3000);
    },

    po_level_Discount: function () {
        buildPurchaseOrder();

        cy.contains("li", "Discount").click();
        cy.contains("span", "Select Type").click();
        cy.contains("span", "%").click();
        cy.get(purchase_order_loc.dis_amt).type('10');
        cy.contains("button", "Commit").click();
        cy.wait(1500);

        capturePONumber();
        cy.wait(1500);
    }

};

export default purchase_order_flow;
