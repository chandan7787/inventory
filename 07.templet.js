import action from "../../support/action";
import { faker } from '@faker-js/faker';


const templateName = `Purchase Request A${Date.now()}`;
const description = faker.lorem.words(4);

const procurement_templet_creation = {

    pr_templet_creation: function()
    {
        cy.xpath(action.templete).click();
        cy.wait(2000)
        cy.xpath(action.templet_add_button).click();
        cy.wait(2000)
        cy.xpath(action.templet_name).type(templateName);
        cy.wait(2000)
        cy.xpath(action.discription).type(description);
        cy.wait(2000)
        cy.xpath(action.template).click();
        cy.wait(2000)
        cy.xpath(action.purchase_request).click();
        cy.wait(2000)
        cy.xpath(action.item_1).type("KA11");

cy.contains('KA11')
  .should('be.visible')
  .click();
        //cy.xpath(action.item_1).type("KA11");
        cy.wait(2000)
        //cy.xpath(action.itemname_1).click();
        cy.wait(2000)
        cy.xpath(action.templet_qty1).type("100");
        cy.wait(2000)
        cy.xpath(action.add_item).click();
        cy.wait(2000)
        cy.xpath(action.item_2).type("KA11");
        cy.wait(2000)
        cy.xpath(action.itemname_2).click();
        cy.wait(2000)
        cy.xpath(action.templet_qty2).type("100");
        cy.wait(2000)
        cy.xpath(action.add_item2).click();
        cy.wait(2000)
        cy.xpath(action.item_3).type("KA11");
        cy.wait(2000)
        cy.xpath(action.itemname_3).click();
        cy.wait(2000)
        cy.xpath(action.templet_qty3).type("100");
        cy.wait(2000)
        cy.xpath(action.template_save).click();
        cy.wait(2000)



    }

}
export default procurement_templet_creation;