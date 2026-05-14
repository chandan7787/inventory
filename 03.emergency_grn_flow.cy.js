import login from "../page/procurementpath";
import grn from "../page/reguler_grn";
import EMR from "../page/emergency_grn_path";

describe(' ',function ()
{

    it('',function()
    {
        login.procurementlogin();
        cy.viewport(1920, 1080);
        login.procurement_icon();
        EMR.Emergency_grn_flow();
        grn.grn_approve();
    })
})
