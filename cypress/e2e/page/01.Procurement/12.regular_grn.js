import grn_loc from "../../locators/05.grn_loc";
import purchase_order_loc from "../../locators/03.purchase_order_loc";
import purchase_request from "../../locators/02.Purchase_Request";
import { faker } from "@faker-js/faker";

const invoiceNo =
  faker.number.int({ min: 100, max: 999 }) +
  faker.string.alpha({ length: 3, casing: "upper" });

const dcNo =
  faker.number.int({ min: 100, max: 999 }) +
  faker.string.alpha({ length: 3, casing: "upper" });
const regular_grn_flow = {
  regular_grn: function () {
    cy.xpath("//span[contains(@class,'layout-menuitem-text') and normalize-space()='GRN']").click({ force: true })
      .should("be.visible")
      .click();
    cy.wait(3000);
    cy.contains("button", "New GRN").click();
    cy.get(grn_loc.invoice).type(invoiceNo);
    cy.get(grn_loc.DC).type(dcNo);

    //Payment On
    cy.xpath("//div[2]/div[3]/div/p-calendar/span/input").click();
    cy.get(".p-datepicker-today span").first().click({ force: true });

    cy.wait(3000);

    //Mode_Of_Transport
    cy.xpath(grn_loc.Mode_Of_Transport).type("by person");
    cy.contains("li", "BY PERSON").click();
    cy.contains("button", "Search PO").click();

    // Open Search Filter

    // Search using captured PO Number
    cy.get("@PONumber").then((poNumber) => {
      expect(poNumber).to.not.be.empty;

      cy.log("Searching PO Number: " + poNumber);

      cy.get(purchase_order_loc.past_ponumber)
        .should("be.visible")
        .clear()
        .type(poNumber);
            cy.wait(2000)
    });

    // Search
    //cy.contains("button", "Search").should("be.visible").click();
   cy.xpath("//button[.='Search']").click();
       cy.wait(2000)

    cy.xpath(grn_loc.Found_Purchase_Order).should("be.visible").click();

    cy.xpath(grn_loc.main_check_box).should("be.visible").click();

    cy.contains("button", "Add Selected Items").should("be.visible").click();

    cy.contains("tr"," DOLO 650.1 MG LESS-KA11 ")
    .find('[inputmode="decimal"]')
    .eq(0)
    .clear()
    .type('500');

    //batch enter
    cy.contains("tr"," DOLO 650.1 MG-KA11 ")
    .find(grn_loc.batch).type('BATCH-1')

     //batch enter
    cy.contains("tr"," DOLO 650.11 MG-KA11 ")
    .find(grn_loc.batch).type('BATCH-1')



    cy.contains("button","Save & Commit").click();

    cy.xpath('//div/div[2]/p-table/div/div/table/tbody/tr[1]/td[1]')
        .should("be.visible")
        .invoke("text")
        .then((grnText) => {
    
            const copiedgrnNumber = grnText.trim();
    
            expect(copiedgrnNumber).to.not.be.empty;
    
            cy.wrap(copiedgrnNumber).as("grnNumber");
    
            cy.log("Copied grn Number: " + copiedgrnNumber);
        });
    


  },
};
export default regular_grn_flow;
