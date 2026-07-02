import action from "../../support/action";

const Mark_To_Bill = {
    Mark_To_Bill: function()
    {
        cy.xpath(action.Mark_To_Bill).click();
        cy.wait(1000);
        cy.xpath(action.Continue_Button).click();
        cy.wait(1000);
        cy.xpath(action.CONFIRM_YES_BUTTON).click();
        cy.wait(5000)
    }


}
export default Mark_To_Bill;