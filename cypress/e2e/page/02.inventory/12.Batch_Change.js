import stock_movement_loc from "../../locators/08.stock_movement";

const Batch_Change_flow=
{
    Batch_Change:function()
    {
        cy.contains("a", "Batch Chan").click()
        cy.contains("a","Batch Changes").click()
        cy.contains("button","Add New").click()
        

    }

}
export default Batch_Change_flow;
