
import action from "../../support/action";
import { faker } from '@faker-js/faker';

const patientName = faker.person.fullName();
const phone = faker.phone.number('9#########');
const firstName = faker.person.firstName();
const middleName = faker.person.firstName();   
const lastName = faker.person.lastName();
const estimatedAge = faker.number.int({ min: 1, max: 90 });



const FDM_MAIN_PAGE = {
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

    }


}
export default FDM_MAIN_PAGE;