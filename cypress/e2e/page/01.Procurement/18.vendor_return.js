import vendor_return_loc from "../../locators/07.vendor_return_loc"
import purchase_request from "../../locators/02.Purchase_Request"

// Items added to the return, in order
const VENDOR_RETURN_ITEMS = [
    { itemName: 'DOLO 650.11 MG-KA11', selectBatch: true, returnQtyIndex: 0 },
    { itemName: 'DOLO 650.1 MG-KA11', selectBatch: true, returnQtyIndex: 1 },
    { itemName: 'DOLO 650.1 MG LESS-KA11', selectBatch: false, returnQtyIndex: 2 }
];

function openNewVendorReturn() {
    cy.contains("a", "Vendor Return").click()
    cy.contains("button", " New Return ").click()
}

function selectSourceLocation() {
    cy.xpath(vendor_return_loc.Source_Location).click()
    cy.get(purchase_request.store_input)
        .type("HealthPlus Pharmacy")

    cy.xpath(purchase_request.HealthPlus_Pharmacy).should("be.visible").click()
}

function selectReason() {
    cy.xpath(vendor_return_loc.Reason).click()
    cy.contains("li", "Damaged").click()
}

function selectVendor() {
    cy.xpath(vendor_return_loc.vendor).should("be.visible").type("chandu")
    cy.contains("li", "Chandu / CHA446").should("be.visible").click()
}

function markCannotFindGRN() {
    cy.get(vendor_return_loc.Cant_find_GRN).click()
}

function addVendorReturnItem({ itemName, selectBatch, returnQtyIndex }) {
    cy.contains("button", "Add").should("be.visible").click()

    cy.get(vendor_return_loc.item_name)
        .type(itemName)
    cy.contains("tr", itemName).click()

    if (selectBatch) {
        cy.get(vendor_return_loc.batch_no)
            .eq(0)
            .should("be.visible")
            .click()

        cy.contains("li", "BATCH-1").click()
    }

    cy.xpath(vendor_return_loc.Return_qty)
        .eq(returnQtyIndex)
        .type("5")
}

const vendor_return_flow = {
    vendor_return: function () {
        openNewVendorReturn()
        selectSourceLocation()
        selectReason()
        selectVendor()
        markCannotFindGRN()

        VENDOR_RETURN_ITEMS.forEach(addVendorReturnItem)

        cy.contains("button", "Save").should("be.visible").click()
    },
    vendor_return_approve:function()
    {

    }
}

export default vendor_return_flow
