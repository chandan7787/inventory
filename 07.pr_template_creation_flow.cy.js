import login from "../page/procurementpath";
import procurement_templet_creation from "../page/07.templet";

it('Validate the end-to-end Procurement flow using a Purchase Request template, from PR creation through PO processing to Regular GRN approval.',function(){
    login.procurementlogin();
    cy.viewport(1920, 1080);
    login.procurement_icon();
    procurement_templet_creation.pr_templet_creation();
});