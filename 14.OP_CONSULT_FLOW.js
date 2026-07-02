import action from "../../support/action";

const OP_CONSULT_FLOWS = {
    OP_CONSULT_FLOW: function()
    {
        cy.getMPInumber().then((storeMPInumber) => {
        cy.xpath(action.MAIN_SEARCH).type("outpatient consultation")
        cy.wait(1000)
        cy.xpath(action.OP_CONSULT_ICON).click()
        cy.wait(1000)
        cy.xpath(action.Doctor_Consultation_Queue).click()
        cy.wait(1000)
        cy.xpath(action.SEARCH_FILTER).click()
        cy.wait(1000)
        cy.xpath(action.SEARCH_MPI).type(storeMPInumber);
        cy.wait(1000)
        cy.xpath(action.SEARCH_BUTTON).click()
        cy.wait(3000)
        //cy.xpath(action.START_BUTTON).click()
        cy.wait(3000)
        cy.xpath(action.START_CONSULT_BUTTON).click()
        cy.wait(7000)
        });
    },
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
    },
        schedule_appointment: function()
    {

         cy.xpath(action.Free_Followup_Appointment).click()
         cy.wait(1000)
         cy.xpath(action.schedule_appointment).click()
         cy.wait(1000)
         //cy.xpath(action.Preferred_Date).click()
         cy.wait(1000)
         const today = new Date().getDate();
        cy.wait(1000)
         cy.xpath(action.Preferred_Date).click();
         cy.wait(1000)

        cy.xpath(`//span[text()='${today}']`).click();
        cy.wait(1000)
        cy.xpath(action.Followup_Notes_Remark).type("Follow-up notes for the appointment");
        cy.wait(1000)
        cy.xpath(action.Send_Request_Button).click();
        cy.wait(5000)

    },
    Mark_To_Bill: function()
    {
        cy.xpath(action.Mark_To_Bill).click();
        cy.wait(1000);
        cy.xpath(action.Continue_Button).click();
        cy.wait(1000)
        cy.xpath(action.CONFIRM_YES_BUTTON).click();
        cy.wait(5000)
    }


}
export default OP_CONSULT_FLOWS;
