import stock_movement_loc from "../../locators/08.stock_movement";

// Items added to the consumption stock entry, in order.
// Items 1 & 2 pick a batch from a dropdown; item 3 has no batch dropdown step.
const CONSUMPTION_ITEMS = [
    { name: 'DOLO 650.11 MG-KA11', batchDropdownIndex: 2 },
    { name: 'DOLO 650.1 MG-KA11', batchDropdownIndex: 3 },
    { name: 'DOLO 650.1 MG LESS-KA11', batchDropdownIndex: null }
];

function openNewConsumptionStock() {
    cy.contains("a", "Stock Movement").click();
    cy.contains("a", "Consumption Stock").click();
    cy.contains("button", "New ").click();
}

function selectSourceStockArea() {
    cy.xpath(stock_movement_loc.From_StockArea).click();
    cy.get(stock_movement_loc.type_store).type("Healthcare Store");
    cy.contains("li", "Healthcare store").click();
}

function selectTransportationType() {
    cy.xpath(stock_movement_loc.Transportation_Type).click();
    cy.contains("li", "BY PERSON").click();
}

function addConsumptionItem({ name, batchDropdownIndex }, index) {
    cy.contains("button", "Add").click();

    cy.get(stock_movement_loc.type_itemname).eq(index).type(name);
    cy.contains("tr", name).click();

    if (batchDropdownIndex !== null) {
        cy.xpath(stock_movement_loc.consu_batchno).eq(batchDropdownIndex).click();
        cy.contains("li", "batch-1").click();
    }

    cy.xpath(stock_movement_loc.batch_qty).eq(index).clear().type("5");
}

function saveAndVerifySuccess() {
    cy.xpath('//button[.="Save"]').should("be.visible").click();

    cy.get(".p-toast-message-success")
        .should("be.visible")
        .within(() => {
            cy.get(".p-toast-summary").should("have.text", "Success Message");
            cy.get(".p-toast-detail").should("have.text", "Item Added Successfully");
        });
}

const Consumption_Stock_Flow = {
    Consumption_stock: function () {
        openNewConsumptionStock();
        selectSourceStockArea();
        selectTransportationType();

        CONSUMPTION_ITEMS.forEach(addConsumptionItem);

        saveAndVerifySuccess();
    }
}
export default Consumption_Stock_Flow;
