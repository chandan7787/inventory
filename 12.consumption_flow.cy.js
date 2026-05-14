import new_transfer_flow from "../page/08.new_transfer_flow";
import login from "../page/procurementpath";

describe(' ',function (){

    it('inventory > add stock flow  ',function(){
        login.procurementlogin();
        cy.viewport(1920, 1080);
        login.inventory_module();
        new_transfer_flow.consumption_stock_flow();
    })
})