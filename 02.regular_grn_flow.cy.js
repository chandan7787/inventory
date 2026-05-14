import login from "../page/procurementpath";
import grn from "../page/reguler_grn";
describe(' ',function (){


    it('',function()
    {
        login.procurementlogin();
        cy.viewport(1920, 1080);
        login.procurement_icon();
        grn.regular_grn();
        grn.grn_approve();
    })
})