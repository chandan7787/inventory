import purchase_request from "../../locators/02.Purchase_Request";

// Items added to the PR, in order. UOM units/quantities below map 1:1 to these rows.
const PR_ITEMS = [
    'DOLO 650.11 MG-KA11',
    'DOLO 650.1 MG-KA11',
    'DOLO 650.1 MG LESS-KA11'
];

const UOM_UNIT_SELECTIONS = [
    { dropdown: purchase_request.uomunit_11mg, uom: 'BOX' },
    { dropdown: purchase_request.uomunit_1mg, uom: 'EACH' },
    { dropdown: purchase_request.uomunit_1mgless, uom: 'STRIPS' }
];

const UOM_QUANTITIES = [
    { field: purchase_request.uomunit_11mg_qty, qty: '5' },
    { field: purchase_request.uomunit_1mg_qty, qty: '5' },
    { field: purchase_request.uomunit_1mgless_qty, qty: '5' }
];

function openProcurementModule() {
    cy.xpath(purchase_request.Setting_icon).should('be.visible').click();
    cy.xpath(purchase_request.Static).should('be.visible').click();
    cy.get(purchase_request.Close).should('be.visible').click();
    cy.get(purchase_request.Module_Search).should('be.visible').click();
    cy.get(purchase_request.Module_Name_type).type('procurement');
    cy.contains('div', 'Procurement').should('be.visible').click();
}

function openNewPurchaseRequest() {
    cy.contains('a', 'Create Purchase Request').should('be.visible').click();
    cy.contains('button', 'New PR').should('be.visible').click();
}

function selectStore(storeTriggerLocator, storeSearchText, storeOptionLocator) {
    cy.xpath(storeTriggerLocator).should('be.visible').click();
    cy.get(purchase_request.store_input).should('be.visible').type(storeSearchText);
    cy.xpath(storeOptionLocator).should('be.visible').click();
}

function selectPurchaseAndItemType() {
    cy.xpath(purchase_request.Purchase_Type).should('be.visible').click();
    cy.xpath(purchase_request.Central).should('be.visible').click();
    cy.xpath(purchase_request.Item_Type).should('be.visible').click();
    cy.xpath(purchase_request.Item).should('be.visible').click();
}

function setRequiredOnDateToToday() {
    cy.xpath('//input[@placeholder="DD/MM/YYYY" and @role="combobox"]').should('be.visible').click();
    cy.get('.p-datepicker-today span').first().click({ force: true });
}

function searchAndSelectItem(itemName) {
    cy.get(purchase_request.item_name).clear().type(itemName);
    cy.contains('button', 'Search').should('be.visible').click();
    cy.xpath(purchase_request.check_box).should('be.visible').click();
}

function addItemsToPR(itemNames) {
    cy.contains('button', 'Add Items').should('be.visible').click();
    itemNames.forEach(searchAndSelectItem);
    cy.contains('button', 'Add Selected Items to PR').should('be.visible').click();
}

function switchAllRowsToPurchaseUom(rowCount) {
    for (let i = 0; i < rowCount; i++) {
        cy.xpath(purchase_request.Inventory_uomtype).should('be.visible').click();
        cy.xpath(purchase_request.purchase_uom).should('be.visible').click();
    }
}

function setUomUnitsAndQuantities() {
    UOM_UNIT_SELECTIONS.forEach(({ dropdown, uom }) => {
        cy.xpath(dropdown).should('be.visible').click();
        cy.contains('li', uom).should('be.visible').click();
    });

    UOM_QUANTITIES.forEach(({ field, qty }) => {
        cy.xpath(field).clear().type(qty);
    });
}

function commitPurchaseRequest() {
    cy.contains('button', 'Commit PR').click();

    // Fail fast if the save produced an error toast instead of success
    cy.get('.p-toast-message-error').should('not.exist');

    cy.get('.p-toast-detail')
        .should('be.visible')
        .and('have.text', 'Purchase Request Added Successfully');
}

function capturePRNumber() {
    // Save the generated PR number so later flows (verification/approval) can look it up
    cy.xpath(purchase_request.PR_Number)
        .should('be.visible')
        .invoke('text')
        .then((prText) => {
            const copiedPRNumber = prText.trim();
            cy.writeFile('cypress/fixtures/pr_data.json', { prNumber: copiedPRNumber });
            cy.log('Copied PR Number: ' + copiedPRNumber);
        });
}

const purchase_request_flow = {
    purchase_request: function () {
        openProcurementModule();
        openNewPurchaseRequest();

        selectStore(purchase_request.Requesting_Store, 'Healthcare store', purchase_request.Healthcare_store);
        selectStore(purchase_request.Purchasing_Store, 'HealthPlus Pharmacy', purchase_request.HealthPlus_Pharmacy);
        selectPurchaseAndItemType();
        setRequiredOnDateToToday();

        addItemsToPR(PR_ITEMS);
        switchAllRowsToPurchaseUom(PR_ITEMS.length);
        setUomUnitsAndQuantities();

        commitPurchaseRequest();
        capturePRNumber();
    }
};

export default purchase_request_flow;
