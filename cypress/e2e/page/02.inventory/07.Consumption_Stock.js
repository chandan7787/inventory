import stock_movement_loc from "../../locators/08.stock_movement";

const Consumption_Stock_Flow=
{
    Consumption_stock:function()
    {
        cy.contains("a", "Stock Movement").click()
        cy.contains("a","Consumption Stock").click()
        cy.contains("button","New ").click()

        // Source Stock Area
                cy.xpath(stock_movement_loc.From_StockArea).click();
        
                cy.get(stock_movement_loc.type_store)
                    .type("Healthcare Store");
        
                cy.contains("li", "Healthcare store").click();
        
                // Transportation Type
                cy.xpath(stock_movement_loc.Transportation_Type).click();
                cy.contains("li", "BY PERSON").click();

                // =========================
        // Item 1
        // =========================
        cy.contains("button", "Add").click();

        cy.get(stock_movement_loc.type_itemname)
            .eq(0)
            .type("DOLO 650.11 MG-KA11");

        cy.contains("tr", "DOLO 650.11 MG-KA11").click();

        cy.xpath(stock_movement_loc.consu_batchno)
            .eq(2)
            .click()
        cy.contains("li","batch-1")    

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

        cy.xpath(stock_movement_loc.consu_batchno)
            .eq(3)
            .click()
            cy.contains("li","batch-1")

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

            // Save
        cy.xpath('//button[.="Save"]')
            .should("be.visible")
            .click();
          // 1. Trigger action
//cy.contains("button", "Save").should("be.visible").click();

// 2. Verify green success popup container
cy.get(".p-toast-message-success")
  .should("be.visible")
  .within(() => {
    // Check Title
    cy.get(".p-toast-summary").should("have.text", "Success Message");
    // Check Message Text
    cy.get(".p-toast-detail").should("have.text", "Item Added Successfully");
  });

    }
}
export default Consumption_Stock_Flow;