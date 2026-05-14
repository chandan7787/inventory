import login from "../page/procurementpath"
import new_transfer_flow from "../page/08.new_transfer_flow";

describe(' ',function (){


    it('inventory > new transfer flow ',function(){
        login.procurementlogin();
            cy.viewport(1920, 1080);
         login.inventory_module();
         new_transfer_flow.new_transfer();
         new_transfer_flow.Receiving_Queue();
         new_transfer_flow.Rejected_Stock_Transfers();
    })
})