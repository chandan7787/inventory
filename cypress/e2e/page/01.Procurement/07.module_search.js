import purchase_request from "../../locators/02.Purchase_Request";

const module_search = {
    module: function () {
        cy.xpath(purchase_request.Setting_icon).should('be.visible').click();
        cy.xpath(purchase_request.Static).should('be.visible').click();
        cy.get(purchase_request.Close).should('be.visible').click();
        cy.get(purchase_request.Module_Search).should('be.visible').click();
        cy.get(purchase_request.Module_Name_type).should('be.visible').type('procurement');
        cy.contains('div', 'Procurement').should('be.visible').click();
        cy.wait(1000);
    }
}
export default module_search;
