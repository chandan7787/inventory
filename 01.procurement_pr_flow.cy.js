//import grn from "./02.regular_grn_flow.cy";
import login from "../page/procurementpath";
import grn from "../page/reguler_grn";
import 'cypress-file-upload'
import 'cypress-xpath'
describe(' ',function (){


    it('purchase request flow',function(){
        login.procurementlogin();
        cy.viewport(1920, 1080);
        login.procurement_icon();
       login.procurement_purchase_request();
        login.pr_verificatio();
        login.pr_approve();
        login.po_creation();
        grn.approve_po();
        grn.regular_grn();
        grn.grn_approve();;


    })

})