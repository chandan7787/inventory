import stock_movement_loc from "../../locators/08.stock_movement";

// Items added to the free stock entry, in order.
// Items 1 & 2 get a typed batch name; item 3 has no batch name but needs cost price + MRP instead.
const FREE_STOCK_ITEMS = [
    { name: 'DOLO 650.11 MG-KA11', batchName: 'batch-1' },
    { name: 'DOLO 650.1 MG-KA11', batchName: 'batch-1' },
    { name: 'DOLO 650.1 MG LESS-KA11', batchName: null, costPrice: '100', mrp: '500' }
];

function openNewFreeStock() {
    cy.contains("a", "Stock Movement").click();
    cy.contains("a", "Free Stock").click();
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

function addFreeStockItem({ name, batchName, costPrice, mrp }, index) {
    cy.contains("button", "Add").click();

    cy.get(stock_movement_loc.type_itemname).eq(index).type(name);
    cy.contains("tr", name).click();

    if (batchName) {
        cy.xpath(stock_movement_loc.addstock_batchname).eq(index).type(batchName);
    }

    cy.xpath(stock_movement_loc.batch_qty).eq(index).clear().type("5");

    if (costPrice) {
        cy.xpath(stock_movement_loc.cost_price).eq(index).clear().type(costPrice);
        cy.xpath(stock_movement_loc.lessitem_mrp).type(mrp);
    }
}

function saveAndVerifySuccess() {
    cy.xpath('//button[.="Save"]').should("be.visible").click();

    cy.contains("Item added successfully", { timeout: 10000 }).should("be.visible");
}

const Free_stock_flow = {
    free_stock: function () {
        openNewFreeStock();
        selectSourceStockArea();
        selectTransportationType();

        FREE_STOCK_ITEMS.forEach(addFreeStockItem);

        saveAndVerifySuccess();
    }
}
export default Free_stock_flow
