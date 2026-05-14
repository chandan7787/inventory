import login from "../page/procurementpath";
import grn from "../page/reguler_grn";
import EMR from "../page/emergency_grn_path";
import po_amendmend from "../page/amendmend1";


describe(' ',function ()
{

    it('',function()
    {
        login.procurementlogin();
        cy.viewport(1920, 1080);
        login.procurement_icon();
         po_amendmend.po_amendmend_flow();
         po_amendmend.amendment_flow()
        po_amendmend.amd_regular_grn();
        grn.grn_approve();
    })
})