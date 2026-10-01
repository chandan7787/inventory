import purchase_order_flow from "../../page/01.Procurement/06.purchase_order";
import Cancelled_PO_flow from "../../page/01.Procurement/10.Cancelled_PO";
import login_page from "../../page/01.Procurement/01.Login_Page";
import module_search from "../../page/01.Procurement/07.module_search";
import po_verificatio_flow from "../../page/01.Procurement/08.po_verificatio";




describe("Cancelled Purchase Order Flow Test", () => {

    it("TEST_CASE_006 - Purchase_order_canclled_flow", () => 
    {
        login_page.LOgin();
        module_search.module();
        purchase_order_flow.purchase_order();
        po_verificatio_flow.po_verificatio()
        Cancelled_PO_flow.cancel_approvepo();
        Cancelled_PO_flow.Cancelled_PO();
        
    });
});