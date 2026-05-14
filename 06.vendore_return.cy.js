import login from "../page/procurementpath";
import grn from "../page/reguler_grn";
import EMR from "../page/emergency_grn_path";
import direct_grn from "../page/direct_grn_path";


describe(' ',function ()
{

    it('',function()
    {
        login.procurementlogin();
        cy.viewport(1920, 1080);
        login.procurement_icon();
        direct_grn.direct_grn_flow()
        grn.grn_approve();
        grn.vendore_return_flow();
    })
})