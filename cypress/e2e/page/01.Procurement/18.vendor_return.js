import vendor_return_loc from "../../locators/07.vendor_return_loc"
import purchase_request from "../../locators/02.Purchase_Request"

const vendor_return_flow = {
    vendor_return: function () {

        cy.contains("a", "Vendor Return").click()
        cy.contains("button", " New Return ").click()

        // Source Location
        cy.xpath(vendor_return_loc.Source_Location).click()
        cy.get(purchase_request.store_input)
            .type("HealthPlus Pharmacy")

        cy.wait(1000)

        cy.xpath(purchase_request.HealthPlus_Pharmacy).click()

        // Reason
        cy.xpath(vendor_return_loc.Reason).click()
        cy.contains("li", "Damaged").click()

        // Vendor
        cy.wait(500)
        cy.xpath(vendor_return_loc.vendor).type("chandu")

        cy.wait(2000)

        cy.contains("li", "Chandu / CHA446").click()

        // Can't find GRN
        cy.get(vendor_return_loc.Cant_find_GRN).click()


        // =========================
        // FIRST ITEM
        // =========================

        cy.contains("button", "Add").click()

        cy.get(vendor_return_loc.item_name)
            .type("DOLO 650.11 MG-KA11")
            cy.contains("tr","DOLO 650.11 MG-KA11").click()
            cy.wait(500)

        cy.get(vendor_return_loc.batch_no)
            .eq(0)
            .click()

        cy.contains("li", "BATCH-1").click()

        cy.xpath(vendor_return_loc.Return_qty)
            .eq(0)
            .type("5")

        cy.wait(1000)


        // =========================
        // SECOND ITEM
        // =========================

        cy.contains("button", "Add").click()

        cy.get(vendor_return_loc.item_name)
            .type("DOLO 650.1 MG-KA11")
            cy.contains("tr","DOLO 650.1 MG-KA11").click()

        cy.get(vendor_return_loc.batch_no)
            .eq(0)
            .click()

        cy.contains("li", "BATCH-1").click()

        cy.xpath(vendor_return_loc.Return_qty)
            .eq(1)
            .type("5")
            

        cy.wait(1000)


        // =========================
        // THIRD ITEM
        // =========================

        cy.contains("button", "Add").click()

        cy.get(vendor_return_loc.item_name)
            .type("DOLO 650.1 MG LESS-KA11")
            cy.contains("tr","DOLO 650.1 MG LESS-KA11").click()

        //cy.get(vendor_return_loc.batch_no)
          //  .eq(0)
           // .click()

        //cy.contains("li", "BATCH-1").click()

        cy.xpath(vendor_return_loc.Return_qty)
            .eq(2)
            .type("5")

        cy.wait(1000)


        // Save
        cy.contains("button", "Save").click()
    },
    vendor_return_approve:function()
    {
        
    }
}

export default vendor_return_flow