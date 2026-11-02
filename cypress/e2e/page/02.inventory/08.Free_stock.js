import stock_movement_loc from "../../locators/08.stock_movement";

const Free_stock_flow=
{
    free_stock:function()
    {
         cy.contains("a", "Stock Movement").click()
         cy.contains("a","Free Stock").click();
         cy. contains("button","New ").click()

         // Source Stock Area
                cy.xpath(stock_movement_loc.From_StockArea).click();
        
                cy.get(stock_movement_loc.type_store)
                    .type("Healthcare Store");
        
                cy.contains("li", "Healthcare store").click();
        
                // Transportation Type
                cy.xpath(stock_movement_loc.Transportation_Type).click();
                cy.contains("li", "BY PERSON").click()

                // Item 1
        // =========================
        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(0)
            .type("DOLO 650.11 MG-KA11");
            cy.contains("tr", "DOLO 650.11 MG-KA11").click();

            cy.xpath(stock_movement_loc.addstock_batchname)
            .eq(0)
            .type("batch-1");

        cy.xpath(stock_movement_loc.batch_qty)
            .eq(0)
            .clear()
            .type("5");

        // =========================
        // Item 2
        // =========================
        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(1)
            .type("DOLO 650.1 MG-KA11");

        cy.contains("tr", "DOLO 650.1 MG-KA11").click();

        cy.xpath(stock_movement_loc.addstock_batchname)
            .eq(1)
            .type("batch-1");

        cy.xpath(stock_movement_loc.batch_qty)
            .eq(1)
            .clear()
            .type("5");


            // =========================
        // Item 3
        // =========================
        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(2)
            .type("DOLO 650.1 MG LESS-KA11");

        cy.contains("tr", "DOLO 650.1 MG LESS-KA11").click();

        cy.xpath(stock_movement_loc.batch_qty)
            .eq(2)
            .clear()
            .type("5");

        cy.xpath(stock_movement_loc.cost_price)
            .eq(2)
            .clear()
            .type("100");

        // MRP
        cy.xpath(stock_movement_loc.lessitem_mrp)
            .type("500");

        // Save
        cy.xpath('//button[.="Save"]')
            .should("be.visible")
            .click();

       cy.contains("Item added successfully", { timeout: 10000 })
    .should("be.visible");

    }
}
export default Free_stock_flow