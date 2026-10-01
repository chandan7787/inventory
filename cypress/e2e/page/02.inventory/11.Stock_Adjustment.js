import stock_movement_loc from "../../locators/08.stock_movement";

let copiedStockAdjustmentNo = "";

function openNewStockAdjustmentRequest() {
    cy.contains("a", "Stock Adjustment").click();
    cy.contains("a", "Stock Adjustment Request").click();
    cy.contains("button", "Add New").click();
}

function selectStockAreaLocation() {
    cy.xpath(stock_movement_loc.From_StockArea).click();
    cy.get(stock_movement_loc.type_store).type("Healthcare Store");
    cy.contains("li", "Healthcare store").click();
    cy.contains("button", "Add").click();
}

// Items 1 & 2 share this shape: pick the item, pick an existing batch, set Adj.qty to "Discard".
// addIconEq is undefined for the first item (no index needed yet) and the row index for later ones.
function addStandardAdjustmentItem(name, itemIndex, batchEq, addIconEq) {
    cy.get(stock_movement_loc.type_itemname).eq(itemIndex).type(name);
    cy.contains("tr", name).click();

    cy.get(stock_movement_loc.Stock_batch).eq(batchEq).click();
    cy.contains("li", "batch-1").click();

    // Adj.qty
    cy.contains("div", "Select").click();
    cy.contains("li", "Discard").click();

    cy.get(stock_movement_loc.issue_qty).eq(itemIndex).clear().type("5");

    if (addIconEq === undefined) {
        cy.get(stock_movement_loc.add_iconbutton).click();
    } else {
        cy.get(stock_movement_loc.add_iconbutton).eq(addIconEq).click();
    }
}

// 3rd item (batch less): no batch-select step, and Adj.qty is set to "Surplus" via a different dropdown
function addBatchlessSurplusItem() {
    cy.get(stock_movement_loc.type_itemname).eq(2).type("DOLO 650.1 MG LESS-KA11");
    cy.contains("tr", "DOLO 650.1 MG LESS-KA11").click();

    // Adj.qty
    cy.xpath("//table/thead/tr[4]/th[10]/p-dropdown/div/div").click();
    cy.contains("li", "Surplus").click();

    cy.get(stock_movement_loc.issue_qty).eq(2).clear().type("5");
}

function saveAndCaptureAdjustmentNumber() {
    cy.xpath('//button[.="Save"]').should("be.visible").click();

    // Wait for response/toast to settle and capture exact text
    cy.wait(1500);

    cy.xpath("//div/p-table/div/div[2]/table/tbody/tr[1]/td[1]")
        .should("be.visible")
        .invoke("text")
        .should("not.be.empty") // Ensures text is loaded before proceeding
        .then((text) => {
            // Remove linebreaks, extra spaces
            copiedStockAdjustmentNo = text.replace(/\s+/g, " ").trim();
            cy.log("Captured Exact Stock Adjustment No: '" + copiedStockAdjustmentNo + "'");
        });
}

const Stock_Adjustment_flow = {
    Stock_Adjustment: function () {
        openNewStockAdjustmentRequest();
        selectStockAreaLocation();

        addStandardAdjustmentItem("DOLO 650.11 MG-KA11", 0, 2, undefined);
        addStandardAdjustmentItem("DOLO 650.1 MG-KA11", 1, 5, 1);
        addBatchlessSurplusItem();

        saveAndCaptureAdjustmentNumber();
    },

    Stock_Adjustment_Approval: function () {
        cy.contains("a", "Stock Adjustment Approval").click();

        cy.xpath(stock_movement_loc.Search_filter).should("be.visible").click();

        cy.then(() => {
            cy.log("Pasting Copied Stock Adjustment Number: '" + copiedStockAdjustmentNo + "'");

            cy.get(stock_movement_loc.stock_adjnotype)
                .should("be.visible")
                .clear()
                .type(copiedStockAdjustmentNo, { delay: 100 }) // Typing with delay ensures Angular registers keystrokes
                .blur(); // Blurring triggers grid filter event

            cy.contains("button", "Search").should("be.visible").click();
        });

        cy.xpath("//p-table/div/div/table/tbody/tr[1]/td[8]/button").click();
        cy.contains("button", "Approve").click();
    },
};

export default Stock_Adjustment_flow;
