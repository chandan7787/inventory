import stock_movement_loc from "../../locators/08.stock_movement"

const new_transfer_flow = {
    newtransfer: function () {

        cy.contains("a", "Stock Movement").click()
        cy.contains("a", "New Transfer").click()
        cy.contains("button", "New ").click()

        // =========================
        // FROM STOCK AREA
        // =========================

        cy.xpath(stock_movement_loc.From_StockArea).click()

        cy.get(stock_movement_loc.type_store)
            .type("Healthcare Store")

        cy.contains("li", "Healthcare store").click()


        // =========================
        // TO STOCK AREA
        // =========================

        cy.xpath(stock_movement_loc.To_StockArea).click()

        cy.get(stock_movement_loc.type_store)
            .type("healthplus pharmacy")

        cy.contains("li", "HealthPlus Pharmacy").click()


        // =========================
        // MODE OF TRANSPORT
        // =========================

        cy.xpath(stock_movement_loc.Mode_of_Transport).click()

        cy.contains("li", "BY PERSON").click()


        // =========================
        // FIRST ITEM
        // =========================

        cy.contains("button", "Add").click()

        cy.get(stock_movement_loc.item_search)
            .type("DOLO 650.11 MG-KA11")

        cy.contains("tr", "DOLO 650.11 MG-KA11").click()

        cy.xpath(stock_movement_loc.batch_no)
            .eq(0)
            .click()

        cy.contains("li", "batch-1").click()

        cy.get(stock_movement_loc.issue_qty)
            .eq(0)
            .type("5")


        // =========================
        // SECOND ITEM
        // =========================

        cy.contains("button", "Add").click()

        cy.get(stock_movement_loc.item_search)
        .eq(1)
            .type("DOLO 650.1 MG-KA11")

        cy.contains("tr", "DOLO 650.1 MG-KA11").click()

        cy.xpath(stock_movement_loc.second_batch_no)
            .click()

        cy.contains("li", "batch-1").click()

        cy.get(stock_movement_loc.issue_qty)
            .eq(1)
            .type("5")


        // =========================
        // THIRD ITEM
        // =========================

        cy.contains("button", "Add").click()

        cy.get(stock_movement_loc.item_search)
        .eq(2)
            .type("DOLO 650.1 MG LESS-KA11")

        cy.contains("tr", "DOLO 650.1 MG LESS-KA11").click()

        cy.get(stock_movement_loc.issue_qty)
            .eq(2)
            .type("5")


        // =========================
        // SAVE
        // =========================

        cy.contains("button", "Save").click()
        cy.wait(2000)

        cy.xpath("//div/p-table/div/div[2]/table/tbody/tr[1]/td[1]")
    .should("be.visible")
    .invoke("text")
    .then((newTransferText) => {

        const newTransferNumber = newTransferText.trim();

        expect(newTransferNumber).to.not.be.empty;

        cy.wrap(newTransferNumber).as("newTransferNumber");

        cy.log(`Copied New Transfer Number: ${newTransferNumber}`);
    });
    }
}

export default new_transfer_flow