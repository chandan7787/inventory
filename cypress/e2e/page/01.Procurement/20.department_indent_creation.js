//import { cy } from "@faker-js/faker";
import department_indent from "../../locators/09.indent_module";

const departmentindent_itemcreation = {
  department_indentcretaion: function () 
  {
    cy.wait(2000);
    //indent store
    cy.xpath("(//a[.='Indent'])[2]").click({ force: true });
    //cy.contains("a", "Indent").eq(1).click();
    cy.contains("button", "Add New").click();
    cy.xpath(department_indent.Indent_Store).click();
    cy.get(department_indent.store_input).type("Healthcare store");
    cy.xpath(department_indent.Healthcare_store).click();

    //Supply Store
    cy.xpath(department_indent.Supply_Store).type("HealthPlus Pharmacy");
    cy.xpath(department_indent.HealthPlus_Pharmacy).click();

    cy.get(department_indent.priority).eq(2).click();

    cy.get(department_indent.store_input).type("Regular");
    cy.contains("li", "Regular").click();

    //DOLO 650.11 MG-KA11
    cy.contains("button", "Add Items").click();
    cy.wait(1000);
    cy.get(department_indent.itemNameSearch).type("DOLO 650.11 MG-KA11");
    cy.contains("button", "Search").click();
    cy.wait(1000);
    cy.get(department_indent.ItemCheckBox).eq(1).click();

    //DOLO 650.1 MG-KA11
    cy.get(department_indent.itemNameSearch).clear().type("DOLO 650.1 MG-KA11");
    cy.contains("button", "Search").click();
    cy.wait(1000);
    cy.get(department_indent.ItemCheckBox).eq(1).click();

    //DOLO 650.1 MG LESS-KA11
    cy.get(department_indent.itemNameSearch)
      .clear()
      .type("DOLO 650.1 MG LESS-KA11");
    cy.contains("button", "Search").click();
    cy.wait(1000);
    cy.get(department_indent.ItemCheckBox).eq(1).click();
    cy.xpath("//button[.='Submit']").click();

    cy.contains("tr", " DOLO 650.11 MG-KA11 ").within(() => {
      cy.get(department_indent.indent_qty).clear().type("10");
    });

    cy.contains("tr", " DOLO 650.1 MG-KA11 ").within(() => {
      cy.get(department_indent.indent_qty).clear().type("10");
    });

    cy.contains("tr", " DOLO 650.1 MG LESS-KA11 ").within(() => {
      cy.get(department_indent.indent_qty).clear().type("10");
    });

    cy.contains("button", "Save & Submit").click();

    cy.contains("Item Added Successfully").should("be.visible");
    cy.wait(15000);

    //cy.xpath(department_indent.IndentTransaction)
    cy.xpath(
      "/html/body/app-root/app-layout/div/div/div/lib-indents/app-department-request/div/p-table/div/div[2]/table/tbody/tr[1]/td[1]",
    )
      .should("be.visible")
      .invoke("text")
      .then((indentText) => {
        const copiedindentNumber = indentText.trim();

        cy.writeFile("cypress/fixtures/indent_data.json", {
          indentNumber: copiedindentNumber,
        });

        cy.log("Copied Indent Number: " + copiedindentNumber);
      });
  },
};
export default departmentindent_itemcreation;
