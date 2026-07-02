import action from "../../support/action";

const schedule_appointments = {
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

    }


}
export default schedule_appointments;