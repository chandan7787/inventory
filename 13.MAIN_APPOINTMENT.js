
import action from "../../support/action";

const FDM_MAIN_PAGES = {
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
    }



}
export default FDM_MAIN_PAGES;
