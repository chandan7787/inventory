import purchase_order_loc from "../../locators/03.purchase_order_loc";
import purchase_request from "../../locators/02.Purchase_Request";

const purchase_order_flow = {

    purchase_order: function () {

        // Create Purchase Order
        cy.contains("a", "Create Purchase Order")
            .should("be.visible")
            .click();

        cy.contains("button", "New PO")
            .should("be.visible")
            .click();

        // Requesting Store
        cy.xpath(purchase_request.Requesting_Store)
            .should("be.visible")
            .click();

        cy.get(purchase_request.store_input)
            .should("be.visible")
            .type("Healthcare store");

        cy.xpath(purchase_request.Healthcare_store)
            .should("be.visible")
            .click();

        // Vendor
        cy.xpath(purchase_order_loc.vendor)
            .should("be.visible")
            .type("Chandu");

        cy.contains("li", "Chandu / CHA446")
            .should("be.visible")
            .click();

        // Purchasing Store
        cy.xpath(purchase_order_loc.Purchasing_Store)
            .should("be.visible")
            .click();

        cy.get(purchase_request.store_input)
            .should("be.visible")
            .type("HealthPlus Pharmacy");

        cy.xpath(purchase_request.HealthPlus_Pharmacy)
            .should("be.visible")
            .click();

        // Required On - Select today's date
        cy.xpath('//input[@placeholder="DD/MM/YYYY" and @role="combobox"]')
            .should("be.visible")
            .click();

        cy.get(".p-datepicker-today span")
            .first()
            .should("be.visible")
            .click();

        // Add Items
        cy.xpath(purchase_order_loc.po_additems)
            .should("be.visible")
            .click();

        cy.contains("a", "From Direct Search")
            .should("be.visible")
            .click();

        // Add first item
        cy.get(purchase_request.item_name)
            .should("be.visible")
            .type("DOLO 650.11 MG-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
         .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add second item
        cy.get(purchase_request.item_name)
            .clear()
            .type("DOLO 650.1 MG-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
            .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add third item
        cy.get(purchase_request.item_name)
            .clear()
            .type("DOLO 650.1 MG LESS-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
            .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add selected items to PO
        cy.xpath(purchase_order_loc.Add_Selected_Items_to_PO)
            .should("be.visible")
            .click();

            //DOLO 650.11 MG-KA11
        cy.contains("tr", " DOLO 650.11 MG-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');


            // DOLO 650.1 MG-KA11 
            cy.contains("tr", " DOLO 650.1 MG-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');


            // DOLO 650.1 MG LESS-KA11 
            cy.contains("tr", " DOLO 650.1 MG LESS-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');

            //commit
            cy.contains("button","Commit").click();
            cy.wait(3000);

            cy.xpath(purchase_order_loc.po_number)
    .should("be.visible")
    .invoke("text")
    .then((poText) => {

        const copiedPoNumber = poText.trim();

        expect(copiedPoNumber).to.not.be.empty;

        cy.wrap(copiedPoNumber).as("PONumber");

        cy.log("Copied PO Number: " + copiedPoNumber);
    });

    },

    other_charges:function()
    {
        cy.contains("a", "Create Purchase Order")
            .should("be.visible")
            .click();

        cy.contains("button", "New PO")
            .should("be.visible")
            .click();

        // Requesting Store
        cy.xpath(purchase_request.Requesting_Store)
            .should("be.visible")
            .click();

        cy.get(purchase_request.store_input)
            .should("be.visible")
            .type("Healthcare store");

        cy.xpath(purchase_request.Healthcare_store)
            .should("be.visible")
            .click();

        // Vendor
        cy.xpath(purchase_order_loc.vendor)
            .should("be.visible")
            .type("Chandu");

        cy.contains("li", "Chandu / CHA446")
            .should("be.visible")
            .click();

        // Purchasing Store
        cy.xpath(purchase_order_loc.Purchasing_Store)
            .should("be.visible")
            .click();

        cy.get(purchase_request.store_input)
            .should("be.visible")
            .type("HealthPlus Pharmacy");

        cy.xpath(purchase_request.HealthPlus_Pharmacy)
            .should("be.visible")
            .click();

        // Required On - Select today's date
        cy.xpath('//input[@placeholder="DD/MM/YYYY" and @role="combobox"]')
            .should("be.visible")
            .click();

        cy.get(".p-datepicker-today span")
            .first()
            .should("be.visible")
            .click();

        // Add Items
        cy.xpath(purchase_order_loc.po_additems)
            .should("be.visible")
            .click();

        cy.contains("a", "From Direct Search")
            .should("be.visible")
            .click();

        // Add first item
        cy.get(purchase_request.item_name)
            .should("be.visible")
            .type("DOLO 650.11 MG-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
         .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add second item
        cy.get(purchase_request.item_name)
            .clear()
            .type("DOLO 650.1 MG-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
            .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add third item
        cy.get(purchase_request.item_name)
            .clear()
            .type("DOLO 650.1 MG LESS-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
            .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add selected items to PO
        cy.xpath(purchase_order_loc.Add_Selected_Items_to_PO)
            .should("be.visible")
            .click();

            //DOLO 650.11 MG-KA11
        cy.contains("tr", " DOLO 650.11 MG-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');


            // DOLO 650.1 MG-KA11 
            cy.contains("tr", " DOLO 650.1 MG-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');


            // DOLO 650.1 MG LESS-KA11 
            cy.contains("tr", " DOLO 650.1 MG LESS-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');

            

        cy.contains("li","Other Charges").click()
        //commit
            cy.contains("button","Commit").click();
            cy.wait(3000);

    },
    po_level_Discount:function()
    {


        // Create Purchase Order
        cy.contains("a", "Create Purchase Order")
            .should("be.visible")
            .click();

        cy.contains("button", "New PO")
            .should("be.visible")
            .click();

        // Requesting Store
        cy.xpath(purchase_request.Requesting_Store)
            .should("be.visible")
            .click();

        cy.get(purchase_request.store_input)
            .should("be.visible")
            .type("Healthcare store");

        cy.xpath(purchase_request.Healthcare_store)
            .should("be.visible")
            .click();

        // Vendor
        cy.xpath(purchase_order_loc.vendor)
            .should("be.visible")
            .type("Chandu");

        cy.contains("li", "Chandu / CHA446")
            .should("be.visible")
            .click();

        // Purchasing Store
        cy.xpath(purchase_order_loc.Purchasing_Store)
            .should("be.visible")
            .click();

        cy.get(purchase_request.store_input)
            .should("be.visible")
            .type("HealthPlus Pharmacy");

        cy.xpath(purchase_request.HealthPlus_Pharmacy)
            .should("be.visible")
            .click();

        // Required On - Select today's date
        cy.xpath('//input[@placeholder="DD/MM/YYYY" and @role="combobox"]')
            .should("be.visible")
            .click();

        cy.get(".p-datepicker-today span")
            .first()
            .should("be.visible")
            .click();

        // Add Items
        cy.xpath(purchase_order_loc.po_additems)
            .should("be.visible")
            .click();

        cy.contains("a", "From Direct Search")
            .should("be.visible")
            .click();

        // Add first item
        cy.get(purchase_request.item_name)
            .should("be.visible")
            .type("DOLO 650.11 MG-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
         .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add second item
        cy.get(purchase_request.item_name)
            .clear()
            .type("DOLO 650.1 MG-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
            .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add third item
        cy.get(purchase_request.item_name)
            .clear()
            .type("DOLO 650.1 MG LESS-KA11");

        cy.xpath(purchase_order_loc.po_search_button)
            .click();

        cy.xpath(purchase_order_loc.item_check_box)
            .click();

        // Add selected items to PO
        cy.xpath(purchase_order_loc.Add_Selected_Items_to_PO)
            .should("be.visible")
            .click();

            //DOLO 650.11 MG-KA11
        cy.contains("tr", " DOLO 650.11 MG-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', 'DOLO 650.11 MG-KA11')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');


            // DOLO 650.1 MG-KA11 
            cy.contains("tr", " DOLO 650.1 MG-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', ' DOLO 650.1 MG-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');


            // DOLO 650.1 MG LESS-KA11 
            cy.contains("tr", " DOLO 650.1 MG LESS-KA11 ")
            .find(purchase_order_loc.po_qty)
            .clear()
            .type('5')

             cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(1)
            .clear()
            .type('1');

            cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(2)
            .clear()
            .type('100');

            cy.contains('tr', ' DOLO 650.1 MG LESS-KA11 ')
            .find('input[type="number"][min="0"]')
            .eq(3)
            .clear()
            .type('5');

            
        cy.contains("li","Discount").click()
        cy.contains("span","Select Type").click()
        cy.contains("span","%").click()
        cy.get(purchase_order_loc.dis_amt).type('10')
        cy.contains("button","Commit").click();
        cy.wait(1500);
        cy.xpath(purchase_order_loc.po_number)
    .should("be.visible")
    .invoke("text")
    .then((poText) => {

        const copiedPoNumber = poText.trim();

        expect(copiedPoNumber).to.not.be.empty;

        cy.wrap(copiedPoNumber).as("PONumber");

        cy.log("Copied PO Number: " + copiedPoNumber);
    });
    cy.wait(1500);


    },
    



};

export default purchase_order_flow;