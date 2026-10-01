import Amendment_PO_flows from "../../page/01.Procurement/11.Amendment_PO_flow"
import purchase_order_flow from "../../page/01.Procurement/06.purchase_order"
import po_verificatio_flow from "../../page/01.Procurement/08.po_verificatio"
import purchase_order_approval from "../../page/01.Procurement/09.po_approval"
import login_page from "../../page/01.Procurement/01.Login_Page";
import module_search from "../../page/01.Procurement/07.module_search";





describe("Purchase Order Amendment Flow Test", () => {

    it("TEST_CASE_007 - Purchase_order_Amendment_PO_flow", () => 
    {
        //login page
        login_page.LOgin();

        //search respective module 
         module_search.module();

        //create purchase order 
        purchase_order_flow.purchase_order();

        //po verification flow
        po_verificatio_flow.po_verificatio();

        //po approval flow
        purchase_order_approval.po_approval();

        //create Amendment_PO and approve 
        Amendment_PO_flows.Amendment_PO();




    })
})