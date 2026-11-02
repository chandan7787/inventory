import purchase_request from "../../locators/02.Purchase_Request";
import purchase_order_loc from "../../locators/03.purchase_order_loc";
//import purchase_request from "../../locators/02.Purchase_Request";
import grn_loc from "../../locators/05.grn_loc";
import { faker } from "@faker-js/faker";

const invoiceNo =
  faker.number.int({ min: 100, max: 999 }) +
  faker.string.alpha({ length: 3, casing: "upper" });

const dcNo =
  faker.number.int({ min: 100, max: 999 }) +
  faker.string.alpha({ length: 3, casing: "upper" });

const grnleveldis_othercharges_flow=
{
    Emergency_grn:function()
    {
        cy.contains("a","Emergency GRN").click()
        cy.contains("button","New GRN").click()
        cy.get(grn_loc.invoice).type(invoiceNo);
        cy.get(grn_loc.DC).type(dcNo);

        cy.xpath(purchase_order_loc.vendor)
            .should("be.visible")
            .type("Chandu");

        cy.contains("li", "Chandu / CHA446")
            .should("be.visible")
            .click()

             cy.xpath(grn_loc.Destination_Location)
            .should("be.visible")
            .click();

            cy.get(purchase_request.store_input)
            .should("be.visible")
            .type("Healthcare store");

        cy.xpath(purchase_request.Healthcare_store)
            .should("be.visible")
            .click();

            cy.xpath(grn_loc.Emr_Mode_Of_Transport).click()
            cy.contains("li","By Person").click()

            cy.contains("button","Save").click()

            cy.contains("button","Add Items").click()


            // Add first item
        cy.get(grn_loc.item_name)
            .should("be.visible")
            .type("DOLO 650.11 MG-KA11");

       // cy.xpath(purchase_order_loc.po_search_button)
         //.click();
         cy.xpath(grn_loc.search_button).click()
        cy.wait(1000)
        cy.xpath(grn_loc.item_check_box)
            .click();

        // Add second item
        cy.get(grn_loc.item_name)
            .clear()
            .type("DOLO 650.1 MG-KA11");

        //cy.xpath(purchase_order_loc.po_search_button)
            //.click();
            cy.xpath(grn_loc.search_button).click()
         cy.wait(1000)
        cy.xpath(grn_loc.item_check_box)
            .click();


        // Add third item
        cy.get(grn_loc.item_name)
            .clear()
            .type("DOLO 650.1 MG LESS-KA11");

        //cy.xpath(purchase_order_loc.po_search_button)
           // .click();
           cy.xpath(grn_loc.search_button).click()
        cy.wait(1000)
        cy.xpath(grn_loc.item_check_box)
            .click();
            cy.wait(1000)

            cy.contains("button","Add Selected Items to Emergency GRN").click()

            cy.contains("tr"," DOLO 650.1 MG LESS-KA11 ")
    .find('[inputmode="decimal"]')
    .eq(0)
    .clear()
    .type('500');
//----------------------------

            //batch enter
    cy.contains("tr"," DOLO 650.1 MG-KA11 ")
    .find(grn_loc.batch).type('BATCH-2')

     //batch enter
    cy.contains("tr"," DOLO 650.11 MG-KA11 ")
    .find(grn_loc.batch).type('BATCH-2')

    //Received qty
    cy.contains("tr"," DOLO 650.1 MG LESS-KA11 ")
    .find(grn_loc.Received)
    .clear()
    .type('5')
    cy.wait(2000)

    //free qty
    // 
    cy.contains("tr", "DOLO 650.1 MG LESS-KA11")
  .within(() => {
    cy.get(grn_loc.free_qty)
      .eq(2)
      .clear()
      .type("2");
  });

    //dis
    cy.contains("tr", "DOLO 650.1 MG LESS-KA11")
  .find(grn_loc.dis)
  .should("be.visible")
  .clear()
  .type("5");

    //cost price
    cy.contains("tr", "DOLO 650.1 MG LESS-KA11")
  .within(() => {
    cy.get(grn_loc.cost_price)
      .eq(1)
      .clear()
      .type("100");
  });
//------------

    //recived qty
    cy.contains("tr"," DOLO 650.1 MG-KA11 ")
    .find(grn_loc.Received)
    .clear()
    .type('5')
//free qty
    cy.contains("tr", " DOLO 650.1 MG-KA11 ")
  .within(() => {
    cy.get(grn_loc.free_qty)
      .eq(2)
      .clear()
      .type("2");
  });

        //dis
    cy.contains("tr", "DOLO 650.1 MG-KA11")
  .find(grn_loc.dis)
  .should("be.visible")
  .clear()
  .type("5");


    //cost price
    cy.contains("tr", " DOLO 650.1 MG-KA11 ")
  .within(() => {
    cy.get(grn_loc.cost_price)
      .eq(1)
      .clear()
      .type("100");
  });




    cy.contains("tr"," DOLO 650.11 MG-KA11 ")
    .find(grn_loc.Received)
    .clear()
    .type('5')

    cy.contains("tr", " DOLO 650.11 MG-KA11 ")
  .within(() => {
    cy.get(grn_loc.free_qty)
      .eq(2)
      .clear()
      .type("2");
  });


      //dis
    cy.contains("tr", "DOLO 650.11 MG-KA11")
  .find(grn_loc.dis)
  .should("be.visible")
  .clear()
  .type("5");

    //cost price
    cy.contains("tr", " DOLO 650.11 MG-KA11 ")
  .within(() => {
    cy.get(grn_loc.cost_price)
      .eq(1)
      .clear()
      .type("100");
  });
  //cy.contains("button","Save & Commit").click();

  

    },
    Other_charges:function()
    {
        cy.contains("button","Add Charges").click()
        cy.contains("td","Select").click()
        cy.xpath(grn_loc.Other_Charges).click();
        cy.get(grn_loc.othercharge_amt).type("100")

    },
    Grn_level_dis:function()
    {
        cy.xpath(grn_loc.Grn_level_dis).type("12")
        //cy.xpath(grn_loc.dis_dropdown).click();
        //cy.contains("li","Flat").click()
        //cy.xpath(grn_loc.Grn_level_dis).type("12")

        cy.contains("button","Save & Commit").click()

        cy.xpath('//div[2]/div/p-table/div/div/table/tbody/tr[1]/td[1]')
        .should("be.visible")
        .invoke("text")
        .then((grnText) => {
    
            const copiedgrnNumber = grnText.trim();
    
            expect(copiedgrnNumber).to.not.be.empty;
    
            cy.wrap(copiedgrnNumber).as("grnNumber");
    
            cy.log("Copied grn Number: " + copiedgrnNumber);
        });




    }
}
export default grnleveldis_othercharges_flow;