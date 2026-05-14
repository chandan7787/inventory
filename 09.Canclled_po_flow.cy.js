import po_amendmend from "../page/amendmend1";
import login from "../page/procurementpath";


describe(' ',function (){


    it('po cancelation flow',function(){
        login.procurementlogin();
        cy.viewport(1920, 1080);
        login.procurement_icon();
        po_amendmend.po_creation();

    })
})