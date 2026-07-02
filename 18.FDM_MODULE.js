import action from "../../support/action";

const main_fdm = {
    FDM_MODULE: function()
    {
        cy.getMPInumber().then((storeMPInumber) => {
            cy.wait(2000)
        cy.xpath(action.MAIN_SEARCH).type("Front Desk Management")
        cy.wait(1000)
        cy.xpath(action.FDM_MODULE).click()
        cy.wait(1000)
        cy.xpath(action.Appointment).click();
        cy.wait(1000)
        cy.xpath(action.Followup_Appointment_Request).click();
        cy.wait(1000)
        cy.xpath(action.SEARCH_FILTER).click()
        cy.wait(1000)
        cy.xpath(action.patient_name).type(patientName);
        cy.wait(1000)
        cy.xpath(action.SEARCH_BUTTON).click()
        cy.wait(1000)
        cy.xpath(action.schedule_Button).click();
        cy.wait(1000)
        cy.get('.e-appointment')
  .filter(':contains("Open")')
  .first()
  .scrollIntoView()
  .should('be.visible')
  .click({ force: true });
  cy.xpath(action.payer_type_2).click();
        cy.wait(1000)
        cy.xpath(action.SELFPAY).click();
        cy.wait(1000)
        cy.xpath(action.conduct_mode_1).click();
        cy.wait(1000)
        cy.xpath(action.IN_PERSON).click();
        cy.wait(1000)
        cy.xpath(action.VISIT_TYPE).click();
        cy.wait(1000)
        cy.xpath(action.FIRST_VISIT).click();
        cy.xpath(action.BOOK_APPOINTMENT).click();
        cy.wait(1000)
        cy.xpath(action.CONFIRM_YES_BUTTON).click();
        cy.wait(1000)


        
        
        });
    }


}
export default main_fdm;