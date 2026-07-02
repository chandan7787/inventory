import action from "../../support/action";
import { faker } from '@faker-js/faker';

const patientName = faker.person.fullName();
const phone = faker.phone.number('9#########');
const firstName = faker.person.firstName();
const middleName = faker.person.firstName();   
const lastName = faker.person.lastName();


const estimatedAge = faker.number.int({ min: 1, max: 90 });

const login_page = {    
    login_page_flow: function()
    {
        cy.visit("https://v2qa.lifetrenz.com/#/auth/login")
    cy.xpath("//input[@placeholder='User Name']").type("Sundar")
    cy.wait(2000)
    cy.get('[formcontrolname="password"]').type("Sundar@123")
    cy.wait(2000)
    cy.xpath("//span[text()='LOGIN']").click()
    cy.wait(2000)
    },
    FDM_REGISTRATION_FLOW: function()
    {
    cy.viewport(1920, 1080);
    cy.xpath(action.sidebutton).type("Front Desk Management")
    cy.wait(2000)
    cy.xpath(action.FDM_LABEL).click()
    cy.wait(1000)
    cy.xpath(action.FDM_REGISTRATION).click()
    cy.wait(1000)
    cy.xpath(action.SOLUTATION).click()
    cy.wait(1000)
    cy.xpath(action.MR).click()
    cy.wait(1000)
    cy.xpath(action.FIRST_NAME).type(patientName)
    cy.wait(1000)
    cy.xpath(action.MIDDLE_NAME).type(middleName)
    cy.wait(1000)
    cy.xpath(action.LAST_NAME).type(lastName)
    cy.wait(1000)
    cy.xpath(action.ESTIMATED_AGE).clear().type(estimatedAge)
    cy.wait(1000)
    cy.xpath(action.PHONE_NO).type(phone)
    cy.wait(1000)
    cy.xpath(action.REGISTER_BUTTON).click()
    cy.wait(1000)
    cy.xpath('//table/tbody/tr[2]/td[1]/label/span')
            .should('be.visible')
            .invoke("text")
            .then((MPIText) => {
                const storeMPInumber = MPIText.trim();
                cy.setMPInumber(storeMPInumber);
                cy.log('Stored MP Inumber:', storeMPInumber);
            });
            cy.wait(1000)

    },
    APPOINTMENT_FLOW: function()
    {
        cy.getMPInumber().then((storeMPInumber) => {
        cy.wait(1000)
        cy.xpath(action.Appointment).click();
        cy.wait(1000)
        cy.xpath(action.New_Appointment).click();
        cy.wait(1000)
        cy.xpath(action.SELECT_PATIENT).click();
        cy.wait(1000)
        cy.xpath(action.PATIENT_MPI_PAST).type(storeMPInumber);
        cy.wait(1000)
        cy.xpath(action.SEARCH_BUTTON).click();
        cy.wait(1000)
        cy.xpath(action.PATIENT_SELECT).click();
        cy.wait(1000)
        cy.xpath(action.SELECT_PHYSICIAN).click();
        cy.wait(1000)
        cy.xpath(action.PHYSICIAN_NAME_SEARCH).type("sundar");
        cy.wait(1000)
        cy.xpath(action.PHYSICIAN_SEARCH).click();
        cy.wait(1000)
        cy.xpath(action.PHYSICIAN_SELECT).click();
        cy.wait(3000)
        //cy.xpath("//div[1]/div/div/div[1]/div[2]/button/span").click();
        
        
cy.get('.e-appointment')
  .filter(':contains("Open")')
  .first()
  .scrollIntoView()
  .should('be.visible')
  .click({ force: true });
        cy.xpath(action.PAYER_TYPE).click();
        cy.wait(1000)
        cy.xpath(action.SELFPAY).click();
        cy.wait(1000)
        cy.xpath(action.BOOK_APPOINTMENT).click();
        cy.wait(1000)
        cy.xpath(action.CONFIRM_YES_BUTTON).click();
        cy.wait(3000)
        cy.xpath(action.CLICK_HERE).click();
        cy.wait(5000)
        cy.xpath(action.COMMIT_PRINT).click();
        cy.wait(5000)
        cy.xpath(action.MARK_ARRIVE).click();
        cy.wait(3000)
        });
    },
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
        cy.xpath(action.START_BUTTON).click()
        cy.wait(3000)
        cy.xpath(action.START_CONSULT_BUTTON).click()
        cy.wait(4000)
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

    },
    Mark_To_Bill: function()
    {
        cy.xpath(action.Mark_To_Bill).click();
        cy.wait(1000);
        cy.xpath(action.Continue_Button).click();
        cy.wait(1000)
        cy.xpath(action.CONFIRM_YES_BUTTON).click();
        cy.wait(1000)
    },
    FDM_MODULE: function()
    {
        cy.getMPInumber().then((storeMPInumber) => {
            cy.wait(1000)
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
export default login_page;