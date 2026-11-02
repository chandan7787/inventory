import main_login from "../../locators/01.login_locators";
import purchase_request from "../../locators/02.Purchase_Request";
import department_indent from "../../locators/09.indent_module";

const purchase_request_flow = {
    purchase_request: function () {
        cy.wait(2000);
        cy.xpath(purchase_request.Setting_icon).click();
        cy.wait(2000);
        cy.xpath(purchase_request.Static).click();
        cy.wait(2000);
        cy.get(purchase_request.Close).click();
        cy.get(purchase_request.Module_Search).click();
        cy.get(purchase_request.Module_Name_type).type('procurement');
        cy.contains('div', 'Procurement').click();
        cy.wait(1000);
        cy.contains("a", "Create Purchase Request").click();
        cy.wait(2000);
        cy.contains("button", "New PR").click();
        cy.wait(2000);
        cy.xpath(purchase_request.Requesting_Store).click();
        cy.wait(1000);
        cy.get(purchase_request.store_input).type('Healthcare store');
        cy.wait(1000);
        cy.xpath(purchase_request.Healthcare_store).click();
        cy.xpath(purchase_request.Purchasing_Store).click();
        cy.wait(1000);
        cy.get(purchase_request.store_input).type('HealthPlus Pharmacy');
        cy.wait(1000);
        cy.xpath(purchase_request.HealthPlus_Pharmacy).click();
        cy.xpath(purchase_request.Purchase_Type).click();
        cy.xpath(purchase_request.Central).click();
        cy.xpath(purchase_request.Item_Type).click();
        cy.xpath(purchase_request.Item).click();

        cy.xpath('//input[@placeholder="DD/MM/YYYY" and @role="combobox"]').click();
        cy.get('.p-datepicker-today span').first().click({ force: true });

        cy.contains("button", "Add Items").click();
        cy.get(purchase_request.item_name).type('DOLO 650.11 MG-KA11');
        cy.contains("button", "Search").click();
        cy.xpath(purchase_request.check_box).click();

        cy.get(purchase_request.item_name).clear().type('DOLO 650.1 MG-KA11');
        cy.contains("button", "Search").click();
        cy.xpath(purchase_request.check_box).click();

        cy.get(purchase_request.item_name).clear().type('DOLO 650.1 MG LESS-KA11');
        cy.contains("button", "Search").click();
        cy.xpath(purchase_request.check_box).click();
        cy.contains("button", "Add Selected Items to PR").click();

        cy.xpath(purchase_request.Inventory_uomtype).click();
        cy.xpath(purchase_request.purchase_uom).click();

        cy.xpath(purchase_request.Inventory_uomtype).click();
        cy.xpath(purchase_request.purchase_uom).click();

        cy.xpath(purchase_request.Inventory_uomtype).click();
        cy.xpath(purchase_request.purchase_uom).click();

        cy.xpath(purchase_request.uomunit_11mg).click();
        cy.contains("li", "BOX").click();

        cy.xpath(purchase_request.uomunit_1mg).click();
        cy.contains("li", "EACH").click();

        cy.xpath(purchase_request.uomunit_1mgless).click();
        cy.contains("li", "STRIPS").click();

        cy.xpath(purchase_request.uomunit_11mg_qty).clear().type('5');
        cy.xpath(purchase_request.uomunit_1mg_qty).clear().type('5');
        cy.xpath(purchase_request.uomunit_1mgless_qty).clear().type('5');

        cy.contains("button", "Commit PR").click();

        // 1. Click Commit PR button
//cy.contains("button", "Commit PR").should("be.visible").click();

// 2. Fail if an error toast pops up
cy.get(".p-toast-message-error").should("not.exist");

// 3. Verify exact success text
cy.get(".p-toast-detail")
  .should("be.visible")
  .and("have.text", "Purchase Request Added Successfully");

        // Copy exact text from PR Number element and save to file
        cy.xpath(purchase_request.PR_Number)
            .should('be.visible')
            .invoke('text')
            .then((prText) => {
                const copiedPRNumber = prText.trim();
                cy.writeFile('cypress/fixtures/pr_data.json', { prNumber: copiedPRNumber });
                cy.log("Copied PR Number: " + copiedPRNumber);
            });

        cy.wait(3000);
    },
    AddItem_FromIndent:function()
    {
        cy.wait(2000);
        cy.xpath(purchase_request.Setting_icon).click();
        cy.wait(2000);
        cy.xpath(purchase_request.Static).click();
        cy.wait(2000);
        cy.get(purchase_request.Close).click();
        cy.get(purchase_request.Module_Search).click();
        cy.get(purchase_request.Module_Name_type).type('procurement');
        cy.contains('div', 'Procurement').click();
        cy.wait(1000);
        cy.contains("a", "Create Purchase Request").click();
        cy.wait(2000);
        cy.contains("button", "New PR").click();
        cy.wait(2000);
        cy.xpath(purchase_request.Requesting_Store).click();
        cy.wait(1000);
        cy.get(purchase_request.store_input).type('Healthcare store');
        cy.wait(1000);
        cy.xpath(purchase_request.Healthcare_store).click();
        cy.xpath(purchase_request.Purchasing_Store).click();
        cy.wait(1000);
        cy.get(purchase_request.store_input).type('HealthPlus Pharmacy');
        cy.wait(1000);
        cy.xpath(purchase_request.HealthPlus_Pharmacy).click();
        cy.xpath(purchase_request.Purchase_Type).click();
        cy.xpath(purchase_request.Central).click();
        cy.xpath(purchase_request.Item_Type).click();
        cy.xpath(purchase_request.Item).click();

        cy.xpath('//input[@placeholder="DD/MM/YYYY" and @role="combobox"]').click();
        cy.get('.p-datepicker-today span').first().click({ force: true });

        cy.contains("button", "Add Items").click();
        cy.contains("a","From Indent").click()

        cy.fixture("indent_data.json").then((data) => {

  cy.log("Indent Number: " + data.indentNumber);

  // Enter Indent Number
  cy.xpath('//input[@placeholder="Search Indent No"]')
    .should("be.visible")
    .clear()
    .type(data.indentNumber);

  // Click the matching dropdown option
  cy.contains("li", data.indentNumber)
    .should("be.visible")
    .click();

  // Search the selected Indent
  //cy.contains("button", "Search").click();
  cy.xpath("(//button[.='Search'])[2]")
  .click({force: true});

  cy.xpath(department_indent.Expand_Column).click()
  cy.xpath(department_indent.MainCheckBox).should("be.visible").click()
  cy.xpath(department_indent.SaveButton).should("be.visible").click()
//   cy.xpath(department_indent.Expand_Column).click();
//   cy.xpath(department_indent.MainCheckBox).should("be.visible").click()

 cy.xpath(purchase_request.Inventory_uomtype).click();
        cy.xpath(purchase_request.purchase_uom).click();

        cy.xpath(purchase_request.Inventory_uomtype).click();
        cy.xpath(purchase_request.purchase_uom).click();

        cy.xpath(purchase_request.Inventory_uomtype).click();
        cy.xpath(purchase_request.purchase_uom).click();

        cy.xpath(purchase_request.uomunit_11mg).click();
        cy.contains("li", "BOX").click();

        cy.xpath(purchase_request.uomunit_1mg).click();
        cy.contains("li", "EACH").click();

        cy.xpath(purchase_request.uomunit_1mgless).click();
        cy.contains("li", "STRIPS").click();

        cy.xpath(purchase_request.uomunit_11mg_qty).clear().type('5');
        cy.xpath(purchase_request.uomunit_1mg_qty).clear().type('5');
        cy.xpath(purchase_request.uomunit_1mgless_qty).clear().type('5');

        cy.contains("button", "Commit PR").click();

        
cy.contains("button", "Commit PR").click();

// Validate PR creation success message
cy.get(".p-toast-message-success", { timeout: 10000 })
  .should("be.visible");

cy.get(".p-toast-detail")
  .should("be.visible")
  .and("have.text", "Purchase Request Added Successfully");

        // Copy exact text from PR Number element and save to file
        cy.xpath(purchase_request.PR_Number)
            .should('be.visible')
            .invoke('text')
            .then((prText) => {
                const copiedPRNumber = prText.trim();
                cy.writeFile('cypress/fixtures/pr_data.json', { prNumber: copiedPRNumber });
                cy.log("Copied PR Number: " + copiedPRNumber);
            });

        cy.wait(3000);






});
    }
};

export default purchase_request_flow;