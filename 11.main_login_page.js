import action from "../../support/action";
import { faker } from '@faker-js/faker';

const patientName = faker.person.fullName();
const phone = faker.phone.number('9#########');
const firstName = faker.person.firstName();
const middleName = faker.person.firstName();   
const lastName = faker.person.lastName();


const estimatedAge = faker.number.int({ min: 1, max: 90 });
const main_login_page = {    
    login_page_flow: function()
    {
        cy.visit("https://v2qa.lifetrenz.com/#/auth/login")
    cy.xpath("//input[@placeholder='User Name']").type("Sundar")
    cy.wait(2000)
    cy.get('[formcontrolname="password"]').type("Sundar@123")
    cy.wait(2000)
    cy.xpath("//span[text()='LOGIN']").click()
    cy.wait(5000)
    }
}
export default main_login_page;