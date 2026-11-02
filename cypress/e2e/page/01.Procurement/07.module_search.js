import main_login from "../../locators/01.login_locators";
import purchase_request from "../../locators/02.Purchase_Request";


const module_search= {
    module: function () {
        cy.wait(1000);
        cy.xpath(purchase_request.Setting_icon).click();
        cy.wait(1000);
        cy.xpath(purchase_request.Static).click();
        cy.wait(1000);
        cy.get(purchase_request.Close).click();
        cy.get(purchase_request.Module_Search).click();
        cy.get(purchase_request.Module_Name_type).type('procurement');
        cy.contains('div', 'Procurement').click();
        cy.wait(1000);
    },
    indent_module: function()
    {
        cy.wait(1000);
        cy.xpath(purchase_request.Setting_icon).click();
        cy.wait(1000);
        cy.xpath(purchase_request.Static).click();
        cy.wait(1000);
        cy.get(purchase_request.Close).click();
        cy.get(purchase_request.Module_Search).click();
        cy.get(purchase_request.Module_Name_type).type('indent');
        cy.contains('div', ' Indent ').click();
        cy.wait(1000);

    }
}
export default module_search;