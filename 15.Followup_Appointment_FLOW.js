import action from "../../support/action";

const Followup_Appointment_FLOWS = {
    Followup_Appointment_FLOW: function() 
    {
        cy.xpath(action.Free_Followup_Appointment).click()
        cy.wait(4000)
        cy.xpath(action.Followup_Appointment).click()
        cy.wait(2000)
        cy.get('.e-appointment')
  .filter(':contains("Open")')
  .first()
  .scrollIntoView()
  .should('be.visible')
  .click({ force: true });
        cy.xpath(action.PAYER_TYPE_1).click();
        cy.wait(1000)
        cy.xpath(action.SELFPAY).click();
        cy.wait(1000)
        cy.xpath(action.Conduct_Mode).click();
        cy.wait(1000)
        cy.xpath(action.IN_PERSON).click();
        cy.wait(1000)
        cy.xpath(action.VISIT_TYPE).click();
        cy.wait(1000)
        cy.xpath(action.FIRST_VISIT).click();
        cy.wait(1000)
        cy.xpath(action.BOOK_APPOINTMENT).click();
        cy.wait(1000)
        cy.xpath(action.CONFIRM_YES_BUTTON).click();
        cy.wait(1000)
    }

}
export default Followup_Appointment_FLOWS;